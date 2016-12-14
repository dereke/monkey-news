var mount = require('browser-monkey/hyperdom');
var WebApp = require('../lib/app');
var createApi = require('./createApi');

describe('top stories', () => {
  it('shows the top x stories', () => {
    var data = {
      stories: [
        { title: 'Monkey escapes from zoo' },
        { title: 'Research shows monkeys make better leaders' },
        { title: 'In time monkeys will probably have their own planet' }
      ]
    };

    var monkey = mount()
      .withServer('http://localhost:3000', createApi(data))
      .withApp(() => new WebApp())
      .start();

    return monkey.find('.story').shouldHave({
      length: 3, text: [
        'Monkey escapes from zoo',
        'Research shows monkeys make better leaders',
        'In time monkeys will probably have their own planet'
      ]
    });
  })
})
