Deferred({
  showArrows: false,
  render(){
    <div class="row">
      <div class="col-md-4">
      <h1>Deferred Loading</h1>
      <p>This component is loaded along with the rest of the app (main.js)</p>
      <div style="margin-top: 50px">
        <Other b="defer: true" />
      </div>     
      </div>
      <div class="col-md-8">
        <img src="Deferred_1.png" b="if: !showArrows, mouseover: showArrows(true)" />
        <img src="Deferred_2.png" b="if: showArrows, mouseout: showArrows(false)"/>
      </div>
    </div>
  }
})