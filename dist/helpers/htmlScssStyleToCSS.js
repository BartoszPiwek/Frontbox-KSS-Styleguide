const sass = require("node-sass");

module.exports = function (Handlebars) {
	Handlebars.registerHelper("htmlScssStyleToCSS", function (htmlPartial) {
		const findStyleRegex = new RegExp(/<style>(.*?)<\/style>/gs);
		const styleRegexResult = findStyleRegex.exec(htmlPartial);

		if (!styleRegexResult) {
			return;
		}

		const sassOutput = sass.renderSync({
			includePaths: ['src/style/'],
			data: styleRegexResult[1]
		});

		return `<style>${sassOutput.css}</style>`;
	});
};
