const mjml2html = require('mjml');

module.exports = {
  module: {
    rules: [
      {
        test: /\.mjml$/,
        loader: function(content) {
          const result = mjml2html(content);

          return `module.exports = ${JSON.stringify(result.html)};`;
        }
      }
    ]
  }
}
