/*
 --- Day 9: All in a Single Night ---

 Every year, Santa manages to deliver all of his presents in a single night.

 This year, however, he has some new locations to visit; his elves have provided
 him the distances between every pair of locations. He can start and end at
 any two (different) locations he wants, but he must visit each location exactly once.
 What is the shortest distance he can travel to achieve this?

 For example, given the following distances:

 London to Dublin = 464
 London to Belfast = 518
 Dublin to Belfast = 141
 The possible routes are therefore:

 Dublin -> London -> Belfast = 982
 London -> Dublin -> Belfast = 605
 London -> Belfast -> Dublin = 659
 Dublin -> Belfast -> London = 659
 Belfast -> Dublin -> London = 605
 Belfast -> London -> Dublin = 982
 The shortest of these is London -> Dublin -> Belfast = 605, and so the answer is 605 in this example.

 What is the distance of the shortest route?
 */

var day9 = function() {
    var Combinatorics = require('js-combinatorics');
    var input = require('./input.json');
    var inputs = input.routes.split('\n');
    var towns = [];
    var routeData = [];
    var routes;
    var routesDistances = [];
    var x, y, amount;
    var minDistance;
    var currentDistances = [];
    var routeSum = 0;

    inputs.forEach(function(distance) {
        distance = distance.match(/(.*) to (.*) = (\d*)/);

        x = distance[1];
        y = distance[2];
        amount = Number(distance[3]);

        routeData.push([x,y,amount]);
        routeData.push([y,x,amount]);

        if(!towns.includes(x)){
            towns.push(x);
        }

        if(!towns.includes(y)){
            towns.push(y);
        }
    });

    //permutations of all the cities
    routes = Combinatorics.permutation(towns).toArray();

    //calc distance for all the permutations
    routes.forEach(function(route) {
        currentDistances = [];

        route.forEach(function(town, index) {
            if(index < route.length-1) {
                routeData.forEach(function(dataArr) {
                    if(dataArr[0] == town && dataArr[1] == route[index+1]) {
                        currentDistances.push(dataArr[2]);
                    }
                })
            }
        });

        routeSum = currentDistances.reduce(function(previousValue, currentValue) {
            return previousValue + currentValue;
        });

        routesDistances.push(routeSum);
    });

    minDistance = Math.min.apply(null, routesDistances);

    console.log(minDistance);
};

var start = Date.now();
day9();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');
