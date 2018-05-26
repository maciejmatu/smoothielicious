const mjml2html = require('mjml');

module.exports = function mjmlLoader(content) {
  this.cacheable();

  const result = mjml2html(content);

  if (result.errors.length) {
    const errorMsg = `[mjml-loader] ERROR in ${this.resourcePath}:
    ${result.errors.map(error => `- ${error.formattedMessage}`)}`;

    const error = new Error(errorMsg);
    error.code = 'MJML_INVALID';

    throw error;
  }

  return `module.exports = ${JSON.stringify(result.html)};`;
}