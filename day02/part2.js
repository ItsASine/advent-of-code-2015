/*
 --- Part Two ---

 The elves are also running low on ribbon.
 Ribbon is all the same width, so they only have to worry about the length they need to order,
 which they would again like to be exact.

 The ribbon required to wrap a present is the shortest distance around its sides,
 or the smallest perimeter of any one face. Each present also requires a bow made out of ribbon as well;
 the feet of ribbon required for the perfect bow is equal to the cubic feet of volume of the present.
 Don't ask how they tie the bow, though; they'll never tell.

 For example:

 A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon to wrap the present
 plus 2*3*4 = 24 feet of ribbon for the bow, for a total of 34 feet.
 A present with dimensions 1x1x10 requires 1+1+1+1 = 4 feet of ribbon to wrap the present
 plus 1*1*10 = 10 feet of ribbon for the bow, for a total of 14 feet.
 How many total feet of ribbon should they order?
 */

var day2 = function () {
    var input = require('./input.json');
    var gifts = input.giftList.split(/\n/);
    var giftMeasurements = [];
    var l, w, h;
    var wrap, bow;
    var ribbon = 0;

    gifts.forEach(function (gift) {
        giftMeasurements = gift.split(/x/);
        l = giftMeasurements[0];
        w = giftMeasurements[1];
        h = giftMeasurements[2];

        bow = l * w * h;
        wrap = Math.min(2 * l + 2 * w, 2 * w + 2 * h, 2 * h + 2 * l);

        ribbon += wrap + bow;
    });

    console.log(ribbon);
};

var start = Date.now();
day2();
console.log('Time elapsed: ' + (Date.now() - start) + 'ms');
