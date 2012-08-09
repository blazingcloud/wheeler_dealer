describe('Step4.Views.Stack', function() {
  Step4.Views.Stack.template = function() {
    return "<div class='stack deck'></div>";
  };
  Step4.Views.Stack.gameOffset = function() {
    return {
      left: 0,
      top: 0
    };
  };

  var model, view;

  beforeEach(function() {
    model = Step4.Models.Stack.build();
    view = Step4.Views.Stack.build({ model: model});
  });

  describe('#init', function() {
    it('sets the model position property', function() {
      spyOn(model, 'position');
      view.init();
      expect(model.position).toHaveBeenCalled();
      expect(model.position.mostRecentCall.args.length).toBe(1);
    });

    it('sets the shadow properly', function() {
      spyOn(model, 'length').andReturn(1);
      view.init();
      waits(750);
      runs(function() {
        expect(view.$.attr('class')).toMatch(/shadow/);
      });
    });
  });

  describe('#listen', function() {
    describe('on model length property', function() {
      describe('when there is already a shadow', function() {
        beforeEach(function() {
          view.addShadow();
        });

        it('and the length property becomes 0, it removes the shadow', function() {
          model.length(0);
          expect(view.$.attr('class')).not.toMatch(/shadow/);
        });

        it('and the length property becomes greater than 0, it does nothing', function() {
          spyOn(view, 'addShadow');
          model.length(10);
          expect(view.addShadow).not.toHaveBeenCalled();
        });
      });

      describe('when there is not a shadow', function() {
        beforeEach(function() {
          view.removeShadow();
        });

        it('and the length becomes 0, it does nothing', function() {
          spyOn(view, 'removeShadow');
          model.length(0);
          expect(view.removeShadow).not.toHaveBeenCalled();
        });

        it('and the length becomes greater than 0, it adds a shadow', function() {
          model.length(10);
          waits(750);
          runs(function() {
            expect(view.$.attr('class')).toMatch(/shadow/);
          });
        });
      });
    });
  });
});
