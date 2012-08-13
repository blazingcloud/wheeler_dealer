Wheel.Class('Step4.Models.Game', {
  init: function() {
    this.cards =    Step4.Models.Card.deck();
    this.deck =     Step4.Models.Stack.build({cards: this.cards});
    var baseIndex = 100;

    this.waste = Step4.Models.Stack.build({zIndex: baseIndex});

    this.tableaus = [];
    _.times(7, function() {
      this.tableaus.push(Step4.Models.Tableau.build({zIndex: baseIndex}));
      baseIndex++;
    }.bind(this));

    this.foundations = [];
    _.times(4, function() {
      this.foundations.push(Step4.Models.Foundation.build({zIndex: baseIndex}));
      baseIndex++;
    }.bind(this));

    this.queue = Step4.TimedQueue.build(750);
  },

  deal: function() {
    // first round -------------
    _.each(_.range(0,7), function(i) {
      this.dealRound(i);
    }.bind(this));

    this.queue.run();
  },

  dealRound: function(startingTableau) {
    var card = this.nextCard();
    this.queue.add(function() {
      card.face('front');
    }, 0);
    this.move(card, this.tableaus[startingTableau]);
    _.each(_.range(startingTableau + 1, 7), function(i) {
      this.move(this.nextCard(), this.tableaus[i]);
    }.bind(this));
  },

  nextCard: function() {
    var card = this.deck.topCard();
    this.deck.remove(card);
    return card;
  },

  move: function(card, stack) {
    this.queue.add(function() {
      stack.deal(card);
    }.bind(this));
  }
});
