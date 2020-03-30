const sass = require("node-sass");

module.exports = function (Handlebars) {
	Handlebars.registerHelper("scss", function (value, wrapClasses) {
		const regex = new RegExp(/<style>(.*?)<\/style>/gs);

		const style = regex.exec(value);

		if (style && style[1]) {
			const foo = sass.renderSync({
				data: style[1]
			});

			return `${foo.css}`;
		}

		return '';
	});
};
