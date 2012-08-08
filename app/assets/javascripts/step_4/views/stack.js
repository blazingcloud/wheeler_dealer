Wheel.View.subclass('Step4.Views.Stack', {
  init: function() {
    var offset = this.$.offset();
    var gameOffset = this._class.gameOffset();

    this.model.position({
      left:   this.model.left ||   offset.left - gameOffset.left,
      top:    this.model.top ||    offset.top -  gameOffset.top,
      zIndex: this.model.zIndex || parseInt(this.$.css('z-index'))
    });
  }
}, {
  gameOffset: function() {
    if (this._gameOffset) { return this._gameOffset; }
    this._gameOffset = $('#game .stacks').offset();
    return this._gameOffset;
  }
});
