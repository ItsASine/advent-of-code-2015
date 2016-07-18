'use strict';

var FireHazard = (function() {
  function FireHazard() {
    this.input = require('../data/day6.json');
    this.instructions = this.input.instructions.split(/\n/);
    this.instructionRegex =
        /^(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)$/;
  }

  FireHazard.prototype = {
    day6: function(part2) {
      var grid = [];
      var x;
      var y;

      var i;
      var j;
      var k;
      var h;

      var type;
      var x1;
      var x2;
      var y1;
      var y2;

      var turnedOnLights = 0;
      var brightness = 0;

      var self = this;

      //init grid
      for (x = 0; x < 1000; x++) {
        grid[x] = [];

        for (y = 0; y < 1000; y++) {
          if (!part2) {
            grid[x][y] = false;
          } else {
            grid[x][y] = 0;
          }
        }
      }

      self.instructions.forEach(function(instruction) {
        instruction = instruction.match(self.instructionRegex);

        type = instruction[1];
        x1 = Number(instruction[2]);
        y1 = Number(instruction[3]);
        x2 = Number(instruction[4]);
        y2 = Number(instruction[5]);

        for (i = x1; i <= x2; i++) {
          for (j = y1; j <= y2; j++) {
            if (!part2) {
              self.turnOnLights(type, i, j, grid);
            } else {
              self.brightness(type, i, j, grid);
            }
          } //end y loop
        } //end x loop
      });

      for (k = 0; k < grid.length; k++) {
        for (h = 0; h < grid[k].length; h++) {
          if (!part2) {
            if (grid[k][h]) {
              turnedOnLights++;
            }
          } else {
            brightness += grid[k][h];
          }
        }
      }

      return !part2 ? turnedOnLights : brightness;
    },

    turnOnLights: function(type, x, y, grid) {
      switch (type) {
        case 'turn on': {
          grid[x][y] = true;
          break;
        }
        case 'turn off': {
          grid[x][y] = false;
          break;
        }
        case 'toggle': {
          grid[x][y] = !grid[x][y];
          break;
        }
      }
    },

    brightness: function(type, x, y, grid) {
      switch (type) {
        case 'turn on': {
          grid[x][y] += 1;
          break;
        }
        case 'turn off': {
          if (grid[x][y] > 0) {
            grid[x][y] -= 1;
          }
          break;
        }
        case 'toggle': {
          grid[x][y] += 2;
          break;
        }
      }
    },

    part2: function() {
      return this.day6(true);
    }
  };

  return FireHazard;
}());

module.exports = new FireHazard();
