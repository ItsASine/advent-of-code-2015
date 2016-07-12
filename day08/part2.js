/*
 -- Part Two ---

 Now, let's go the other way. In addition to finding the number of characters of code,
 you should now encode each code representation as a new string and find the number of
 characters of the new encoded representation, including the surrounding double quotes.

 For example:

 "" encodes to "\"\"", an increase from 2 characters to 6.
 "abc" encodes to "\"abc\"", an increase from 5 characters to 9.
 "aaa\"aaa" encodes to "\"aaa\\\"aaa\"", an increase from 10 characters to 16.
 "\x27" encodes to "\"\\x27\"", an increase from 6 characters to 11.
 Your task is to find the total number of characters to represent the newly encoded
 strings minus the number of characters of code in each original string literal.
 For example, for the strings above, the total encoded length (6 + 9 + 16 + 11 = 42)
 minus the characters in the original code representation
 (23, just like in the first part of this puzzle) is 42 - 23 = 19.
 */

var day8 = function() {
    var fs = require('fs');

    function readModuleFile(path, callback) {
        try {
            var filename = require.resolve(path);
            fs.readFile(filename, 'utf8', callback);
        } catch (e) {
            callback(e);
        }
    }

    readModuleFile('./input.txt', function (err, input) {
        var strings = input.split('\n');
        var totalChars = 0;
        var totalEncodedChars = 0;

        strings.forEach(function(str) {
            totalChars += str.length;
            totalEncodedChars += JSON.stringify(str).length;
        });

        console.log(totalEncodedChars - totalChars);
    });
};

var start = Date.now();
day8();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');
