Wheel.View.subclass('Deck', {
  init: function() {
    // create a deck of cards
    this.cards = [];
    $.each(this._class.faceValues, function(i, faceValue) {
      $.each(this._class.suits, function(j, suit) {
        this.cards.push(Card.build({
          suit: suit,
          faceValue: faceValue
        }));
      }.bind(this));
    }.bind(this));

    // shuffle it
    this.shuffle();

    // tell each shuffled card to append itself to this parent dom
    $.each(this.cards, function(i, card) {
      this.append(card);
    }.bind(this));
  },

  shuffle: function() {
    // taken from underscore.js
    var shuffled = [], rand;
    $.each(this.cards, function(index, value) {
      if (index == 0) {
        shuffled[0] = value;
      } else {
        rand = Math.floor(Math.random() * (index + 1));
        shuffled[index] = shuffled[rand];
        shuffled[rand] = value;
      }
    });

    this.cards = shuffled;
  }
}, {
  faceValues: ['2','3','4','5','6','7','8','9','10','J','K','A'],
  suits: ['&spades;', '&clubs;', '&hearts;', '&diams;']
});
