var Vue = require('vue/dist/vue.min');
//var Vue = require('vue/dist/vue');
var parser = require('./parser');

var app = new Vue({
	el: '#app',
	data: {
		step: 1,
		code: '.red {\n\tcolor: #ffaaaa;\n}\n.green {\n\tcolor: #aaffaa;\n}\n.blue {\n\tcolor: #aaaaff;\n}',
		result: '',
		error: ''
	},

	methods: {
		parseSCSS: function() {
			var changedColors = parser.parseFile(this.code);
			if(!changedColors.success) {
				this.errorModal(changedColors.value);
			}
			else {
				this.result = changedColors.value;
				this.step = 2;
			}
		},
		download: function() {
			//TODO: Download file.
			return;
		},
		back: function() {
			this.step = 1;
		},
		errorModal: function(err) {
			this.error = err.message;
			$('#errorModal').modal();
		}
	}
});