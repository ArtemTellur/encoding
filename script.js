$(function () {
    var changingInstance = new Changing(),
        replacingInstance = new Replacing(),
        gamm = new Gamm(),
        mono = new Mono(),
        sequence = [];

    $('.encoding-checkbox').on('click', function (e) {
        if (this.checked) {
            sequence.push(this.dataset.number);
        }
        else {
            var index = sequence.indexOf(this.dataset.number);

            sequence.splice(index, 1);
        }
    });

    $('#encoding-submit').on('click', function () {
        var sourceWord = $('#encoding').val(),
            encoded = sourceWord;

        for (var i = 0; i < sequence.length; i += 1) {
            switch (sequence[i]) {
                case '0':
                    encoded = changingInstance.changingEncoding(encoded);
                    break;
                case '1':
                    var key = $('#replacing-encoding-key').val();
                    encoded = replacingInstance.replacingEncoding(encoded, key);
                    break;
                case '2':
                    encoded = gamm.gammEncoding(encoded);
                    break;
                case '3':
                    encoded = mono.monoEncoding(encoded);
                    break;
            }
        }

        $('#encoding-result').text(encoded);
    });

});

$(function () {
    var changingInstance = new Changing(),
        replacingInstance = new Replacing(),
        gamm = new Gamm(),
        mono = new Mono(),
        sequence = [];

    $('.decoding-checkbox').on('click', function (e) {
        if (this.checked) {
            sequence.push(this.dataset.number);
        }
        else {
            var index = sequence.indexOf(this.dataset.number);

            sequence.splice(index, 1);
        }
    });

    $('#decoding-submit').on('click', function () {
        var sourceWord = $('#decoding').val(),
            decoded = sourceWord;

        for (var i = 0; i < sequence.length; i += 1) {
            switch (sequence[i]) {
                case '0':
                    decoded = changingInstance.changingDecoding(decoded);
                    break;
                case '1':
                    var key = $('#replacing-decoding-key').val();
                    decoded = replacingInstance.replacingDecoding(decoded, key);
                    break;
                case '2':
                    decoded = gamm.gammDecoding(decoded);
                    break;
                case '3':
                    decoded = mono.monoDecoding(decoded);
                    break;
            }
        }

        $('#decoding-result').text(decoded);
    });

});

$(function() {
    var decoded,
        analytic = new Analytic();

    $('#analytic-submit').on('click', function() {
        var sourceWord = $('#analytic-input').val();
        
        decoded = analytic.analyticEncoding(sourceWord);
        $('#analytic-output').text(decoded);
    })
});