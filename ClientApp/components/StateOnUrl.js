StateOnUrl({
  showArrows: false,
  onUrl: [ 'firstName', 'lastName' ],
  firstName: '',
  lastName: '',
  greeting() {
    return `Hello ${this.firstName()} ${this.lastName()}`;
  },
  render() {
    <div class="row">
      <div class="col-md-4">
        <h1>State on the URL</h1>
        <p>You can put the state of any property in the URL. Type something and refresh the browser. You typically use this feature to put navigation information (menu X, tab Y, selection Z). Putting the state of a form in the URL is more like a party trick.</p>
        <form style="max-width: 300px">
          <div class="form-group">
            <label >First Name</label>
            <input b="value: firstName" type="text" class="form-control" placeholder="First Name" />
          </div>
          <div class="form-group">
            <label >Last Name</label>
            <input b="value: lastName" type="text" class="form-control" placeholder="Last Name" />
          </div>
          <h2 b="text: greeting" />
        </form>
      </div>
      <div class="col-md-8">
        <img src="StateOnUrl_1.png" b="if: !showArrows, mouseover: showArrows(true)" />
        <img src="StateOnUrl_2.png" b="if: showArrows, mouseout: showArrows(false)"/>
      </div>
    </div>
  }
})