/*
 --- Part Two ---

 You just finish implementing your winning light pattern when you realize
 you mistranslated Santa's message from Ancient Nordic Elvish.

 The light grid you bought actually has individual brightness controls;
 each light can have a brightness of zero or more. The lights all start at zero.

 The phrase turn on actually means that you should increase the brightness of those lights by 1.

 The phrase turn off actually means that you should decrease the brightness of those lights by 1, to a minimum of zero.

 The phrase toggle actually means that you should increase the brightness of those lights by 2.

 What is the total brightness of all lights combined after following Santa's instructions?

 For example:

 turn on 0,0 through 0,0 would increase the total brightness by 1.
 toggle 0,0 through 999,999 would increase the total brightness by 2000000.
 */

var day6 = function () {
    var input = require('./input.json');
    var instructions = input.instructions.split(/\n/);
    var instructionRegex = /^(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)$/;

    var grid = [];
    var x, y;
    var i, j, k, h;
    var type, x1, x2, y1, y2;
    var brightness = 0;

    //init grid
    for (x = 0; x < 1000; x++) {
        grid[x] = [];

        for (y = 0; y < 1000; y++) {
            grid[x][y] = 0;
        }
    }

    instructions.forEach(function (instruction) {
        instruction = instruction.match(instructionRegex);

        type = instruction[1];
        x1 = Number(instruction[2]);
        y1 = Number(instruction[3]);
        x2 = Number(instruction[4]);
        y2 = Number(instruction[5]);

        for (i = x1; i <= x2; i++) {
            for (j = y1; j <= y2; j++) {
                switch (type) {
                    case 'turn on': {
                        grid[i][j] += 1;
                        break;
                    }
                    case 'turn off': {
                        if(grid[i][j] > 0) {
                            grid[i][j] -= 1;
                        }
                        break;
                    }
                    case 'toggle': {
                        grid[i][j] += 2;
                        break;
                    }
                } //end switch
            } //end y loop
        } //end x loop
    });

    for (k = 0; k < grid.length; k++) {
        for (h = 0; h < grid[k].length; h++) {
            brightness += grid[k][h];
        }
    }

    console.log(brightness);
};

var start = Date.now();
day6();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');
