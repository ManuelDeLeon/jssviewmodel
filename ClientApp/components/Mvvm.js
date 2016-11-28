Mvvm({
  showArrows: false,
  firstName: '',
  lastName: '',
  greeting() {
    return `Hello ${this.firstName()} ${this.lastName()}`;
  },
  logData() {
    console.log(this.data());
  },
  render() {
    <div class="row">
      <div class="col-md-4">
        <h1>MVVM</h1>
        <p>Components are created using the MVVM pattern with <a target="_blank" href="https://viewmodel.org">viewmodel-react</a></p>
        <form style="max-width: 300px">
          <div class="form-group">
            <label >First Name</label>
            <input b="value: firstName" type="text" class="form-control" placeholder="First Name" />
          </div>
          <div class="form-group">
            <label >Last Name</label>
            <input b="value: lastName" type="text" class="form-control" placeholder="Last Name" />
          </div>
          <button b="click: logData" type="button" class="btn btn-default">Log Data</button>
          
          <h2 b="text: greeting" />
        </form>      
      </div>
      <div class="col-md-8">
        <img src="Mvvm_1.png" b="if: !showArrows, mouseover: showArrows(true)" />
        <img src="Mvvm_2.png" b="if: showArrows, mouseout: showArrows(false)"/>
      </div>
    </div>
  }
})