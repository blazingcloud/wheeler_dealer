Wheel.View.subclass('Step4.Views.Card', {
  init: function() {
    this.animate();
    this.$faces = this.$.find('.faces');
  },

  listen: function() {
    this.model.on('change:position',  this.animate.bind(this));
    this.model.on('change:face',      this.flip.bind(this));

    this.$.on('tap', function(e) {
      e.stopPropagation();
      this.model.trigger('move');
    }.bind(this));
  },

  flip: function() {
    this.$faces.toggleClass('flipped');
  },

  animate: function() {
    var position = this.model.position();
    this.$
      .css('left', position.left)
      .css('top', position.top)
      .css('z-index', position.zIndex);
  }
});
