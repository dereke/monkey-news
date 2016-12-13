var mount = require('browser-monkey/mount/hyperdom');
var WebApp = require('../lib/app');
var createApi = require('./createApi');

describe('create story', () => {
  it('adds a story to top stories', () => {
    var api = createApi();

    var monkey = mount()
      .withApp(() => new WebApp())
      .start();

    return monkey.find('input.story-title').typeIn('Monkey goes crazy').then(() => {
      return monkey.find('button.story-submit').click();
    }).then(() => {
      return Promise.all([
        monkey.find('.story').shouldHave({text: 'Monkey goes crazy'}),
        monkey.find('input.story-title').shouldHave({exactValue: ''})
      ]);
    });
  });
});
