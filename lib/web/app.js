var express = require('express');
var path = require('path');
var JSV = require('JSV').JSV;

var middleware = require('./middleware');

var TEMPLATE_DIR = path.join(__dirname, 'views');

var schema = {
    'type': 'object',
    'properties': {
        'users': {
            'type': 'string', optional: false
        }
    }
};

var jsv_env = JSV.createEnvironment('json-schema-draft-03');

exports.run = function(argv) {
  var app = express.createServer();

  app.set('views', TEMPLATE_DIR);
  app.set('view engine', 'jade');
  app.set('view options', {layout: false});

  /* setup middleware */
  app.use(express.bodyParser());
  app.use(middleware.logger());
  app.use('/static', express.static(path.join(__dirname, '..', '..', 'extern')));
  app.use('/static', express.static(path.join(__dirname, '..', '..', 'static')));

  app.get('/', function(req, res) {
    res.render('index.jade', {
        'name': 'something',
        'description': 'something else',
        'json_text': null,
        'report': null});
  });

  app.post('/', function(req, res) {
    var json_text = req.body.json_text;
    var jsv_report = jsv_env.validate(JSON.parse(json_text), schema);
    res.render('index.jade', {
        'name': 'something',
        'description': 'something else',
        'json_text': json_text,
        'report': jsv_report});
  });

  app.listen(argv.p);
}