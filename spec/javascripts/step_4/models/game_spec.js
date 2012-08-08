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
          expect(f).toBeA(Step4.Models.Stack);
        });
      });

      it('has tableaus', function() {
        expect(game.tableaus.length).toBe(7);
        _.each(game.tableaus, function(f) {
          expect(f).toBeA(Step4.Models.Tableau);
        });
      });
    });

    it('listens on each card for move events', function() {
      spyOn(game, 'moveCard');
      var card = game.cards[0];
      card.trigger('move');
      expect(game.moveCard).toHaveBeenCalled();
    });
  });

  describe('#moveCard', function() {
    var card;
    beforeEach(function() {
      card = game.cards[0];
    });

    it('removes the card from the deck', function() {
      spyOn(game.deck, 'remove');
      game.moveCard(card);
      expect(game.deck.remove).toHaveBeenCalledWith(card);
    });

    it('it add the card to the waste', function() {
      spyOn(game.waste, 'add');
      game.moveCard(card);
      expect(game.waste.add).toHaveBeenCalledWith(card);
    });
  });
});
