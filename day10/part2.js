/*
 --- Part Two ---

 Neat, right?
 You might also enjoy hearing John Conway talking about this sequence
 (that's Conway of Conway's Game of Life fame).

 Now, starting again with the digits in your puzzle input,
 apply this process 50 times. What is the length of the new result?
 */

var day10 = function () {
    var input = String(1321131112);
    var iterations = 50;
    var i;

    function lookAndSay(string) {
        var regex = /(.)\1*/g;
        var say = function(match) {
            return match.length.toString() + match[0];
        };

        return string.replace(regex, say);
    }

    for (i = 0; i < iterations; i++) {
        input = lookAndSay(input);
    }

    console.log(input.length);
};

var start = Date.now();
day10();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');
