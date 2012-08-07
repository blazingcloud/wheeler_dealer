Wheel.Model.subclass('Step3.Models.Stack', {
  init: function() {
    this.cards = this.cards || [];
    this.position({
      zIndex: this.zIndex || 0,
      left: this.left || 0,
      top: this.top || 0
    });

    this.listen();
  },

  listen: function() {
    // model gets its position information from the view, when
    // the view is initialized.
    this.on('change:position', this.positionCards.bind(this));

    _.each(this.cards, function(card) {
      card.on('movestart', function() {
        this.moveCard(card);
      }.bind(this));
    }.bind(this));
  },

  offset: 35,

  canAdd: function(card) {
    return (card instanceof Step3.Models.Card) && !_.include(this.cards, card);
  },

  add: function(card) {
    var canAdd = this.canAdd(card);
    if (canAdd) {
      var zIndex = this.topZIndex();
      this.positionCard(card, zIndex);
      card.face('front');
      this.cards[this.cards.length] = card;
    }
    return canAdd;
  },

  remove: function(card) {
    this.cards = _.reject(this.cards, function (item) {
      return card === item;
    });
    card.off('movestart');
  },

  positionCard: function(card, zIndex) {
    var position = this.position();
    card.position({
      left: position.left,
      top: position.top,
      zIndex: (zIndex || position.zIndex) + 1
    });
  },

  positionCards: function() {
    var i = this.position().zIndex;
    _.each(this.cards, function(card) {
      this.positionCard(card, i);
      i++;
    }.bind(this));
  },

  moveCard: function(card) {
    this.remove(card);
  },

  bottomCard: function() {
    return this.cards[0];
  },

  topCard: function() {
    return _.last(this.cards);
  },

  topZIndex: function() {
    var topCard = this.topCard();
    var position = topCard && topCard.position();
    return (position && position.zIndex) || 0;
  },

  isEmpty: function() {
    return !this.cards.length;
  }
}, {
  properties: ['position']
});
