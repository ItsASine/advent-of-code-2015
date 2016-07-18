'use strict';

var CorporatePolicy = (function() {
  function CorporatePolicy() {
    this.input = require('../data/day11.json');
    this.password = this.input.password;
  }

  CorporatePolicy.prototype = {
    day11: function(input) {
      var password = input ? input : this.password;
      var inputArray = Array.from(password);
      var nextPassword = [];
      var currentPassword = [];
      var newPassword = '';
      var isEvil;
      var isFancy;

      inputArray.forEach(function(char) {
        currentPassword.push(char.charCodeAt(0));
      });

      while (true) {
        currentPassword = this.iteratePassword(currentPassword);

        isEvil = this.hasBadChars(currentPassword);

        //check for the fancier rules on a char by char basis
        if (!isEvil) {
          isFancy = this.fancyRules(currentPassword);

          //check if this password meets the requirements
          if (isFancy) {
            nextPassword = currentPassword;
            break;
          }
        }
      }

      nextPassword.forEach(function(charCode) {
        newPassword += String.fromCharCode(charCode);
      });

      return newPassword;
    },

    iteratePassword: function(currentPassword) {
      var a = 'a'.charCodeAt(0);
      var z = 'z'.charCodeAt(0);

      for (var j = currentPassword.length - 1; j >= 0; j--) {
        if (currentPassword[j] != z) {
          currentPassword[j]++;
          break;
        } else {
          currentPassword[j] = a;
        }
      }

      return currentPassword;
    },

    hasBadChars: function(currentPassword) {
      var i = 'i'.charCodeAt(0);
      var o = 'o'.charCodeAt(0);
      var l = 'l'.charCodeAt(0);

      return currentPassword.some(function(char) {
        return char == i || char == o || char == l;
      });
    },

    fancyRules: function(currentPassword) {
      var doubles = 0;
      var has2Doubles = false;
      var hasConsecutive = false;

      currentPassword.forEach(function(char, index) {
        //needs 3 consecutive characters
        if (currentPassword[index + 1] == char + 1 &&
            currentPassword[index + 2] == char + 2) {
          hasConsecutive = true;
        }

        //needs 2 unique sets of doubles
        if (currentPassword[index + 1] == char &&
            currentPassword[index - 1] != char) {
          doubles++;
          if (doubles == 2) {
            has2Doubles = true;
          }
        }
      });

      return hasConsecutive && has2Doubles;
    },

    part2: function() {
      var input = this.day11();

      return this.day11(input);
    }
  };

  return CorporatePolicy;
})();

module.exports = new CorporatePolicy();
