describe('Step2.Views.Card', function() {
  var view, model;
  beforeEach(function() {
    Step2.Views.Card.template = function() {
      return "<div class='card'><div class='faces'></div></div>";
    };
    model = Step2.Models.Card.build({
      suit: 'heart',
      faceValue: 'J'
    });
    view = Step2.Views.Card.build({model: model});
  });

  describe('#listen', function() {
    describe('on tap', function() {
      it('it changes the left attribute of the model', function() {
        spyOn(model, 'move');
        view.$.trigger('tap');
        expect(model.move).toHaveBeenCalled();
      });

      it('sets css values on the dom', function() {
        view.$.trigger('tap');
        expect(view.$.css('left')).toBe(model.left + 'px');
        expect(view.$.css('z-index')).toBe(model.zIndex + '');
      });

      it('stops listening on the card', function() {
        spyOn(model, 'move');
        view.$.trigger('tap');
        model.move.reset();
        view.$.trigger('tap');
        expect(model.move).not.toHaveBeenCalled();
      });

      it('adds the flipped class to the faces div', function() {
        view.$.trigger('tap');
        console.log('view', view);
        expect(view.$faces.attr('class')).toMatch(/flipped/);
      });
    });
  });
});
