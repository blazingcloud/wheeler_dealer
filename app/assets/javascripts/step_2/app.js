Wheel.App.subclass('App', {
  init: function() {
    var deck = App.Models.Card.deck();
    App.Views.Card.assemble(deck, {parent: $('.pile.deck')});
  }
});
