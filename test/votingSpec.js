var browser = require('browser-monkey');
var mount = require('./mount');
var createApi = require('./createApi');

describe('voting', () => {
  it('can vote up a story', () => {
    var api = createApi();
    api.stories = [
      { title: 'Monkey escapes from zoo', votes: 0 },
      { title: 'Research shows monkeys make better leaders', votes: 0 }
    ];

    mount();

    return browser.find('.story', {text: 'Monkey escapes from zoo'}).find('.votes').shouldHave({text: '0'}).then(() => {
      return browser.find('.story', {text: 'Monkey escapes from zoo'}).find('.vote-up').click();
    }).then(() => {
      return browser.find('.story', {text: 'Monkey escapes from zoo'}).find('.votes').shouldHave({text: '1'});
    });
  });
});
