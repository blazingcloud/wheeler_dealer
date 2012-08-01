Wheel.Class('Step3.Models.Card', {
  init: function() {
    this.suitEntity = this._class.suitMap[this.suit];
    this.left = this.left || 0;
    this.top = this.top || 0;
  },

  move: function() {
    this._class.zIndex = this._class.zIndex || 0;
    this.zIndex = ++ this._class.zIndex;
    this.left = 573;
  }
}, {
  suitMap: {
    spade:   '&spades;',
    club:    '&clubs;',
    heart:   '&hearts;',
    diamond: '&diams;'
  },

  suits: ['spade', 'club', 'heart', 'diamond'],
  faceValues: ['2','3','4','5','6','7','8','9','10','J','Q','K','A'],

  deck: function() {
    var deck = [];
    _.each(this.suits, function(suit) {
      _.each(this.faceValues, function(faceValue) {
        deck.push(this.build({
          suit: suit,
          faceValue: faceValue,
          left: 0,
          top: 0
        }));
      }.bind(this));
    }.bind(this));
    return _.shuffle(deck);
  }
});
