'use strict';

var StockingStuffer = (function() {
  function StockingStuffer() {
    this.input = require('../data/day4.json');
    this.key = this.input.key;
  }

  StockingStuffer.prototype = {
    day4: function(part2) {
      var md5 = require('blueimp-md5');

      var i = 0;
      var hash = md5(this.key + i);

      var test = function() {
        if (!part2) {
          return hash.slice(0, 5) != '00000';
        } else {
          return hash.slice(0, 6) != '000000';
        }
      };

      while (test()) {
        i++;
        hash = md5(this.key + i);
      }

      return i;
    },

    part2: function() {
      return this.day4(true);
    }
  };

  return StockingStuffer;
})();

module.exports = new StockingStuffer();
