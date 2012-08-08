Wheel.Model.subclass('Step4.Models.Game', {
  init: function() {
    this.cards =    Step4.Models.Card.deck();
    this.deck =     Step4.Models.Stack.build({cards: this.cards});
    var baseIndex = 100;

    this.waste = Step4.Models.Stack.build({zIndex: baseIndex});

    this.foundations = [];
    _.times(4, function() {
      this.foundations.push(Step4.Models.Stack.build({zIndex: baseIndex}));
    }.bind(this));

    this.tableaus = [];
    _.times(7, function() {
      this.tableaus.push(Step4.Models.Tableau.build({zIndex: baseIndex}));
    }.bind(this));

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
    this.waste.add(card);
  }
});
