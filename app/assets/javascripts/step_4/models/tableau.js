Step4.Models.Stack.subclass('Step4.Models.Tableau', {
  canAdd: function(card) {
    var _super = this._super(card);
    if (!_super) {return _super;}

    var top = this.topCard();
    if (top) {
      return card.color !== top.color &&
        Step4.Models.Card.decreasingValue(top.faceValue) === card.faceValue;
    } else {
      return card.faceValue === 'K';
    }
  },

  deal: function(card) {
    this._add(card);
  }
});
Step4.Models.Tableau.mixover(Step4.OffsetPositioning);
