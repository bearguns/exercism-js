var DnaTranscriber = function () {};

function validStrand(strand) {
    strand = strand.toLowerCase();
    if (strand.match(/[^gcta]/g)) {
        return false;
    }
    return true;
}

function transposeChar(char) {
    switch (char) {
        case 'G':
            return 'C';
        case 'C':
            return 'G';
        case 'T':
            return 'A';
        case 'A':
            return 'U';
        default:
            return null;
    }
}

DnaTranscriber.prototype.toRna = function (strand) {
    var output = [];
    if (!validStrand(strand)) {
        throw new Error("Invalid input");
    }

    strand = strand.split("");
    strand.forEach(function (c) {
        output.push(transposeChar(c));
    });

    return output.join('');
}

module.exports = DnaTranscriber;