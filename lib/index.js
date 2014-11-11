require('ember');
require('./typeahead');

module.exports = function(el, plugin, datasets){
  el.typeahead(plugin, datasets);
};
