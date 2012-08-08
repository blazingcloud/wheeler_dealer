describe('Step4.Views.Card', function() {
  var view, model;
  beforeEach(function() {
    Step4.Views.Card.template = function() {
      return "<div class='card'><div class='faces'></div></div>";
    };

    model = Step4.Models.Card.build({
      suit: 'heart',
      faceValue: 'J'
    });

    view = Step4.Views.Card.build({model: model});
  });

  describe('#init', function() {
    it('sets the $faces attribute', function() {
      expect(view.$faces.attr('class')).toMatch(/faces/);
    });

    it('animates', function() {
      spyOn(view, 'animate');
      view.init();
      expect(view.animate).toHaveBeenCalled();
    });
  });

  describe('listen', function() {
    describe('on the model', function() {
      it('a change to the faces property and call flip', function() {
        var cssClass = view.$faces.attr('class');
        model.trigger('change:face');
        expect(view.$faces.attr('class')).not.toBe(cssClass);
      });

      it('a change in position will animate the card', function() {
        spyOn(view.$, 'css').andReturn(view.$);
        model.trigger('change:position');
        expect(view.$.css.argsForCall.length).toBe(3);
      });
    });

    describe('on tap', function() {
      it('triggers a move event on the model', function() {
        spyOn(model, 'trigger');
        view.$.trigger('tap');
        expect(model.trigger).toHaveBeenCalledWith('move');
      });
    });
  });

  describe('#flip', function() {
    it('toggle the class "flipped" on the faces', function() {
      expect(view.$faces.attr('class')).not.toMatch(/flipped/);
      view.flip();
      expect(view.$faces.attr('class')).toMatch(/flipped/);
      view.flip();
      expect(view.$faces.attr('class')).not.toMatch(/flipped/);
    });
  });

  describe('#animate', function() {
    it('sets css properties', function() {
      spyOn(view.$, 'css').andReturn(view.$);
      model._position = {
        left: 220,
        top: 400,
        zIndex: 30
      };
      view.animate();
      expect(view.$.css.argsForCall.length).toBe(3);
    });
  });
});
