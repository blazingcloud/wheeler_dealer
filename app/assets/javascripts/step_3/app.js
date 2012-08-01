Wheel.App.subclass('Step3', {
  init: function() {
    var deck = Step3.Models.Card.deck();
    Step3.Views.Card.assemble(deck, {parent: $('.pile.deck')});
  }
});
