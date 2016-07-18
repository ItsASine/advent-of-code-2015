'use strict';

var SphericalHouses = (function() {
  function SphericalHouses() {
    this.input = require('../data/day3.json');
    this.directions = Array.from(this.input.directions);
  }

  SphericalHouses.prototype = {
    day3: function(part2) {
      var x = 0;
      var y = 0;
      var houses = [[x, y]];

      var santas = !part2 ? 1 : 2;
      var isUnique = false;
      var i;
      var j;

      //Loop through Santas
      for (i = 0; i < santas; i++) {
        //Santa starts at [0,0]
        x = 0;
        y = 0;

        //Loop through drunken elf's directions
        for (j = i; j < this.directions.length; j += santas) {
          switch (this.directions[j]) {
            case '^':
              y++;
              break;
            case 'v':
              y--;
              break;
            case '>':
              x++;
              break;
            case '<':
              x--;
              break;
            default:
              console.log('eeeekkkk');
          }

          isUnique = !houses.filter(function(house) {
            return house[0] === x && house[1] === y;
          })[0];

          if (isUnique) {
            houses.push([x, y]);
          }
        }
      }

      return houses.length;
    },

    part2: function() {
      return this.day3(true);
    }
  };

  return SphericalHouses;
}());

module.exports = new SphericalHouses();
