describe('Step4.Models.Game', function() {
  var game;
  beforeEach(function() {
    game = Step4.Models.Game.build();
  });

  describe('#init', function() {
    it('builds cards', function() {
      expect(game.cards.length).toBe(52);
    });

    it('builds stacks', function() {
      expect(game.deck instanceof Step4.Models.Stack).toBe(true);
      expect(game.tableau instanceof Step4.Models.Stack).toBe(true);
      expect(game.waste instanceof Step4.Models.Stack).toBe(true);
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

    it('removes the card from the existing deck', function() {
      spyOn(game.deck, 'remove');
      game.moveCard(card);
      expect(game.deck.remove).toHaveBeenCalledWith(card);
    });

    it('stops listening on the card', function() {
      spyOn(card, 'off');
      game.moveCard(card);
      expect(card.off).toHaveBeenCalled();
    });

    it('tries to add the card to the tableau', function() {
      spyOn(game.tableau, 'add').andReturn(true);
      game.moveCard(card);
      expect(game.tableau.add).toHaveBeenCalledWith(card);
    });

    it('if it cannot add to the tableau, it adds the card to the waste', function() {
      spyOn(game.tableau, 'add').andReturn(false);
      spyOn(game.waste, 'add');
      game.moveCard(card);
      expect(game.waste.add).toHaveBeenCalledWith(card);
    });
  });
});
