var { parse, stringify } = require('scss-parser');
var createQueryWrapper = require('query-ast');

var colors = require('./colors');

function parseFile(code) {
	try {
		var ast = parse(code);
	}
	catch(err) {
		return { success: false, value: err };
	}
	var $ = createQueryWrapper(ast);
	$('color_hex').replace(function(el) {
		return { type: "color_hex", value: colors.invertColor(el.node.value) };
	});
	var scss = stringify($().get(0));
	return { success: true, value: scss };
}

exports.parseFile = parseFile;