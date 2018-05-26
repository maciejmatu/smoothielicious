const mailString = require('./mail-template.mjml');
const template = require('lodash/template');

module.exports = ({ title, name }) => {
  return template(mailString)({ title, name });
}
