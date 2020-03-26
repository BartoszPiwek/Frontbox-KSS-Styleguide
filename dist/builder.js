/* jshint node: true */
'use strict';

let KssBuilderHandlebars = require('kss/builder/handlebars');

class KssBuilderScheibo extends KssBuilderHandlebars {

  constructor() {
    super();

    this.addOptionDefinitions({
      requirejs: {
        group: 'Style guide:',
        string: true
      }
    });

    this.addOptionDefinitions({
      bodyclass: {
        group: 'Style guide:',
        string: true
      }
    });

    this.addOptionDefinitions({
      htmllang: {
        group: 'Style guide:',
        string: true
      }
    });
  }

  prepare(styleGuide) {
    return super.prepare(styleGuide).then(styleGuide => {
      require('./helpers/prism')(this.Handlebars);
      require('./helpers/arguments')(this.Handlebars);
      require('./helpers/pug')(this.Handlebars);
      return styleGuide;
    });
  }
}

module.exports = KssBuilderScheibo;