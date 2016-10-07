describe('Reindeer Olympics', function() {
  var Olympics = require('../app/olympics');

  describe('Part 1', function() {
    it('has the correct answer', function() {
      var answer = Olympics.day14();

      expect(answer).toBe(2660);
    });
  });

  describe('Part 2', function() {
    it('has the correct answer', function() {
      var answer = Olympics.part2();

      expect(answer).toBe(1256);
    });
  });
});
