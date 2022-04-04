const { makeIndex } = require('./js/templates.cjs');
const { render } = require('./js/html.cjs');

module.exports = function(data) {
  return render(makeIndex, { ...data, ...this });
};
