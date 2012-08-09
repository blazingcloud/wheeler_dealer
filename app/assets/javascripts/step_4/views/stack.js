Wheel.View.subclass('Step4.Views.Stack', {
  init: function() {
    var offset = this.$.offset();
    var gameOffset = this._class.gameOffset();

    this.model.position({
      left:   this.model.left ||   offset.left - gameOffset.left,
      top:    this.model.top ||    offset.top -  gameOffset.top,
      zIndex: this.model.zIndex || parseInt(this.$.css('z-index'))
    });

    this.toggleShadow();
  },

  listen: function() {
    this.model.on('change:length', this.toggleShadow.bind(this));
  },

  toggleShadow: function() {
    var length = this.model.length();
    if (this.shadow && length === 0) {
      this.removeShadow();
    } else if (!this.shadow && length > 0) {
      this.addShadow();
    }
  },

  addShadow: function() {
    this.shadow = true;
    setTimeout(function() {
      this.$.addClass('shadow');
    }.bind(this), 750);
  },

  removeShadow: function() {
    this.shadow = false;
    this.$.removeClass('shadow');
  }
}, {
  gameOffset: function() {
    if (this._gameOffset) { return this._gameOffset; }
    this._gameOffset = $('#game .stacks').offset();
    return this._gameOffset;
  }
});
