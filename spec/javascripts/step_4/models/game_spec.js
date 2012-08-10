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
  });
});
