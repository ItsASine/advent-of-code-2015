'use strict';

var NotQuiteLisp = (function() {
  function NotQuiteLisp() {
    this.input = require('../data/day1.json');
    this.directions = Array.from(this.input.directions);
  }

  NotQuiteLisp.prototype = {
    day1: function(part2) {
      var i = 0;
      var first = 0;
      var self = this;

      self.directions.forEach(function(char, index) {
        if (char === '(') {
          i++;
        } else if (char === ')') {
          i--;
        }

        if (part2 && !first) {
          first = self.basementCheck(i, index);
        }
      });

      return !part2 ? i : first;
    },

    basementCheck: function(i, index) {
      if (i === -1) {
        return index + 1;
      }
    },

    part2: function() {
      return this.day1(true);
    }
  };

  return NotQuiteLisp;
}());

module.exports = new NotQuiteLisp();
