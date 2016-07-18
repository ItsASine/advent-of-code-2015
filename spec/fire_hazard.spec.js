describe('Fire Hazard', function() {
  var FireHazard = require('../app/fire_hazard');

  describe('Part 1', function() {
    it('has the correct answer', function() {
      var answer = FireHazard.day6();

      expect(answer).toBe(543903);
    });
  });

  describe('Part 2', function() {
    it('has the correct answer', function() {
      var answer = FireHazard.part2();

      expect(answer).toBe(14687245);
    });
  });
});
