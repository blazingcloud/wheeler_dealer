Step3.Models.Stack.subclass('Step3.Models.Tableau', {
  canAdd: function(card) {
    var _super = this._super(card);
    if (!_super) {return _super;}

    var bottom = this.bottomCard();
    if (bottom) {
      return card.color !== bottom.color &&
        Step3.Models.Card.nextFaceValue(bottom.faceValue) === card.faceValue;
    } else {
      return card.faceValue === 'K';
    }
  },

  positionCard: function(card, zIndex) {
    var position = this.position();
    card.position({
      left: position.left,
      top: position.top + this.offset * this.cards.length,
      zIndex: (zIndex || position.zIndex) + 1
    });
  }
});
