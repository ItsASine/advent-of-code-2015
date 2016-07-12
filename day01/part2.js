/*
 --- Part Two ---

 Now, given the same instructions, find the position of the first character that
 causes him to enter the basement (floor -1). The first character in the instructions has position 1,
 the second character has position 2, and so on.

 For example:

 ) causes him to enter the basement at character position 1.
 ()()) causes him to enter the basement at character position 5.
 What is the position of the character that causes Santa to first enter the basement?
 */

var day1 = function () {
    var input = require('./input.json');
    var directions = Array.from(input.directions);
    var i = 0;

    directions.forEach(function (char, index) {
        if (char == '(') {
            i++;
        } else if (char == ')') {
            i--;
        }

        if (i == -1) {
            console.log(index + 1);
        }
    });
};

var start = Date.now();
day1();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');
