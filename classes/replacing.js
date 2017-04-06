// (перестановка, 8 3 9 4 10 11 0 6 7 2 5 1)
var Replacing = function Changing() {
    this.sourceWord = 'перестановка';
    this.key = '8 3 9 4 10 11 0 6 7 2 5 1';
}

Replacing.prototype.replacingEncoding = function (source, key) {
    var counter = 0,
        encoded = '',
        parsedKey = key.split(' ');

    parsedKey.forEach(function(char) {
        encoded += source[parseInt(char)];
    }, this);

    return encoded;
}

Replacing.prototype.replacingDecoding = function (source, key) {
    var decoded = [],
        parsedKey = key.split(' ');

    for (var i = 0; i < source.length; i++) {
        decoded[parseInt(parsedKey[i])] = source[i];
    }

    decoded = decoded.join('');

    return decoded;
}