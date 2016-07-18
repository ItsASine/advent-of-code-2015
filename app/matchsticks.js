'use strict';

var Matchsticks = (function() {
  function Matchsticks() {
    this.input = '../data/day8.txt';
  }

  Matchsticks.prototype = {
    day8: function(part2) {
      var fs = require('fs');
      var self = this;

      function readModuleFile(path, callback) {
        try {
          var filename = require.resolve(path);
          fs.readFile(filename, 'utf8', callback);
        } catch (e) {
          callback(e);
        }
      }

      readModuleFile(self.input, function(err, input) {
        var strings = input.split('\n');
        var totalChars = 0;
        var totalCharsInMem = 0;
        var totalEncodedChars = 0;

        strings.forEach(function(str) {
          totalChars += str.length;

          if (!part2) {
            totalCharsInMem += eval(str).length;
          } else {
            totalEncodedChars += JSON.stringify(str).length;
          }
        });

        //TODO: Figure out how to return this
        console.log(!part2 ?
            (totalChars - totalCharsInMem) :
            (totalEncodedChars - totalChars));
      });
    },

    part2: function() {
      return this.day8(true);
    }
  };

  return Matchsticks;
})();

module.exports = new Matchsticks();
