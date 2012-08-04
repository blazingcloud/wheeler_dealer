Wheel.Model.subclass('Step3.Models.Game', {
  init: function() {
    this.cards =    Step3.Models.Card.deck();
    this.deck =     Step3.Models.Stack.build({cards: this.cards});
    this.waste =    Step3.Models.Stack.build({zIndex: 100});
    this.tableau =  Step3.Models.Stack.build({zIndex: 100});

    this.listen();
  },

  listen: function() {
    // Listen on each card move for a 'move' event. If this happens move the card
    // to a new stack with 'moveCard'.
    _.each(this.cards, function(card) {
      card.on('move', function() {
        this.moveCard(card);
      }.bind(this));
    }.bind(this));
  },

  moveCard: function(card) {
    this.deck.remove(card);
    this.tableau.add(card) || this.waste.add(card);
    card.off();
  }
});
