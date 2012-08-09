describe('Step4.Models.Foundation', function() {
  var foundation, ace, other;
  beforeEach(function() {
    ace = Step4.Models.Card.build({suit: 'heart', faceValue: 'A'});
    other = Step4.Models.Card.build({suit: 'heart', faceValue: '2'});
  });

  describe('#positionCard', function() {
    beforeEach(function() {
      foundation = Step4.Models.Foundation.build();
      foundation.add(ace);
      foundation.add(other);
    });

    it('when first card, it offsets the top position by 0', function() {
      expect(ace.position().top).toBe(0);
    });

    it('when a subsequent card, it offsets the top position by the header size', function() {
      expect(other.position().top).toBe(foundation.offset);
    });
  });

  describe('#canAdd', function() {
    describe('when there are no cards', function() {
      beforeEach(function() {
        foundation = Step4.Models.Foundation.build();
      });

      it('will accept an ace', function() {
        expect(foundation.canAdd(ace)).toBe(true);
      });

      it('will not accept another card', function() {
        expect(foundation.canAdd(other)).toBe(false);
      });
    });

    describe('when there is a card', function() {
      beforeEach(function() {
        foundation = Step4.Models.Foundation.build({cards: [ace]});
      });

      it('will accept the next increasing card value of the same suit', function() {
        expect(foundation.canAdd(other)).toBe(true);
      });

      it('will not accept the next increasing card value of a different suit', function() {
        other = Step4.Models.Card.build({suit: 'diamond', faceValue: '2'});
        expect(foundation.canAdd(other)).toBe(false);
      });

      it('will not accept other values in the same suit', function() {
        other = Step4.Models.Card.build({suit: 'heart', faceValue: '5'});
        expect(foundation.canAdd(other)).toBe(false);
      });
    });
  });
});
