require('ember');
require('./typeahead');

// TODO: use handlebars
var Hogan = require('./hogan');

module.exports = function(selector, opts){
  opts = opts || {};
  if (opts.template) {
    //opts.template = Em.Handlebars.compile(opts.template);
    //opts.engine = Em.Handlebars;
    opts.engine = Hogan;
  }
  this.$(selector).typeahead(opts);
};
