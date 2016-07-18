describe('Look and Say', function() {
  var LookSay = require('../app/look_say');

  describe('Part 1', function() {
    it('has the correct answer', function() {
      var answer = LookSay.day10();

      expect(answer).toBe(492982);
    });
  });

  describe('Part 2', function() {
    it('has the correct answer', function() {
      var answer = LookSay.part2();

      expect(answer).toBe(6989950);
    });
  });
});
