var browser = require('browser-monkey');
var mount = require('./mount');
var createApi = require('./createApi');

describe('top stories', () => {
  it('shows the top x stories', () => {
    var api = createApi();
    api.stories = [
      { title: 'Monkey escapes from zoo' },
      { title: 'Research shows monkeys make better leaders' },
      { title: 'In time monkeys will probably have their own planet' }
    ];

    mount();

    return browser.find('.story').shouldHave({
      length: 3, text: [
        'Monkey escapes from zoo',
        'Research shows monkeys make better leaders',
        'In time monkeys will probably have their own planet'
      ]
    });
  });
});
