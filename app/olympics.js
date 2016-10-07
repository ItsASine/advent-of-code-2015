'use strict';

var ReindeerOlympics = (function() {
  function ReindeerOlympics() {
    this.input = require('../data/day14.json');
    this.data = this.input.reindeer.split('\n');
  }

  ReindeerOlympics.prototype = {
    day14: function(part2) {
      return this.race(this.data, part2);
    },

    getRaceData: function(input, part2) {
      var reindeerData = [];

      input.forEach(function(data) {
        var reindeerObject = {
          name: null,
          flySpeed: null,
          flyTime: null,
          restTime: null,
          distance: 0,
          isFlying: true,
          flyingStopwatch: 0,
          restingStopwatch: 0
        };

        data = data.match(/(.*) can fly (\d*) km\/s for (\d*) seconds, but then must rest for (\d*) seconds\./);

        reindeerObject.name = data[1];
        reindeerObject.flySpeed = Number(data[2]);
        reindeerObject.flyTime = Number(data[3]);
        reindeerObject.restTime = Number(data[4]);
        if (part2) {
          reindeerObject.points = 0;
        }

        reindeerData.push(reindeerObject);
      });

      return reindeerData;
    },

    race: function(input, part2) {
      var raceTime = 2503;
      var raceData = this.getRaceData(input, part2);
      var distances = [];
      var maxDistance;
      var answer;

      for (var i = 0; i < raceTime; i++) {
        raceData.forEach(function(reindeer) {
          if (reindeer.isFlying) {
            reindeer.distance += reindeer.flySpeed;
            reindeer.flyingStopwatch++;
            if (reindeer.flyingStopwatch == reindeer.flyTime) {
              reindeer.isFlying = false;
              reindeer.flyingStopwatch = 0;
            }
          } else {
            reindeer.restingStopwatch++;
            if (reindeer.restingStopwatch == reindeer.restTime) {
              reindeer.isFlying = true;
              reindeer.restingStopwatch = 0;
            }
          }
        });

        if (part2) {
          distances = [];
          raceData.forEach(function(reindeer) {
            distances.push(reindeer.distance);
          });
          maxDistance = Math.max.apply(null, distances);
          raceData.forEach(function(reindeer) {
            if (reindeer.distance == maxDistance) {
              reindeer.points++;
            }
          });
        }
      }

      if (!part2) {
        raceData.forEach(function(reindeer) {
          distances.push(reindeer.distance);
        });

        maxDistance = Math.max.apply(null, distances);
        answer = maxDistance;
      } else {
        var points = [];

        raceData.forEach(function(reindeer) {
          points.push(reindeer.points);
        });

        answer = Math.max.apply(null, points);
      }

      return answer;
    },

    part2: function() {
      return this.day14(true);
    }
  };

  return ReindeerOlympics;
}());

module.exports = new ReindeerOlympics();
