describe('Assembly Required', function() {
  var AssemblyRequired = require('../app/assembly_required');

  describe('Part 1', function() {
    it('has the correct answer', function() {
      var answer = AssemblyRequired.day7();

      expect(answer).toBe(16076);
    });
  });

  describe('Part 2', function() {
    it('has the correct answer', function() {
      var answer = AssemblyRequired.part2();

      expect(answer).toBe(2797);
    });
  });
});
