/*
 --- Part Two ---

 Santa's password expired again. What's the next one?
 */

var day11 = function () {
    var input = 'hepxxyzz';
    var inputArray = Array.from(input);
    var nextPassword = [];
    var currentPassword = [];
    var newPassword = '';
    var doubles = 0;
    var has2Doubles = false;
    var hasConsecutive = false;
    var isEvil;

    var a = 'a'.charCodeAt(0);
    var z = 'z'.charCodeAt(0);
    var i = 'i'.charCodeAt(0);
    var o = 'o'.charCodeAt(0);
    var l = 'l'.charCodeAt(0);

    var j;

    inputArray.forEach(function (char) {
        currentPassword.push(char.charCodeAt(0));
    });

    while (true) {
        //reset vars
        doubles = 0;
        hasConsecutive = false;
        has2Doubles = false;

        //iterate password
        for (j = currentPassword.length - 1; j >= 0; j--) {
            if (currentPassword[j] != z) {
                currentPassword[j]++;
                break;
            } else {
                currentPassword[j] = a;
            }
        }

        //check if password contains bad characters
        isEvil = currentPassword.some(function (char) {
            return char == i || char == o || char == l;
        });

        //check for the fancier rules on a char by char basis
        if (!isEvil) {
            currentPassword.forEach(function (char, index) {
                //needs 3 consecutive characters
                if (currentPassword[index + 1] == char + 1 && currentPassword[index + 2] == char + 2) {
                    hasConsecutive = true;
                }

                //needs 2 unique sets of doubles
                if (currentPassword[index + 1] == char && currentPassword[index - 1] != char) {
                    doubles++;
                    if (doubles == 2) {
                        has2Doubles = true;
                    }
                }
            });
        }

        //check if this password meets the requirements
        if (hasConsecutive && has2Doubles) {
            nextPassword = currentPassword;
            break;
        }
    }

    nextPassword.forEach(function (charCode) {
        newPassword += String.fromCharCode(charCode);
    });

    console.log(newPassword);
};

var start = Date.now();
day11();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');
