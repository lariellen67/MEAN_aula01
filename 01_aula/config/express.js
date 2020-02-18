var express = require('express');
var home = require('../app/routes/home');

module.exports = function() {
  var app = express();
  var porta = process.env.PORT || 8080;
  app.set('port', porta);

  app.use(express.static('./public'));
  app.set('view engine', 'ejs');
  app.set('views', './app/views');
  home(app);
  return app;
};
