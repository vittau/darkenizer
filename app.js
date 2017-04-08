//var Vue = require('vue/dist/vue.min');
var Vue = require('vue/dist/vue');
var parser = require('./parser');

var app = new Vue({
	el: '#app',
	data: {
		step: 1,
		code: ''
	},

	methods: {
		parseSCSS: function() {
			parser.parseFile();
			this.step = 2;
		},
		makeResults: function() {
			this.step = 3;
		},
		back: function() {
			this.step--;
		}
	}
});