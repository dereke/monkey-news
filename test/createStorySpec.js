var mount = require('browser-monkey/hyperdom');
var WebApp = require('../lib/app');
var createApi = require('./createApi');

describe('create story', () => {
  it('adds a story to top stories', () => {
    var monkey = mount()
      .withServer('http://localhost:3999', createApi())
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
