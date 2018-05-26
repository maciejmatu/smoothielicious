const mjml2html = require('mjml');

module.exports = {
  module: {
    rules: [
      {
        test: /\.mjml$/,
        loader: require.resolve('./mjml-loader.js')
      }
    ]
  }
}
