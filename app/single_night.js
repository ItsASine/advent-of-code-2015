'use strict';

var SingleNight = (function() {
  function SingleNight() {
    this.input = require('../data/day9.json');
    this.inputs = this.input.routes.split('\n');
  }

  SingleNight.prototype = {
    day9: function(part2) {
      var towns;
      var routeData;
      var routes;
      var routesDistances;
      var townsData;
      var answer;

      townsData = this.getTowns();
      towns = townsData[0];
      routeData = townsData[1];

      routes = this.getRoutes(towns);

      routesDistances = this.getDistances(routeData, routes);

      answer = !part2 ?
          Math.min.apply(null, routesDistances) :
          Math.max.apply(null, routesDistances);

      return answer;
    },

    getTowns: function() {
      var towns = [];
      var routeData = [];
      var x;
      var y;
      var amount;

      this.inputs.forEach(function(distance) {
        distance = distance.match(/(.*) to (.*) = (\d*)/);

        x = distance[1];
        y = distance[2];
        amount = Number(distance[3]);

        routeData.push([x, y, amount]);
        routeData.push([y, x, amount]);

        if (!towns.includes(x)) {
          towns.push(x);
        }

        if (!towns.includes(y)) {
          towns.push(y);
        }
      });

      return [towns, routeData];
    },

    getRoutes: function(towns) {
      var Combinatorics = require('js-combinatorics');

      return Combinatorics.permutation(towns).toArray();
    },

    getDistances: function(routeData, routes) {
      var routesDistances = [];
      var currentDistances = [];
      var routeSum = 0;

      routes.forEach(function(route) {
        currentDistances = [];

        route.forEach(function(town, index) {
          if (index < route.length - 1) {
            routeData.forEach(function(dataArr) {
              if (dataArr[0] === town && dataArr[1] === route[index + 1]) {
                currentDistances.push(dataArr[2]);
              }
            });
          }
        });

        routeSum = currentDistances
            .reduce(function(previousValue, currentValue) {
              return previousValue + currentValue;
            });

        routesDistances.push(routeSum);
      });

      return routesDistances;
    },

    part2: function() {
      return this.day9(true);
    }
  };

  return SingleNight;
}());

module.exports = new SingleNight();
