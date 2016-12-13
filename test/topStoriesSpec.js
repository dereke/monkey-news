var mount = require('browser-monkey/mount/hyperdom');
var WebApp = require('../lib/app');
var createApi = require('./createApi');

describe('top stories', () => {
  it('shows the top x stories', () => {
    var api = createApi();
    api.stories = [
      { title: 'Monkey escapes from zoo' },
      { title: 'Research shows monkeys make better leaders' },
      { title: 'In time monkeys will probably have their own planet' }
    ];

    var monkey = mount()
      .withApp(() => new WebApp())
      .start();

    return monkey.find('.story').shouldHave({
      length: 3, text: [
        'Monkey escapes from zoo',
        'Research shows monkeys make better leaders',
        'In time monkeys will probably have their own planet'
      ]
    });
  });
});
