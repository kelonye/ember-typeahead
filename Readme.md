
![](https://dl.dropbox.com/u/30162278/ember-typeahead.png)

Install
---

    $ component install kelonye/ember-typeahead

Usage
---

```js

var typeahead = require('ember-typeahead');

var App = Em.Application.create();

App.IndexView = Em.View.extend({

  autocomplete: function(){
  
    var bh = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch: '/search'
    });

    bh.initialize();

    var plugin = {
      hint: true,
      highlight: true,
      minLength: 1
    };

    var datasets = {
      name: 'components',
      displayKey: 'value',
      source: bh.ttAdapter(),
      templates: {
        empty: [
          '<div class="empty-message">',
          'no match found',
          '</div>'
        ].join('\n'),
        suggestion: Handlebars.compile([
          '<p class="repo-language">{{repo}}</p>',
          '<p class="repo-name">{{name}}</p>',
          '<p class="repo-description">{{description}}</p>'
        ].join(''))
      }
    };

    typeahead('.typeahead', plugin, datasets);

  }.on('didInsertElement'),
  
});

```
Example
---

    $ make example
