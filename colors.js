var hexToHsl = require('hex-to-hsl');
var hslToHex = require('hsl-to-hex');

function invertColor(hex) {
	var hsl = hexToHsl(hex);
	return hslToHex(hsl[0], hsl[1], invert(hsl[2])).substring(1);
}

function invert(value, max=100) {
	return max - value;
}

exports.invertColor = invertColor;