Wheel.Model.subclass('Step3.Models.Stack', {
  init: function() {
    this.cards = this.cards || [];
    this.position({
      zIndex: this.zIndex || 0,
      left: this.left || 0,
      top: this.top || 0
    });
  },

  canAdd: function(card) {
    return card instanceof Step3.Models.Card;
  },

  add: function(card) {
    var canAdd = this.canAdd(card);
    if (canAdd) {
      this.cards[this.cards.length] = card;
    }
    return canAdd;
  },

  positionCards: function() {
    var i = this.position().zIndex + 1;
    _.each(this.cards, function(card) {
      card.changePosition('zIndex', i);
      i++;
    });
  }
}, {
  properties: ['position']
});
