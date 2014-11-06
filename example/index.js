var express = require('express');
var request = require('superagent');

var app = express();

app.use(express.static(__dirname+'/../public'));

app.get('/search', function(req, res){
  request
    .get('http://component-crawler.herokuapp.com/.json')
    .end(function(err, response){
      var data = response.body.components || [];
      var components = data
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
