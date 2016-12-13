var mount = require('browser-monkey/hyperdom');
var WebApp = require('../lib/app');
var createApi = require('./createApi');

function storyComponent(monkey) {
  return monkey.find('.story', {text: 'Monkey escapes from zoo'}).component({
    votes: function() { return this.find('.votes'); },
    voteUp: function() { return this.find('.vote-up'); },
    voteDown: function() { return this.find('.vote-down'); }
  });
}

describe('voting', () => {
  it('can vote up a story', () => {
    var api = createApi();
    api.stories = [
      { title: 'Monkey escapes from zoo', votes: 0 },
      { title: 'Research shows monkeys make better leaders', votes: 0 }
    ];

    var monkey = mount()
      .withApp(() => new WebApp())
      .start();

    var story = storyComponent(monkey);

    return story.votes().shouldHave({text: '0'}).then(() => {
      return story.voteUp().click();
    }).then(() => {
      return story.votes().shouldHave({text: '1'});
    });
  });

  it('can vote down a story', () => {
    var api = createApi();
    api.stories = [
      { title: 'Monkey escapes from zoo', votes: 3 },
      { title: 'Research shows monkeys make better leaders', votes: 0 }
    ];

    var monkey = mount()
      .withApp(() => new WebApp())
      .start();

    var story = storyComponent(monkey);

    return story.votes().shouldHave({text: '3'}).then(() => {
      return story.voteDown().click();
    }).then(() => {
      return story.votes().shouldHave({text: '2'});
    });
  });
});
