Wheel.View.subclass('App.Views.Card', {
  listen: function() {
    this.$.on('tap', this.onTap.bind(this));
  },

  onTap: function(e) {
    e.stopPropagation();
    this.model.move();
    this.$
      .css('left',    this.model.left)
      .css('z-index', this.model.zIndex);
    this.$.off();
  }
});
