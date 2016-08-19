describe('Corporate Policy', function() {
  var CorporatePolicy = require('../app/corporate_policy');

  describe('Part 1', function() {
    it('has the correct answer', function() {
      var answer = CorporatePolicy.day11();

      expect(answer).toBe('hepxxyzz');
    });
  });

  describe('Part 2', function() {
    it('has the correct answer', function() {
      var answer = CorporatePolicy.part2();

      expect(answer).toBe('heqaabcc');
    });
  });

  describe('hasBadChars Function', function() {
    it('hijklmmn', function() {
      var input = Array.from('hijklmmn');
      var characters = [];

      input.forEach(function(char) {
        characters.push(char.charCodeAt(0));
      });

      expect(CorporatePolicy.hasBadChars(characters)).toBe(true);
    });

    it('abbceffg', function() {
      var input = Array.from('abbceffg');
      var characters = [];

      input.forEach(function(char) {
        characters.push(char.charCodeAt(0));
      });

      expect(CorporatePolicy.hasBadChars(characters)).toBe(false);
    });

    it('abbcegjk', function() {
      var input = Array.from('abbcegjk');
      var characters = [];

      input.forEach(function(char) {
        characters.push(char.charCodeAt(0));
      });

      expect(CorporatePolicy.hasBadChars(characters)).toBe(false);
    });
  });

  describe('fancyRules Function', function() {
    it('hijklmmn', function() {
      var input = Array.from('hijklmmn');
      var characters = [];

      input.forEach(function(char) {
        characters.push(char.charCodeAt(0));
      });

      expect(CorporatePolicy.fancyRules(characters)).toBe(false);
    });

    it('abbceffg', function() {
      var input = Array.from('abbceffg');
      var characters = [];

      input.forEach(function(char) {
        characters.push(char.charCodeAt(0));
      });

      expect(CorporatePolicy.fancyRules(characters)).toBe(false);
    });

    it('abbcegjk', function() {
      var input = Array.from('abbcegjk');
      var characters = [];

      input.forEach(function(char) {
        characters.push(char.charCodeAt(0));
      });

      expect(CorporatePolicy.fancyRules(characters)).toBe(false);
    });
  });

  describe('Password Examples', function() {
    it('abcdefgh', function() {
      var input = 'abcdefgh';
      var answer = CorporatePolicy.day11(input);

      expect(answer).toBe('abcdffaa');
    });

    it('ghijklmn', function() {
      var input = 'ghijklmn';
      var answer = CorporatePolicy.day11(input);

      expect(answer).toBe('ghjaabcc');
    })
  });
});
