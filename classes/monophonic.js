// монофоническая замена
var Mono = function Mono() {
    this.table = ['абвгдежзийклмнопрстуфхцчшщьыъэюя 0123456789',
        'фн(щигеrады~@sляж^cшмбqптхюър}z_#9876543210',
        '*нущd+еr=дцйч[вь)о&{мбqптхюър}z_<9876543210',
        'kн(щи]еr%ды~@g/яэз"шмбqптхюър}z_w9876543210',
        'фнущdкеrадцйчs+ьж^c{мбqптхюър}z_v9876543210'];
}

Mono.prototype.getUnqueSymbols = function (source) {
    var symbols = [];
    for (var i = 0; i < source.length; i++) {
        if (symbols.indexOf(source[i]) === -1) {
            symbols.push(source[i]);
        }
    }
    return symbols;
}

Mono.prototype.monoEncoding = function (source) {
    var symbols = this.getUnqueSymbols(source),
        encoded = [];
    for (var i = 0; i < symbols.length; i++) {
        var charIndex = this.table[0].indexOf(symbols[i]),
            counter = 0;

        for (var j = 0; j < source.length; j++) {
            if (source[j] === symbols[i]) {
                encoded[j] = this.table[counter % 5 + 1][charIndex];
                counter++;
            }
        }
    }
    encoded = encoded.join('');

    return encoded;
}

Mono.prototype.monoDecoding = function (source) {
    var decoded = '';
    for (var i = 0; i < source.length; i++) {
        for (var j = 1; j < this.table.length; j++) {
            if (this.table[j].indexOf(source[i]) !== -1) {
                decoded += this.table[0][this.table[j].indexOf(source[i])];
                break;
            }
        }
    }
    return decoded;
}