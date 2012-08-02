describe('Step3.Models.Card', function() {
  var card, opts;
  beforeEach(function() {
    opts = {
      suit: 'heart',
      faceValue: 9
    };
  });

  describe('#init', function() {
    it('suitEntity will be correctly set, given a suit', function() {
      card = Step3.Models.Card.build(opts);
      expect(card.suitEntity).toBe('&hearts;');
    });

    it('sets the default position', function() {
      expect(card.position()).toEqual({
        left: 0,
        top: 0
      });
    });
  });

  describe('class methods', function() {
    describe('.deck()', function() {
      it('produces a set of 52 cards', function() {
        var deck = Step3.Models.Card.deck();
        expect(deck.length).toBe(52);
        expect(deck[0] instanceof Step3.Models.Card).toBe(true);
      });
    });
  });

  it('#changePosition(key, value) is a helper for setting the position attribute', function() {
    card = Step3.Models.Card.build(opts);
    card.changePosition('left', 32);
    expect(card.position().left).toBe(32);
  });
});
