Step4.OffsetPositioning = {
  positionCard: function(card, zIndex) {
    var position = this.position();
    card.position({
      left: position.left,
      top: position.top + this.offset * this.cards.length,
      zIndex: (zIndex || position.zIndex) + 1
    });
  }
};
