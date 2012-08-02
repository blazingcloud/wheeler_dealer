Wheel.App.subclass('Step3', {
  init: function() {
    // models
    this.cards =        Step3.Models.Card.deck();
    this.deckStack =    Step3.Models.Stack.build({cards: this.cards});
    this.discardStack = Step3.Models.Stack.build();

    // views
    this.deckContainer =    Step3.Views.Stack.build($('.deck'));
    this.discardContainer = Step3.Views.Stack.build($('.discard'));
    this.cardViews =        Step3.Views.Card.assemble(this.cards, {parent: this.deckContainer});
  }
});
