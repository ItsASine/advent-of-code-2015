/*
 --- Part Two ---

 Realizing the error of his ways, Santa has switched to a better model of
 determining whether a string is naughty or nice.
 None of the old rules apply, as they are all clearly ridiculous.

 Now, a nice string is one with all of the following properties:

 It contains a pair of any two letters that appears at least twice in the string without overlapping,
 like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
 It contains at least one letter which repeats with exactly one letter between them,
 like xyx, abcdefeghi (efe), or even aaa.

 For example:

 qjhvhtzxzqqjkmpb is nice because is has a pair that appears twice (qj)
 and a letter that repeats with exactly one letter between them (zxz).
 xxyxx is nice because it has a pair that appears twice and a letter that repeats with one between,
 even though the letters used by each rule overlap.
 uurcxstgmygtbstg is naughty because it has a pair (tg) but no repeat with a single letter between them.
 ieodomkazucvgmuy is naughty because it has a repeating letter with one between (odo), but no pair that appears twice.
 How many strings are nice under these new rules?
 */

var day5 = function () {
    var input = require('./input.json');
    var strings = input.naughtyOrNice.split(/\n/);
    var niceList = [];
    var stringAsArray = [];
    var hasPair = false;
    var hasDouble = false;
    var knownPairs = [];
    var testPair = [];
    var testPairString = '';

    strings.forEach(function (str) {
        stringAsArray = Array.from(str);
        hasDouble = false;
        hasPair = false;

        stringAsArray.forEach(function (char, index) {
            if (char == stringAsArray[index + 2]) {
                hasDouble = true;
            }

            testPair = [char, stringAsArray[index+1]];
            testPairString = testPair[0] + testPair[1];

            if (str.includes(testPairString, index+2) || knownPairs.includes(testPair)) {
                hasPair = true;
            }
        });

        if (hasDouble == true && hasPair == true) {
            niceList.push(str)
        }
    });

    console.log(niceList.length);
};


var start = Date.now();
day5();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');
