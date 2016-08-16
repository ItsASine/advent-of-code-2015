'use strict';

var AbacusFramework = (function() {
  function AbacusFramework() {
    this.input = require('../data/day12.json');
  }

  AbacusFramework.prototype = {
    day12: function(part2) {
      return this.summation(this.input.input, part2);
    },

    summation: function(input, part2) {
      var self = this;

      switch (typeof input) {
        case 'object':
          var isGood = !part2 || Array.isArray(input) ||
              self.objectValues(input).indexOf('red') === -1;

          if (isGood) {
            return self.objectValues(input).reduce(function(previous, current) {
              return previous + self.summation(current, part2);
            }, 0);
          } else {
            return 0;
          }
        case 'number':
          return input;
        case 'string':
        default:
          return 0;
      }
    },

    objectValues: function(object) {
      return Object.keys(object).map(function(key) {
        return object[key];
      });
    },

    part2: function() {
      return this.day12(true);
    }
  };

  return AbacusFramework;
}());

module.exports = new AbacusFramework();
