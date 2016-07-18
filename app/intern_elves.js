'use strict';

var InternElves = (function() {
  function InternElves() {
    this.input = require('../data/day5.json');
    this.strings = this.input.naughtyOrNice.split(/\n/);
  }

  InternElves.prototype = {
    day5: function(part2) {
      var niceList = [];
      var hasEvilString = false;
      var self = this;

      self.strings.forEach(function(str) {
        if (!part2) {
          hasEvilString = self.hasDisallowedStrings(str);

          if (!hasEvilString) {
            if (self.hasVowelsAndDouble(str)) {
              niceList.push(str);
            }
          }
        } else {
          if (self.hasSplitDouble(str) && self.hasPair(str)) {
            niceList.push(str);
          }
        }
      });

      return niceList.length;
    },

    hasDisallowedStrings: function(string) {
      var disallowedStrings = ['ab', 'cd', 'pq', 'xy'];
      var hasDisallowed = false;

      disallowedStrings.forEach(function(evilStr) {
        if (string.includes(evilStr)) {
          hasDisallowed = true;
        }
      });

      return hasDisallowed;
    },

    hasVowelsAndDouble: function(string) {
      var vowels = ['a', 'e', 'i', 'o', 'u'];
      var stringAsArray = Array.from(string);
      var vowelCount = 0;
      var hasDouble = false;

      stringAsArray.forEach(function(char, index) {
        if (char == stringAsArray[index + 1]) {
          hasDouble = true;
        }

        if (vowels.includes(char)) {
          vowelCount++;
        }
      });

      return hasDouble == true && vowelCount >= 3;
    },

    hasSplitDouble: function(string) {
      var stringAsArray = Array.from(string);

      var hasDouble = false;

      stringAsArray.forEach(function(char, index) {
        if (char == stringAsArray[index + 2]) {
          hasDouble = true;
        }
      });

      return hasDouble;
    },

    hasPair: function(string) {
      var stringAsArray = Array.from(string);

      var hasPair = false;
      var testPair = [];
      var testPairString = '';

      stringAsArray.forEach(function(char, index) {
        testPair = [char, stringAsArray[index + 1]];
        testPairString = testPair[0] + testPair[1];

        if (string.includes(testPairString, index + 2)) {
          hasPair = true;
        }
      });

      return hasPair;
    },

    part2: function() {
      return this.day5(true);
    }
  };

  return InternElves;
})();

module.exports = new InternElves();
