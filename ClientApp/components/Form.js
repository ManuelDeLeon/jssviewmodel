Form({
  firstName: '',
  lastName: '',
  accept: false,
  logData() {
    console.log(this.data());
  },
  created(){
    if (typeof window !== 'undefined') {
      // On the client: pull data from the global initial state
      this.load(window.initialState.form);
    } else {
      // On the server: pull the data from the actual source
      const initialState = require('../initialState').default;
      this.load(initialState.get().form);
    }
  },
  render() {
    <div class="row">
      <div class="col-md-4">
      <h1>SSR Form</h1>
      <p>The data of this form comes from the initial render of your app (Server Side Rendered). Check out the page source.</p>
      <form style="max-width: 300px">
        <div class="form-group">
          <label >First Name</label>
          <input b="value: firstName" type="text" class="form-control" placeholder="First Name" />
        </div>
        <div class="form-group">
          <label >Last Name</label>
          <input b="value: lastName" type="text" class="form-control" placeholder="Last Name" />
        </div>

        <div class="checkbox">
          <label>
            <input b="value: accept" type="checkbox" /> Accept Terms
          </label>
        </div>
        <button b="click: logData" type="button" class="btn btn-default">Log Data</button>
      </form>     
      </div>
      <div class="col-md-8">
        <img src="Form_1.png" />
      </div>
    </div>
  }
})