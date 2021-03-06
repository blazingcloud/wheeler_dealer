describe('Step3.Models.Card', function() {
  var card, opts, stacks;
  beforeEach(function() {
    opts = {
      suit: 'heart',
      faceValue: 9
    };

    stacks = {
      deck: {
        add: jasmine.createSpy(),
        remove: jasmine.createSpy()
      },
      tableau: {
        add: jasmine.createSpy(),
        remove: jasmine.createSpy()
      },
      waste: {
        add: jasmine.createSpy(),
        remove: jasmine.createSpy()
      }
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
        top: 0,
        zIndex: 0
      });
    });

    it('sets the face to "back"', function() {
      expect(card.face()).toBe("back");
    });

    it('sets the color to 1 for red cards', function() {
      expect(card.color).toBe(1);
    });

    it('sets the color to 0 for black cards', function() {
      card.suit = 'club';
      card.init();
      expect(card.color).toBe(0);
    });
  });

  it('#changePosition(key, value) is a helper for setting the position attribute', function() {
    card = Step3.Models.Card.build(opts);
    card.changePosition('left', 32);
    expect(card.position().left).toBe(32);
  });

  describe('class methods', function() {
    describe('.deck()', function() {
      it('produces a set of 52 cards', function() {
        var deck = Step3.Models.Card.deck();
        expect(deck.length).toBe(52);
        expect(deck[0] instanceof Step3.Models.Card).toBe(true);
      });
    });

    describe('#nextFaceValue(faceValue)', function() {
      it('is falsey for "A"', function() {
        expect(Step3.Models.Card.nextFaceValue('A')).toBeFalsy();
      });

      it('is "A" when given "2"', function() {
        expect(Step3.Models.Card.nextFaceValue('2')).toBe('A');
      });

      it('is "2" when given "3"', function() {
        expect(Step3.Models.Card.nextFaceValue('3')).toBe('2');
      });

      it('is "Q" when given "K"', function() {
        expect(Step3.Models.Card.nextFaceValue('K')).toBe('Q');
      });
    });
  });
});
