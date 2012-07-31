Wheel.App.subclass('App', {
  init: function() {
    var deck = App.Models.Card.deck();
    var parent = $('.pile.deck');
    _.each(deck, function(model) {
      App.Views.Card.build({model: model, parent: parent});
    });
  }
});
