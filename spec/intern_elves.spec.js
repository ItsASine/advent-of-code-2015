describe('Intern Elves', function() {
  var InternElves = require('../app/intern_elves');

  describe('Part 1', function() {
    it('has the correct answer', function() {
      var answer = InternElves.day5();

      expect(answer).toBe(258);
    });
  });

  describe('Part 2', function() {
    it('has the correct answer', function() {
      var answer = InternElves.part2();

      expect(answer).toBe(53);
    });
  });
});
