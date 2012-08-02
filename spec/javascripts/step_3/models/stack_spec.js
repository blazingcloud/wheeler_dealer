describe('Step3.Models.Stack', function() {
  var stack, stackCards, otherCards;
  beforeEach(function() {
    otherCards = Step3.Models.Card.deck();
    stackCards = otherCards.splice(0,5);
    stack = Step3.Models.Stack.build({cards: stackCards});
  });

  describe('init', function() {
    it('sets the position', function() {
      expect(stack.position()).toEqual({
        left: 0,
        top: 0,
        zIndex: 0
      });
    });

    it('sets the cards to empty if none are provided', function() {
      stack = Step3.Models.Stack.build();
      expect(stack.cards).toEqual([]);
    });
  });

  describe('#canAdd(card)', function() {
    it('is true if it is a card', function() {
      var card = otherCards.pop();
      expect(stack.canAdd(card)).toBe(true);
    });

    it('is false if it is not a card', function() {
      var notCard = {};
      expect(stack.canAdd(notCard)).toBe(false);
    });
  });

  describe('#add(card)', function() {
    var card;
    beforeEach(function() {
      card = otherCards.pop();
    });

    describe('when the card can be accepted by the stack', function() {
      beforeEach(function() {
        spyOn(stack, 'canAdd').andReturn(true);
      });

      it('adds the card to the end of the cards array', function() {
        stack.add(card);
        expect(stack.cards[stack.cards.length - 1]).toBe(card);
      });

      it('returns true', function() {
        expect(stack.add(card)).toBe(true);
      });
    });

    describe('when the card is not accepted by the stack', function() {
      beforeEach(function() {
        spyOn(stack, 'canAdd').andReturn(false);
      });

      it('does not add the card to the list of cards', function() {
        stack.add(card);
        expect(stack.cards.length).toBe(5);
      });

      it('return false', function() {
        expect(stack.add(card)).toBe(false);
      });
    });
  });

  describe('#positionCards', function() {
    it('adjusts the z-index', function() {
      stack.positionCards();
      var i = 1;
      _.each(stack.cards, function(card) {
        expect(card.position().zIndex).toBe(i);
        i++;
      });
    });
  });
});
