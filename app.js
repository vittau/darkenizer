//var Vue = require('vue/dist/vue.min');
var Vue = require('vue/dist/vue');

var app = new Vue({
	el: '#app',
	data: {
		step: 1,
		message: 'Paste your SCSS file here...'
	},

	methods: {
		parseSCSS: function() {
			this.step = 2;
		}
	}
});