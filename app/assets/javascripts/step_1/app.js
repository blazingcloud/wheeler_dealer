// Subclassing Wheel's App class yields some easy goodies:
//  - the #init method provides a hook for setting up all the views and other classes needed
//    for the app to run
//  - The app object automatically gathers templates from the DOM and makes them available
//    to views
Wheel.App.subclass('Step1', {
  init: function() {
    // Create a deck view, which internally creates a bunch of card views
    var deck = Deck.build({parent: $(document.body)});
    // Create a discard pile view
    var discard = DiscardPile.build({parent: $(document.body)});
  }
});

$(document).ready(function() {
  Step1.build(); // building the app will automatically call init, setting everything in motion
});
