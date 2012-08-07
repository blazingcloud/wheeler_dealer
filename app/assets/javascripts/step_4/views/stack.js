Wheel.View.subclass('Step4.Views.Stack', {
  init: function() {
    this.model.position({
      left:   this.model.left ||   parseInt(this.$.css('left')) || 0,
      top:    this.model.top ||    parseInt(this.$.css('top')) || 0,
      zIndex: this.model.zIndex || parseInt(this.$.css('z-index')) || 0
    });
  }
});
