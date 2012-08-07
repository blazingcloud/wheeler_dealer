describe('Step3.Views.Stack', function() {
  Step3.Views.Stack.template = function() {
    return "<div class='stack deck'></div>";
  };
  var model, view;

  describe('#init', function() {
    it('sets the model position property', function() {
      model = Step3.Models.Stack.build();
      spyOn(model, 'position');
      view = Step3.Views.Stack.build({ model: model});

      expect(model.position).toHaveBeenCalled();
    });
  });
});
