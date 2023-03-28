function drawPyramid(num) {
    for (var i = 1; i <= num; i++) {
        var row = '';
        for (var j = 1; j <= num - i; j++) {
        row += ' ';
        }
        for (var k = 1; k <= 2 * i - 1; k++) {
        row += '*';
        }
        console.log(row);
    }
}

drawPyramid(5);