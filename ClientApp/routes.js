import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Mvvm } from './components/Mvvm';
import { Form } from './components/Form';
import { StateOnUrl } from './components/StateOnUrl';
import { Deferred } from './components/Deferred/Deferred';
import { Lazy } from './components/Lazy/Lazy';


export default <Route component={ Layout }>
  <Route path='/' components={{ body: Home }} />
  <Route path='/mvvm' components={{ body: Mvvm }} />
  <Route path='/form' components={{ body: Form }} />
  <Route path='/deferred' components={{ body: Deferred }} />
  <Route path='/lazy' components={{ body: Lazy }} />
  <Route path='/stateonurl' components={{ body: StateOnUrl }} />
</Route>;

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept();
}
