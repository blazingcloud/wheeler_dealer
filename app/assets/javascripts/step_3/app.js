Wheel.App.subclass('Step3', {
  init: function() {
    // models
    this.cardDeck =   Step3.Models.Card.deck();
    this.deck =       Step3.Models.Stack.build({cards: this.cardDeck});
    this.waste =      Step3.Models.Stack.build();
    this.tableau =    Step3.Models.Stack.build(); // this will change to a 

    // views
    this.deckView =    Step3.Views.Stack.build($('.stack.deck'));
    this.wasteView =   Step3.Views.Stack.build($('.stack.waste'));
    this.tableauView = Step3.Views.Stack.build($('.stack.tableau'));
    // render all the cardViews into the deckView
    this.cardViews =   Step3.Views.Card.assemble(this.cardDeck, {parent: this.deckView});
  }
});
