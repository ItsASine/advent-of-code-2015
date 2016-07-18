'use strict';

var NoMath = (function() {
  function NoMath() {
    this.input = require('../data/day2.json');
    this.gifts = this.input.giftList.split(/\n/);
  }

  NoMath.prototype = {
    day2: function(part2) {
      var giftMeasurements = [];
      var ribbon = 0;
      var wrappingPaper = 0;
      var l;
      var w;
      var h;
      var wrap;
      var bow;

      this.gifts.forEach(function(gift) {
        giftMeasurements = gift.split(/x/);
        l = giftMeasurements[0];
        w = giftMeasurements[1];
        h = giftMeasurements[2];

        if (!part2) {
          wrappingPaper +=
              2 * l * w + 2 * w * h + 2 * h * l +
              Math.min(l * w, w * h, h * l);
        } else {
          bow = l * w * h;
          wrap = Math.min(2 * l + 2 * w, 2 * w + 2 * h, 2 * h + 2 * l);

          ribbon += wrap + bow;
        }
      });

      return !part2 ? wrappingPaper : ribbon;
    },

    part2: function() {
      return this.day2(true);
    }
  };

  return NoMath;
}());

module.exports = new NoMath();
