/*
 --- Part Two ---

 The next year, to speed up the process, Santa creates a robot version of himself, Robo-Santa,
 to deliver presents with him.

 Santa and Robo-Santa start at the same location (delivering two presents to the same starting house),
 then take turns moving based on instructions from the elf,
 who is eggnoggedly reading from the same script as the previous year.

 This year, how many houses receive at least one present?

 For example:

 ^v delivers presents to 3 houses, because Santa goes north, and then Robo-Santa goes south.
 ^>v< now delivers presents to 3 houses, and Santa and Robo-Santa end up back where they started.
 ^v^v^v^v^v now delivers presents to 11 houses, with Santa going one direction and Robo-Santa going the other.
 */

var day3 = function () {
    var input = require('./input.json');
    var directions = Array.from(input.directions);

    var x = 0;
    var y = 0;
    var houses = [[x, y]];

    var santas = 2;
    var isUnique = false;
    var i, j;

    //Loop through Santas
    for(i = 0; i < santas; i++) {
        //Santa starts at [0,0]
        x = 0;
        y = 0;
        //Loop through drunken elf's directions
        for(j = i; j < directions.length; j += santas) {
            switch (directions[j]) {
                case '^':
                    y++;
                    break;
                case 'v':
                    y--;
                    break;
                case '>':
                    x++;
                    break;
                case '<':
                    x--;
                    break;
                default:
                    console.log('eeeekkkk');
            }

            isUnique = !houses.filter(function (house) {
                return house[0] == x && house[1] == y;
            })[0];

            if (isUnique) {
                houses.push([x, y]);
            }
        }
    }

    console.log(houses.length);
};

var start = Date.now();
day3();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');
