
module.exports = function(data){
  var express = require('express');
  var bodyParser = require('body-parser');

  var app = express();
  app.use(bodyParser.json());

  var data = data || {
    stories: []
  };

  app.get('/top-stories', (req, res) => {
    res.json(data.stories);
  });

  app.post('/top-stories', (req, res) => {
    data.stories.push(req.body);
    res.status(200).send('OK');
  });

  return app;
};
