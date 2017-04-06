// кафедра систем информатики
var Gamm = function Gamm() {
    this.alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя 0123456789';
    this.divider = this.alphabet.length;
    this.key = 'символ';
}

Gamm.prototype.fillTheKey = function () {
    var counter = 0,
        filledKey = this.key;
    while (filledKey.length < this.alphabet.length) {
        if (counter === this.key.length) {
            counter = 0;
        }
        filledKey += this.key[counter];
        counter += 1;
    }
    return filledKey;
}

Gamm.prototype.gammEncoding = function (source) {
    var filledKey = this.fillTheKey(),
        encoded = '';
    for (var i = 0; i < source.length; i += 1) {
        var indexOfNewSymbol = ((this.alphabet.indexOf(source[i]) + 1) + (this.alphabet.indexOf(filledKey[i]) + 1)) % this.alphabet.length;
        
        encoded += this.alphabet[indexOfNewSymbol === 0 ? this.alphabet.length - 1 : indexOfNewSymbol - 1];
    }
    return encoded;
}

Gamm.prototype.gammDecoding = function (source) {
    var filledKey = this.fillTheKey(),
        decoded = '';
    for (var i = 0; i < source.length; i += 1) {
        var c = this.alphabet.indexOf(source[i]) + 1,
            g = this.alphabet.indexOf(filledKey[i]) + 1,
            t = this.alphabet[(c - g + this.alphabet.length) % this.alphabet.length - 1];

        decoded += t;
    }
    return decoded;
}