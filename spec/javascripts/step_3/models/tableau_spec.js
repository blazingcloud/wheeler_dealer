describe('Step3.Models.Tableau', function() {
  var king, queen, seven, tableau;
  beforeEach(function() {
    king = Step3.Models.Card.build({suit: 'heart', faceValue: 'K'});
    queen = Step3.Models.Card.build({suit: 'club', faceValue: 'Q'});
    seven = Step3.Models.Card.build({suit: 'club', faceValue: '7'});

    tableau = Step3.Models.Tableau.build();
  });

  describe('#canAdd', function() {
    describe('when empty', function() {
      it('will be true if the card is a King', function() {
        expect(tableau.canAdd(king)).toBe(true);
      });

      it('will be false otherwise', function() {
        expect(tableau.canAdd(queen)).toBe(false);
      });
    });

    describe('when a alternating and descending pattern is started', function() {
      beforeEach(function() {
        tableau.add(king);
      });

      it('will accept the next lower valued card of the opposite color', function() {
        expect(tableau.canAdd(queen)).toBe(true);
      });

      it('will not accpet the next lower valued card of the same color', function() {
        var card = Step3.Models.Card.build({suit: 'diamond', faceValue: 'Q'});
        expect(tableau.canAdd(card)).toBe(false);
      });

      it('will not accept a card of another value', function() {
        expect(tableau.canAdd(seven)).toBe(false);
      });
    });

    it('builds an entire tableau', function() {
      var card;
      expect(tableau.add(king)).toBe(true); // red
      expect(tableau.add(queen)).toBe(true); // black
      card = Step3.Models.Card.build({faceValue: 'J', suit: 'heart'});
      expect(tableau.add(card)).toBe(true);
      card = Step3.Models.Card.build({faceValue: '10', suit: 'club'});
      expect(tableau.add(card)).toBe(true);
      card = Step3.Models.Card.build({faceValue: '9', suit: 'heart'});
      expect(tableau.add(card)).toBe(true);
      card = Step3.Models.Card.build({faceValue: '8', suit: 'club'});
      expect(tableau.add(card)).toBe(true);
      card = Step3.Models.Card.build({faceValue: '7', suit: 'heart'});
      expect(tableau.add(card)).toBe(true);
      card = Step3.Models.Card.build({faceValue: '6', suit: 'club'});
      expect(tableau.add(card)).toBe(true);
      card = Step3.Models.Card.build({faceValue: '5', suit: 'heart'});
      expect(tableau.add(card)).toBe(true);
      card = Step3.Models.Card.build({faceValue: '4', suit: 'club'});
      expect(tableau.add(card)).toBe(true);
      card = Step3.Models.Card.build({faceValue: '3', suit: 'heart'});
      expect(tableau.add(card)).toBe(true);
      card = Step3.Models.Card.build({faceValue: '2', suit: 'club'});
      expect(tableau.add(card)).toBe(true);
      card = Step3.Models.Card.build({faceValue: 'A', suit: 'heart'});
      expect(tableau.add(card)).toBe(true);
    });
  });

  describe('#positionCard', function() {
    beforeEach(function() {
      tableau.add(king);
      tableau.add(queen);
    });

    it('when first card, it offsets the top position by 0', function() {
      expect(king.position().top).toBe(0);
    });

    it('when a subsequent card, it offsets the top position by the header size', function() {
      expect(queen.position().top).toBe(tableau.offset);
    });
  });
});
