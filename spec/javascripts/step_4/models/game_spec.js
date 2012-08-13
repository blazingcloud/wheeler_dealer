describe('Step4.Models.Game', function() {
  var game;
  beforeEach(function() {
    game = Step4.Models.Game.build();
  });

  describe('#init', function() {
    it('builds cards', function() {
      expect(game.cards.length).toBe(52);
    });

    describe('stacks', function() {
      it('has a deck', function() {
        expect(game.deck).toBeA(Step4.Models.Stack);
      });

      it('has a waste', function() {
        expect(game.waste).toBeA(Step4.Models.Stack);
      });

      it('has foundations', function() {
        expect(game.foundations.length).toBe(4);
        _.each(game.foundations, function(f) {
          expect(f).toBeA(Step4.Models.Foundation);
        });
      });

      it('has tableaus', function() {
        expect(game.tableaus.length).toBe(7);
        _.each(game.tableaus, function(f) {
          expect(f).toBeA(Step4.Models.Tableau);
        });
      });
    });

    it('makes a timed queue', function() {
      expect(game.queue).toBeA(Step4.TimedQueue);
    });
  });

  describe('#nextCard', function() {
    it('returns the top card from the deck', function() {
      var card = game.deck.topCard();
      expect(game.nextCard()).toBe(card);
    });

    it('removes the returned card from the deck', function() {
      var card = game.nextCard();
      expect(_.include(game.deck.cards, card)).toBe(false);
    });
  });

  describe('#move', function() {
    var card;
    beforeEach(function() {
      game.queue.defaultWait = 0;
      card = game.nextCard();
    });

    it('deals a card on to the passed in stack', function() {
      var stack = game.tableaus[0];
      game.move(card, stack);
      game.queue.run();

      waits(10);
      runs(function() {
        expect(_.include(stack.cards, card)).toBe(true);
      });
    });
  });

  describe('#deal', function() {
    beforeEach(function() {
      game.queue.defaultWait = 0;
      game.deal();
      waits(10);
    });

    it('puts 1 card in the first tableau', function() {
      runs(function() {
        expect(game.tableaus[0].length()).toBe(1);
      });
    });

    it('puts 2 cards in the second tableau', function() {
      runs(function() {
        expect(game.tableaus[1].length()).toBe(2);
      });
    });

    it('puts 3 cards in the third tableau', function() {
      runs(function() {
        expect(game.tableaus[2].length()).toBe(3);
      });
    });

    // ...
    it('puts 7 cards in the last tableau', function() {
      runs(function() {
        expect(game.tableaus[6].length()).toBe(7);
      });
    });
  });
});
