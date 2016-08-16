describe('Abacus Framework', function() {
  var AbacusFramework = require('../app/abacus_framework');

  describe('Part 1', function() {
    it('has the correct answer', function() {
      var answer = AbacusFramework.day12();

      expect(answer).toBe(156366);
    });
  });

  describe('Part 2', function() {
    it('has the correct answer', function() {
      var answer = AbacusFramework.part2();

      expect(answer).toBe(96852);
    });
  });

  describe('Summation Function', function() {
    describe('Part 1 Examples', function() {
      it('[1,2,3]', function() {
        var input = [1, 2, 3];

        expect(AbacusFramework.summation(input)).toBe(6);
      });

      it('{"a":2,"b":4}', function() {
        var input = {"a": 2, "b": 4};

        expect(AbacusFramework.summation(input)).toBe(6);
      });

      it('[[[3]]]', function() {
        var input = [[[3]]];
        expect(AbacusFramework.summation(input)).toBe(3);
      });

      it('{"a":2,"b":4}', function() {
        var input = {"a": {"b": 4}, "c": -1};

        expect(AbacusFramework.summation(input)).toBe(3);
      });

      it('{"a":[-1,1]}', function() {
        var input = {"a": [-1, 1]};

        expect(AbacusFramework.summation(input)).toBe(0);
      });

      it('[-1,{"a":1}]', function() {
        var input = [-1, {"a": 1}];

        expect(AbacusFramework.summation(input)).toBe(0);
      });

      it('{}', function() {
        expect(AbacusFramework.summation({})).toBe(0);
      });

      it('[]', function() {
        expect(AbacusFramework.summation([])).toBe(0);
      });
    });

    describe('Part 2 Examples', function() {
      it('[1,2,3]', function() {
        var input = [1, 2, 3];

        expect(AbacusFramework.summation(input, true)).toBe(6);
      });

      it('[1,{"c":"red","b":2},3]', function() {
        var input = [1, {"c": "red", "b": 2}, 3];

        expect(AbacusFramework.summation(input, true)).toBe(4);
      });

      it('{"d":"red","e":[1,2,3,4],"f":5}', function() {
        var input = {"d": "red", "e": [1, 2, 3, 4], "f": 5};

        expect(AbacusFramework.summation(input, true)).toBe(0);
      });

      it('[1,"red",5]', function() {
        var input = [1, "red", 5];

        expect(AbacusFramework.summation(input, true)).toBe(6);
      });
    });
  });
});
