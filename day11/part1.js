/*
 --- Day 11: Corporate Policy ---

 Santa's previous password expired, and he needs help choosing a new one.

 To help him remember his new password after the old one expires,
 Santa has devised a method of coming up with a password based on the previous one.
 Corporate policy dictates that passwords must be exactly eight lowercase letters (for security reasons),
 so he finds his new password by incrementing his old password string repeatedly until it is valid.

 Incrementing is just like counting with numbers: xx, xy, xz, ya, yb, and so on.
 Increase the rightmost letter one step; if it was z, it wraps around to a,
 and repeat with the next letter to the left until one doesn't wrap around.

 Unfortunately for Santa, a new Security-Elf recently started, and he has imposed some additional password requirements:

 Passwords must include one increasing straight of at least three letters, like abc, bcd, cde, and so on, up to xyz.
 They cannot skip letters; abd doesn't count.
 Passwords may not contain the letters i, o, or l, as these letters can be mistaken for other characters and are therefore confusing.
 Passwords must contain at least two different, non-overlapping pairs of letters, like aa, bb, or zz.
 For example:

 hijklmmn meets the first requirement
 (because it contains the straight hij) but fails the second requirement requirement (because it contains i and l).
 abbceffg meets the third requirement
 (because it repeats bb and ff) but fails the first requirement.
 abbcegjk fails the third requirement,
 because it only has one double letter (bb).
 The next password after abcdefgh is abcdffaa.
 The next password after ghijklmn is ghjaabcc,
 because you eventually skip all the passwords that start with ghi..., since i is not allowed.
 Given Santa's current password (your puzzle input), what should his next password be?
 */

var day11 = function () {
    var input = 'hepxcrrq';
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
