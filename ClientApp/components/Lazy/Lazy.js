Lazy({
  showOther: false,
  showArrows: false,
  buttonText() {
    return this.showOther() ? "Hide Other" : "Show Other";
  },
  render(){
    <div class="row">
      <div class="col-md-4">
        <h1>Lazy Loading</h1>
        <p>The other component will be loaded when you press the button. See the network tab of your debugging tools.</p>
        <button type="button" b="toggle: showOther, text: buttonText" class="btn" />
        <div style="margin-top: 50px">
          <Other b="defer: showOther" />
        </div>
      </div>
      <div class="col-md-8">
        <img src="Lazy_1.png" b="if: !showArrows, mouseover: showArrows(true)" />
        <img src="Lazy_2.png" b="if: showArrows, mouseout: showArrows(false)"/>
      </div>
    </div>
  }
})