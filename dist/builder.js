const KssBuilderHandlebars = require('kss/builder/handlebars');

class FrontboxKSSSlyleguide extends KssBuilderHandlebars {
  constructor() {
    super();
  }

  prepare(styleGuide) {
    return super.prepare(styleGuide).then(styleGuide => {
      require('./helpers/prism')(this.Handlebars);
      return styleGuide;
    });
  }
}

module.exports = FrontboxKSSSlyleguide;