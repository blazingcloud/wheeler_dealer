Wheel.App.subclass('Step2', {
  init: function() {
    var deck = Step2.Models.Card.deck();
    Step2.Views.Card.assemble(deck, {parent: $('.pile.deck')});
  }
});
