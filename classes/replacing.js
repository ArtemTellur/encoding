// (вотпримершифравертикальнойперестановки)
var Replacing = function Changing() {
    this.sourceWord = 'вотпримершифравертикальнойперестановки';
    this.key = '4036152';
    this.rowCount;
    this.table = [];
}

Replacing.prototype.fillTheGaps = function (source) {
    var difference = (parseInt(source.length / this.key.length) + 1) * this.key.length - source.length,
        extendedSource = source;
    for (var i = 0; i < difference; i += 1) {
        extendedSource += ' ';
    }
    return extendedSource;
}

Replacing.prototype.replacingEncoding = function (source) {
    var counter = 0,
        encoded = '';

    source = this.fillTheGaps(source);

    this.rowCount = parseInt(source.length / this.key.length);

    for (var i = 0; i < this.rowCount; i += 1) {
        this.table[i] = [];
        for (var j = 0; j < this.key.length; j += 1) {
            this.table[i][j] = source[counter];
            counter++;
        }
    }

    for (var i = 0; i < this.key.length; i += 1) {
        for (var j = 0; j < this.rowCount; j += 1) {
            encoded += this.table[j][parseInt(this.key.indexOf(i))];
        }
    }

    return encoded;
}

Replacing.prototype.replacingDecoding = function (source) {
    var decoded = '';
    source = this.fillTheGaps(source);
    this.rowCount = parseInt(source.length / this.key.length);
    for (var i = 0; i < this.rowCount; i += 1) {
        for (var j = 0; j < this.key.length; j += 1) {
            decoded += source[parseInt(this.key[j]) * this.rowCount + i];
        }
    }
    return decoded;
}