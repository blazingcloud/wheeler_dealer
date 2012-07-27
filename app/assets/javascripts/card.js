Wheel.View.subclass('Card', {
  // #optionize in the method that converts a passed in arguments hash into
  // instance variables. We are overriding it here to add the suitEntity to the
  // view.
  //
  // The view uses itself as the view model until a model object is provided.
  // This allows the developer to start fast, and extract model logic as the view
  // gets bigger. Hopefully this happens sooner than later in the dev cycle.
  optionize: function(opts) {
    this._super(opts);
    this.suitEntity = this._class.suitMap[this.suit];
  },

  // this is where you can ad interactions
  listen: function() {
    this.$.on('tap', this.onTap.bind(this));
  },

  onTap: function(e) {
    e.stopPropagation();
    this.$.off('tap'); // stop listening for taps

    this._class.zIndex = this._class.zIndex || 0;
    this._class.zIndex ++;

    this.$
      .css('z-index', this._class.zIndex)
      .css('left', '220px');
  }
}, {
  suitMap: {
    spade:   '&spades;',
    club:    '&clubs;',
    heart:   '&hearts;',
    diamond: '&diams;'
  }
});
