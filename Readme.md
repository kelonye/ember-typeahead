
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
  didInsertElement: function(){

    this._super();
    
    var template = [
      '<p class="repo-language">{{repo}}</p>',
      '<p class="repo-name">{{name}}</p>',
      '<p class="repo-description">{{description}}</p>'
    ].join('');

    var opts = {
      name: 'components',
      prefetch: '/search',
      template: template,
      limit: 10
    };

    typeahead('.typeahead', opts); // apply on .typeahead input

  },
  
});

```
Example
---

    $ make example
