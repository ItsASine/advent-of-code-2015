'use strict';

var KnightsOfTheDinnerTable = (function() {
  function KnightsOfTheDinnerTable() {
    this.input = require('../data/day13.json');
    this.data = this.input.happiness.split('\n');
  }

  KnightsOfTheDinnerTable.prototype = {
    day13: function(part2) {
      return this.mostHappiness(this.data, part2);
    },

    calculateHappiness: function(relationshipData, arrangement) {
      var happinessArray = [];
      var totalHappiness;

      for (var i = 0; i < arrangement.length; i++) {
        var person = arrangement[i];

        // Stupid round table
        var left =
            arrangement[(i - 1 + arrangement.length) % arrangement.length];
        var right = arrangement[(i + 1) % arrangement.length];

        happinessArray.push(relationshipData[person][left]);
        happinessArray.push(relationshipData[person][right]);
      }

      totalHappiness = happinessArray
          .reduce(function(previousValue, currentValue) {
            return previousValue + currentValue;
          });

      return totalHappiness;
    },

    calculateBestHappiness: function(relationshipData, people, part2) {
      var self = this;
      var allHappinesses = [];
      var bestHappinessChange = 0;

      self.getArrangements(people).forEach(function(arrangement) {
        allHappinesses.push(
            self.calculateHappiness(relationshipData, arrangement)
        );
      });

      if (!part2) {
        bestHappinessChange =
            Math.max.apply(bestHappinessChange, allHappinesses);
      } else {
        // Since Part 2 increases allHappiness length from 40320 to 362880,
        //     Math.max.apply hits its computational maximum
        // Have to do the check manually instead
        allHappinesses.forEach(function(happiness) {
          if (happiness > bestHappinessChange) {
            bestHappinessChange = happiness;
          }
        });
      }

      return bestHappinessChange;
    },

    getArrangements: function(people) {
      var Combinatorics = require('js-combinatorics');

      return Combinatorics.permutation(people).toArray();
    },

    getHappinessData: function(input) {
      var people = [];
      var relationshipData = {};
      var person1;
      var gainOrLose;
      var amount;
      var person2;

      input.forEach(function(relationship) {
        relationship = relationship.match(/(.*) would (gain|lose) (\d*) happiness units by sitting next to (.*)\./);

        person1 = relationship[1];
        gainOrLose = relationship[2];
        amount = Number(relationship[3]);
        person2 = relationship[4];

        amount = gainOrLose == 'gain' ? amount : -amount;

        if (!people.includes(person1)) {
          people.push(person1);
        }

        if (!(person1 in relationshipData)) {
          relationshipData[person1] = {};
        }

        relationshipData[person1][person2] = amount;
      });

      return [people, relationshipData];
    },

    mostHappiness: function(input, part2) {
      var self = this;
      var happinessData = this.getHappinessData(input);
      var people = happinessData[0];
      var relationshipData = happinessData[1];
      var answer;

      if (part2) {
        relationshipData.me = {};
        people.forEach(function(person) {
          relationshipData.me[person] = 0;
          relationshipData[person].me = 0;
        });

        people.push('me');
      }

      answer = self.calculateBestHappiness(relationshipData, people, part2);

      return answer;
    },

    part2: function() {
      return this.day13(true);
    }
  };

  return KnightsOfTheDinnerTable;
}());

module.exports = new KnightsOfTheDinnerTable();
