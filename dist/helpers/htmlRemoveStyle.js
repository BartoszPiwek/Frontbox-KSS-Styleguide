module.exports = function (Handlebars) {
	Handlebars.registerHelper("htmlRemoveStyle", function (htmlPartial) {
		const findStyleRegex = new RegExp(/<style>(.*?)<\/style>/gs);
		const html = htmlPartial.replace(findStyleRegex, '');

		return html;
	});
};
