Step4.Models.Stack.subclass('Step4.Models.Tableau', {
  canAdd: function(card) {
    var _super = this._super(card);
    if (!_super) {return _super;}

    var top = this.topCard();
    if (top) {
      return card.color !== top.color &&
        Step4.Models.Card.nextFaceValue(top.faceValue) === card.faceValue;
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
