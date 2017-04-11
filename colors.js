var hexToHsl = require('hex-to-hsl');
var hslToHex = require('hsl-to-hex');

function invertColor(hex) {
	var hsl = hexToHsl(hex);
	return hslToHex(hsl[0], hsl[1], invert(hsl[2], 100)).substring(1);
}

function invert(value, max) {
	return max - value;
}

//x is the input color, c is the contrast parameter. max is the max input value possible.
function sigmoid(x, c, max=100) {
	var expo = -(x - 0.5)/0.1;
	var y = (x + c/(1 + Math.exp(expo)))/(1 + (c/max));
	return y;
}

exports.invertColor = invertColor;