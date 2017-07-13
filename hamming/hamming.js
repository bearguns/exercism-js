var Hamming = function () {};

Hamming.prototype.compute = function (strandA, strandB) {
    var distance = 0;

    if (strandA.length !== strandB.length) {
        throw new Error("DNA strands must be of equal length.");
    }

    for (var i = 0; i < strandA.length; i++) {
        if (strandA[i] !== strandB[i]) {
            distance += 1;
        }
    }

    return distance;
}

module.exports = Hamming;