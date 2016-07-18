describe('No Math', function() {
  var NoMath = require('../app/no_math');

  describe('Part 1', function() {
    it('has the correct answer', function() {
      var answer = NoMath.day2();

      expect(answer).toBe(1588178);
    });
  });

  describe('Part 2', function() {
    it('has the correct answer', function() {
      var answer = NoMath.part2();

      expect(answer).toBe(3783758);
    });
  });
});
