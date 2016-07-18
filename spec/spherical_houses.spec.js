describe('Single Night', function() {
  var SphericalHouses = require('../app/spherical_houses');

  describe('Part 1', function() {
    it('has the correct answer', function() {
      var answer = SphericalHouses.day3();

      expect(answer).toBe(2565);
    });
  });

  describe('Part 2', function() {
    it('has the correct answer', function() {
      var answer = SphericalHouses.part2();

      expect(answer).toBe(2639);
    });
  });
});
