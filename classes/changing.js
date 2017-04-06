// (французские булочки)
var Changing = function Changing() {
    this.engAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    this.engReplacedAlphabet = [33, 17, 8, 16, 2, 15, 14, 13, 12, 98, 10, 97, 96, 24, 11, 0, 5, 25, 7, 64, 26, 66, 69, 4, 65, 32];
    this.rusReplacedAlphabet = [33, 17, 8, 16, 2, 15, 14, 13, 12, 98, 10, 97, 96, 24, 11, 0, 5, 25, 7, 64, 26, 66, 69, 4, 6, 36, 21, 22, 23, 37, 39, 18, 54, 78, 77, 80, 89];
    this.rusAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя 0123456789';
}

Changing.prototype.changingEncoding = function(source) {
    var encoded = '';
    for (var i = 0; i < source.length; i += 1) {
        encoded += this.rusReplacedAlphabet[this.rusAlphabet.indexOf(source[i])] + ' ';
    }
    return encoded;
}

Changing.prototype.changingDecoding = function(source) {
    var chars = source.split(' '),
        decoded = '';

    chars.pop();

    chars.forEach(function (element) {
        decoded += this.rusAlphabet[this.rusReplacedAlphabet.indexOf(parseInt(element))];
    }, this);

    return decoded;
}