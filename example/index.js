var express = require('../node_modules/component-hooks/node_modules/express/');
var request = require('../node_modules/superagent');

var app = express();

app.use(express.static(__dirname+'/../public'));

app.get('/search', function(req, res){
  request
    .get('http://component.io/components/all')
    .end(function(err, data){
      var components = data.body
        .filter(function(component){
          return !!component;
        })
        .map(function(component){
          return {
            'name': component.name,
            'repo': component.repo,
            'description': component.description,
            'value': component.name,
            'tokens': [component.name, component.repo.split('/')[0]]
          };
        });
      res.json(components);
    });
});

app.get('*', function(req, res){
  res.sendfile(__dirname+'/index.html');
});

app.listen(4000);

console.log('http://dev:4000');
