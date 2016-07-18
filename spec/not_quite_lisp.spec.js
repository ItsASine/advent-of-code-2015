describe('Not Quite Lisp', function() {
  var NotQuiteLisp = require('../app/not_quite_lisp');

  describe('Part 1', function() {
    it('has the correct answer', function() {
      var answer = NotQuiteLisp.day1();

      expect(answer).toBe(138);
    });
  });

  describe('Part 2', function() {
    it('has the correct answer', function() {
      var answer = NotQuiteLisp.part2();

      expect(answer).toBe(1771);
    });
  });
});
