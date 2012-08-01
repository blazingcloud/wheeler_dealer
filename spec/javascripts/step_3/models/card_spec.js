describe('Step3.Models.Card', function() {
  var card, opts; beforeEach(function() {
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

    it('sets the left to 0 unless otherwise provide', function() {
      expect(card.left).toBe(0);
    });

    it('sets the right to 0 unless otherwise provided', function() {
      expect(card.top).toBe(0);
    });
  });

  describe('#move()', function() {
    beforeEach(function() {
      card = Step3.Models.Card.build();
      spyOn(card, 'trigger');
      card.move();
    });

    it('changes left attributes', function() {
      expect(card.left).toBeGreaterThan(0);
    });

    it('changes the z-index', function() {
      expect(card.zIndex).not.toBe(undefined);
      expect(card.zIndex).not.toBe(0);
      expect(card.zIndex).toBe(card._class.zIndex);
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
});
