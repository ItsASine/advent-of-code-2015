/*

 */

//STOLEN FROM https://www.reddit.com/r/adventofcode/comments/3vr4m4/day_7_solutions/cxq8fr0
//None of my tries even remotely worked

var day7 = function () {
    var input = require('./input.json');
    var instructions = input.logicKit;
    var data = instructions.split('\n').filter(function (l) {
        return l.length > 0
    });
    gates = {};

    gates.run = function (gate) {
        if (typeof gates[gate] === 'function') {
            gates[gate] = gates[gate]();
        }
        return gates[gate];
    };

    for (var i = 0, l = data.length; i < l; i++) {
        var task = data[i].split(' -> ');
        gates[task[1]] = new Function('return ' +
            task[0].replace(/(AND|OR|RSHIFT|LSHIFT|NOT)/, function (op) {
                return {
                        AND: '&',
                        OR: '|',
                        RSHIFT: '>>',
                        LSHIFT: '<<',
                        NOT: '~'
                    }[op] || "";
            }).replace(/([a-z]+)/g, "gates.run('$1')"));
    }

    gates.b = function () {
        return 16076;
    };

    console.log(gates.a());
};

var start = Date.now();
day7();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');
