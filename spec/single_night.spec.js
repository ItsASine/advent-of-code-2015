describe('Single Night', function() {
  var SingleNight = require('../app/single_night');

  describe('Part 1', function() {
    it('has the correct answer', function() {
      var answer = SingleNight.day9();

      expect(answer).toBe(117);
    });
  });

  describe('Part 2', function() {
    it('has the correct answer', function() {
      var answer = SingleNight.part2();

      expect(answer).toBe(909);
    });
  });
});
