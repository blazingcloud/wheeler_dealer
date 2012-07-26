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
  }
}, {
  suitMap: {
    spade:   '&spades;',
    club:    '&clubs;',
    heart:   '&hearts;',
    diamond: '&diams;'
  }
});
