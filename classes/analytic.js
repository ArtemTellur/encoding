//ватала
var Analytic = function Analytic() {
    this.key = [
        [14, 8, 3],
        [8, 5, 2],
        [3, 2, 1]
    ];
    this.alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя 0123456789';
}

Analytic.prototype.fillTheGaps = function(destructSource) {
    if (destructSource[destructSource.length - 1].length < 3) {
        for (var i = 0; i < 3 - destructSource[destructSource.length - 1].length; i++) {
            destructSource[destructSource.length - 1] += ' ';
        }
    }
}

Analytic.prototype.analyticEncoding = function(source) {
    var encoded = [],
        counter = 0,
        symbol = 0,
        destructSource,
        regex = new RegExp(".{1,"+ this.key[0].length +"}", "g");

    destructSource = source.match(regex);

    this.fillTheGaps(destructSource)

    for (var i = 0; i < destructSource.length; i++) {
        for (var j = 0; j < this.key.length; j++) {
            for (var k = 0; k < destructSource[i].length; k++) {
                symbol += this.key[j][k] * this.alphabet.indexOf(destructSource[i][k]);
            }
            encoded.push(symbol);
            symbol = 0;
        }
    }
    return encoded.join(' ');
}

var a = new Analytic();