var router = require('mock-xhr-router');

module.exports = function(){
  var api = router();
  var data = {
    topStories: []
  };

  api.get('/top-stories', () => {
    return {
      body: data.topStories
    };
  })

  api.post('/top-stories', (req) => {
    data.topStories.push(req.body);
    return {};
  })
  return data;
};
