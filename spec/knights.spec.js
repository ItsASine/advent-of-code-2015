describe('Knights of the Dinner Table', function() {
  var Knights = require('../app/knights');

  it('passes the example scenario', function() {
    var input = 'Alice would gain 54 happiness units by sitting next to Bob.\nAlice would lose 79 happiness units by sitting next to Carol.\nAlice would lose 2 happiness units by sitting next to David.\nBob would gain 83 happiness units by sitting next to Alice.\nBob would lose 7 happiness units by sitting next to Carol.\nBob would lose 63 happiness units by sitting next to David.\nCarol would lose 62 happiness units by sitting next to Alice.\nCarol would gain 60 happiness units by sitting next to Bob.\nCarol would gain 55 happiness units by sitting next to David.\nDavid would gain 46 happiness units by sitting next to Alice.\nDavid would lose 7 happiness units by sitting next to Bob.\nDavid would gain 41 happiness units by sitting next to Carol.';

    expect(Knights.mostHappiness(input.split('\n'))).toBe(330);
  });

  describe('Part 1', function() {
    it('has the correct answer', function() {
      var answer = Knights.day13();

      expect(answer).toBe(618);
    });
  });

  describe('Part 2', function() {
    it('has the correct answer', function() {
      var answer = Knights.part2();

      expect(answer).toBe(601);
    });
  });
});
