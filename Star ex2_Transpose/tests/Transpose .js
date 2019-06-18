function transposeArray(array, arrayLength) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push([]);
    };

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < arrayLength; j++) {
            newArray[j].push(array[i][j]);
        };
    };

    return newArray;
}
let expect = require('chai').expect;
var deepEqual = require('deep-equal');
let changeArrr = [
    [1, 2],
    [3, 4]
];
let newArray = transposeArray(changeArrr, 2);
it("should return 2d array row and column switch", () => {
    deepEqual(changeArrr.length === newArray.length), "not good should return 2d array"
});