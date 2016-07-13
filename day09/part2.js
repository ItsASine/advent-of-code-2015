/*
 --- Part Two ---

 The next year, just to show off, Santa decides to take the route with the longest distance instead.

 He can still start and end at any two (different) locations he wants, and he still must visit each location exactly once.

 For example, given the distances above, the longest route would be 982 via (for example) Dublin -> London -> Belfast.

 What is the distance of the longest route?
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
    var maxDistance;
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

    maxDistance = Math.max.apply(null, routesDistances);

    console.log(maxDistance);
};

var start = Date.now();
day9();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');
