import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import routes from './routes';
import initialState from './initialState';

export default function (params) {
  return new Promise((resolve, reject) => {
    // Match the incoming request against the list of client-side routes
    match({ routes, location: params.location }, (error, redirectLocation, renderProps) => {
      if (error) {
        throw error;
      }

      // If there's a redirection, just send this information back to the host application
      if (redirectLocation) {
        resolve({ redirectUrl: redirectLocation.pathname });
        return;
      }

      // If it didn't match any route, renderProps will be undefined
      if (!renderProps) {
        throw new Error(`The location '${ params.url }' doesn't match any route configured in react-router.`);
      }

      // Build an instance of the application
      const app = (
        <RouterContext {...renderProps} />
      );

      // Perform an initial render that will cause any async tasks (e.g., data access) to begin
      renderToString(app);

      // Once the tasks are done, we can perform the final render
      // We also send the redux store state, so the client can continue execution where the server left off
      params.domainTasks.then(() => {
        resolve({
          html: renderToString(app),
          globals: { initialState: initialState.get() }
        });
      }, reject); // Also propagate any errors back into the host application
    });
  });
}
