var browser = require('browser-monkey');
var mount = require('./mount');
var createApi = require('./createApi');

describe('create story', () => {
  it('adds a story to top stories', () => {
    var api = createApi();

    mount();

    return browser.find('input.story-title').typeIn('Monkey goes crazy').then(() => {
      return browser.find('button.story-submit').click();
    }).then(() => {
      return Promise.all([
        browser.find('.story').shouldHave({text: 'Monkey goes crazy'}),
        browser.find('input.story-title').shouldHave({exactValue: ''})
      ]);
    });
  });
});
