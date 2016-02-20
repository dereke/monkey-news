var router = require('mock-xhr-router');

module.exports = function(){
  var api = router();
  var data = {
    stories: []
  };

  api.get('/top-stories', (req) => {
    return {
      body: data.stories
    };
  });

  api.post('/top-stories', (req) => {
    data.stories.push(req.body);
    return {};
  });

  return data;
};
