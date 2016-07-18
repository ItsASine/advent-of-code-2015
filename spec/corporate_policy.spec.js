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
});
