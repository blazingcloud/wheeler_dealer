Wheel.Class('App.Models.Card', {
  init: function() {
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
