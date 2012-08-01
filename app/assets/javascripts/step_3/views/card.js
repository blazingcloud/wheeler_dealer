Wheel.View.subclass('Step3.Views.Card', {
  init: function() {
    this.$faces = this.$.find('.faces');
  },

  listen: function() {
    this.$.on('tap', this.onTap.bind(this));
  },

  onTap: function(e) {
    e.stopPropagation();
    this.model.move();
    this.$
      .css('left',    this.model.left)
      .css('z-index', this.model.zIndex);
    this.$faces.addClass('flipped');
    this.$.off();
  }
});
