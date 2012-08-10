Wheel.Class('Step4.Models.Game', {
  init: function() {
    this.cards =    Step4.Models.Card.deck();
    this.deck =     Step4.Models.Stack.build({cards: this.cards});
    var baseIndex = 100;

    this.waste = Step4.Models.Stack.build({zIndex: baseIndex});

    this.foundations = [];
    _.times(4, function() {
      this.foundations.push(Step4.Models.Foundation.build({zIndex: baseIndex}));
    }.bind(this));

    this.tableaus = [];
    _.times(7, function() {
      this.tableaus.push(Step4.Models.Tableau.build({zIndex: baseIndex}));
    }.bind(this));
  },

  deal: function() {
    var card;
    // first round -------------
     var card = this.nextCard();
     card.face('front');
     this.move(card, this.tableaus[0]);
     this.move(this.nextCard(), this.tableaus[1]);
     this.move(this.nextCard(), this.tableaus[2]);
     this.move(this.nextCard(), this.tableaus[3]);
     this.move(this.nextCard(), this.tableaus[4]);
     this.move(this.nextCard(), this.tableaus[5]);
     this.move(this.nextCard(), this.tableaus[6]);
  },

  nextCard: function() {
    var card = this.deck.topCard();
    this.deck.remove(card);
    return card;
  },

  move: function(card, stack) {
    stack.deal(card);
  }
});
