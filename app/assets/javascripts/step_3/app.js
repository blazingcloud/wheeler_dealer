Wheel.App.subclass('Step3', {
  init: function() {
    // model generation
    this.game = Step3.Models.Game.build();

    // views
    this.$game = $('#game');

    // Find all the server rendered stacks, and bind the right stack model.
    // This is done to align the server generated CSS for position with the
    // model data. This then gets passed along to the cards.
    this.deckView =    Step3.Views.Stack.build(
      $('.stack.deck'),    {model: this.game.deck}
    );
    this.wasteView =   Step3.Views.Stack.build(
      $('.stack.waste'),   {model: this.game.waste}
    );
    this.tableauView = Step3.Views.Stack.build(
      $('.stack.tableau'), {model: this.game.tableau}
    );

    // render all the card views into the deck view
    this.cardViews =   Step3.Views.Card.assemble(
      this.game.cards, { parent: this.$game.find('.stacks') }
    );
  }
});
