describe('Step4.Models.Stack', function() {
  var stack, stackCards, otherCards;
  beforeEach(function() {
    otherCards = Step4.Models.Card.deck();
    stackCards = otherCards.splice(0,5);
    stack = Step4.Models.Stack.build({cards: stackCards});
    stack.positionCards();
  });

  describe('#init', function() {
    it('sets the position', function() {
      expect(stack.position()).toEqual({
        left: 0,
        top: 0,
        zIndex: 0
      });
    });

    it('sets the cards to empty if none are provided', function() {
      stack = Step4.Models.Stack.build();
      expect(stack.cards).toEqual([]);
    });

    it('listens for changes to the stack position, and changes the card positions', function() {
      stack.position({
        left: 220,
        top: 0,
        zIndex: 42
      });

      expect(stack.cards[0].position()).toEqual({
        left: 220,
        top: 0,
        zIndex: 43
      });
    });

    it('sets the length property', function() {
      expect(stack.length()).toBe(5);
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

    it('is false if the card is a duplicate', function() {
      var card = stack.cards[0];
      expect(stack.canAdd(card)).toBe(false);
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

      it('positions the card', function() {
        spyOn(card, 'position');
        stack.add(card);
        expect(card.position).toHaveBeenCalled();
        expect(card.position.mostRecentCall.args[0]).toEqual({
          left: 0,
          top: 0,
          zIndex: 6
        });
      });

      it('changes the length property', function() {
        stack.add(card);
        expect(stack.length()).toBe(6);
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

  describe('#remove', function() {
    var card;
    beforeEach(function() {
      card = stack.cards[2];
    });

    it('removes the card from the deck', function() {
      stack.remove(card);
      expect(_.include(stack.cards, card)).toBe(false);
    });

    it('decrements the length property', function() {
      stack.remove(card);
      expect(stack.length()).toBe(4);
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

  describe('#isEmpty', function() {
    it('is true if there are no cards', function() {
      stack.cards = [];
      expect(stack.isEmpty()).toBe(true);
    });

    it('is false if there are cards', function() {
      expect(stack.isEmpty()).toBe(false);
    });
  });
});
