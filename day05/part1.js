/*
 --- Day 5: Doesn't He Have Intern-Elves For This? ---

 Santa needs help figuring out which strings in his text file are naughty or nice.

 A nice string is one with all of the following properties:

 It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
 It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
 It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
 For example:

 ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...),
 a double letter (...dd...), and none of the disallowed substrings.
 aaa is nice because it has at least three vowels and a double letter,
 ven though the letters used by different rules overlap.
 jchzalrnumimnmhp is naughty because it has no double letter.
 haegwjzuvuyypxyu is naughty because it contains the string xy.
 dvszwmarrgswjxmb is naughty because it contains only one vowel.
 How many strings are nice?
 */

var day5 = function () {
    var input = require('./input.json');
    var strings = input.naughtyOrNice.split(/\n/);
    var niceList = [];
    var stringAsArray = [];
    var disallowedStrings = ['ab', 'cd', 'pq', 'xy'];
    var hasEvilString = false;
    var vowelCount = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var hasDouble = false;

    strings.forEach(function (str) {
        hasEvilString = false;

        disallowedStrings.forEach(function (evilStr) {
            if (str.includes(evilStr)) {
                hasEvilString = true;
            }
        });

        if (!hasEvilString) {
            stringAsArray = Array.from(str);
            vowelCount = 0;
            hasDouble = false;

            stringAsArray.forEach(function (char, index) {
                if (char == stringAsArray[index + 1]) {
                    hasDouble = true;
                }

                if (vowels.includes(char)) {
                    vowelCount++;
                }
            });

            if (hasDouble == true && vowelCount >= 3) {
                niceList.push(str)
            }
        }
    });

    console.log(niceList.length);
};


var start = Date.now();
day5();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');
