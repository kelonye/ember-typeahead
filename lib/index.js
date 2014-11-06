require('ember');
require('./typeahead');

module.exports = function(selector, plugin, datasets){
  this.$(selector).typeahead(plugin, datasets);
};
