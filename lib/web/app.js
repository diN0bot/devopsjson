var express = require('express');
var path = require('path');

var middleware = require('./middleware');

var TEMPLATE_DIR = path.join(__dirname, 'views');

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
        'valid_text': null});
  });
  app.post('/', function(req, res) {
    json_text = JSON.parse(req.body.json_text)
    res.render('index.jade', {
        'name': 'something',
        'description': 'something else',
        'valid_text': json_text});
  });


  app.listen(argv.p);
}
