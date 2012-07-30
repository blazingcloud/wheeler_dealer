//= require_self
//= require_tree ./models
//= require_tree ./views

Wheel.App.subclass('App', {
  init: function() {
    this.templates.gather();
  }
});
App.Models = {};
App.Views = {};

$(document).ready(function() {
  App.build();
});
