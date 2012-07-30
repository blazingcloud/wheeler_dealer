describe('App.Models.Card', function() {
  var card;
  describe('init', function() {
    it('suitEntity will be correctly set, given a suit', function() {
      card = App.Models.Card.build({
        suit: 'heart',
        faceValue: 9
      });
      expect(card.suitEntity).toBe('&hearts;');
    });
  });
});
