'use strict';

var LookSay = (function() {
  function LookSay() {
    this.input = require('../data/day10.json');
    this.lookSay = this.input.lookSay;
  }

  LookSay.prototype = {
    day10: function(part2) {
      var iterations = !part2 ? 40 : 50;
      var i;
      var self = this;
      var input = self.lookSay;

      for (i = 0; i < iterations; i++) {
        input = self.lookAndSay(input);
      }

      return input.length;
    },

    lookAndSay: function(string) {
      var regex = /(.)\1*/g;
      var say = function(match) {
        return match.length.toString() + match[0];
      };

      return string.replace(regex, say);
    },

    part2: function() {
      return this.day10(true);
    }
  };

  return LookSay;
})();

module.exports = new LookSay();
