Wheel.Model.subclass('Step3.Models.Card', {
  init: function() {
    this.suitEntity = this._class.suitMap[this.suit];
    this.color = this.suit.match(/club|spade/) ? 0 : 1;

    // set default properties
    this.position({
      left: this.left || 0,
      top: this.top || 0,
      zIndex: this.zIndex || 0
    });
    this.face() || this.face('back');
  },

  changePosition: function(key, value) {
    var position = this.position();
    position[key] = value;
    this.position(position);
  }
}, {
  properties: ['position', 'face'],

  suitMap: {
    spade:   '&spades;',
    club:    '&clubs;',
    heart:   '&hearts;',
    diamond: '&diams;'
  },

  suits: ['spade', 'club', 'heart', 'diamond'],
  faceValues: ['A','2','3','4','5','6','7','8','9','10','J','Q','K'],

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
  },

  nextFaceValue: function(faceValue) {
    return this.faceValues[_.indexOf(this.faceValues, faceValue)-1];
  }
});
