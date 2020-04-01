const sass = require("node-sass");
const stripCssComments = require('strip-css-comments');

module.exports = function (Handlebars) {
	Handlebars.registerHelper("htmlScssStyleToCSS", function (htmlPartial) {
		const findStyleRegex = new RegExp(/<style type="iframe">(.*?)<\/style>/gs);
		const styleRegexResult = findStyleRegex.exec(htmlPartial);

		if (!styleRegexResult) {
			return;
		}

		const sassOutput = sass.renderSync({
			includePaths: ['src/style/'],
			data: styleRegexResult[1]
		});


		const css = stripCssComments(sassOutput.css.toString('utf8'));

		return `<style type="iframe">${css}</style>`;
	});
};
