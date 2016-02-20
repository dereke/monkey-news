var router = require('mock-xhr-router');

module.exports = function(){
  var api = router();
  var data = {};

  api.get('/top-stories', (req) => {
    return {
      body: data.stories
    };
  });

  return data;
};
