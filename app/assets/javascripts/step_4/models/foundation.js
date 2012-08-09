Step4.Models.Stack.subclass('Step4.Models.Foundation', {
  canAdd: function(card) {
    var _super = this._super(card);
    if (!_super) {return _super;}

    var top = this.topCard();
    if (top) {
      return card.suit === top.suit &&
        Step4.Models.Card.increasingValue(top.faceValue) === card.faceValue;
    } else {
      return card.faceValue === 'A';
    }
  }
});
Step4.Models.Foundation.mixover(Step4.OffsetPositioning);
