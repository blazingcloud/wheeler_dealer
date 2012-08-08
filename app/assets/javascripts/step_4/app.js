Wheel.App.subclass('Step4', {
  init: function() {
    // model generation
    this.game = Step4.Models.Game.build();

    // views ----

    // Find all the server rendered stacks, and bind the right stack model.
    // This is done to align the server generated CSS for position with the
    // model data. This then gets passed along to the cards.
    this.deckView =    Step4.Views.Stack.build(
      $('.stack.deck'),    {model: this.game.deck}
    );
    this.wasteView =   Step4.Views.Stack.build(
      $('.stack.waste'),   {model: this.game.waste}
    );

    // marry tableau and foundation views to their models
    var $tableaus = $('.stack.tableau');
    this.tableauViews = _.map($tableaus, function(dom, i) {
      return Step4.Views.Stack.build(dom, {model: this.game.tableaus[i]});
    }.bind(this));

    var $foundations = $('.stack.foundation');
    this.foundationViews = _.map($foundations, function(dom, i) {
      return Step4.Views.Stack.build(dom, {model: this.game.tableaus[i]});
    }.bind(this));

    // render all the card views on to the game
    this.cardViews =   Step4.Views.Card.assemble(
      this.game.cards, { parent: $('#game .stacks') }
    );
  }
});
