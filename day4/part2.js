/*
 --- Part Two ---

 Now find one that starts with six zeroes.
 */

var day4 = function () {
    var md5 = require('blueimp-md5');
    var input = 'bgvyzdsv';

    var i = 0;
    var hash = md5(input + i);

    while (hash.slice(0, 6) !== '000000') {
        i++;
        hash = md5(input + i);
    }

    console.log(i);
};


var start = Date.now();
day4();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');
