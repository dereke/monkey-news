var browser = require('browser-monkey');
var mount = require('./mount');
var createApi = require('./createApi');

describe('top stories', () => {
  it('shows the top x stories', () => {
    var api = createApi();
    api.topStories = [
      {title: 'Monkeys are cool'},
      {title:  'More monkeys should come to geek nights'},
      {title: 'Someone save the monkeys'}
    ];

    mount();

    return browser.find('.story').shouldHave({
      text: [
        'Monkeys are cool',
        'More monkeys should come to geek nights',
        'Someone save the monkeys'
      ]
    })
  });

  it('can create a story', () =>{
    var api = createApi();
    
    mount();

    return browser.find('input.story-title').typeIn('Monkeys are cool').then(() => {
      return browser.find('button.submit-story').click();
    }).then(() => {
      return browser.find('.story').shouldHave({text: 'Monkeys are cool'})
    });
    
  })

  function findStory(title) {
    return browser.find('.story', { text: title}).component({
      voteCount: function(){ return this.find('.vote-count'); },
      voteUp: function(){ return this.find('.vote-up'); }
    })
  };

  it('can up vote a story', () => {
    var api = createApi();
    api.topStories = [
      {title: 'Hello monkeys', voteCount: 0},
      {title: 'Monkeys are cool', voteCount: 0}
    ];

    mount();

    var story = findStory('Monkeys are cool');
    return story.voteCount().shouldHave({text: '0'}).then(() => {
      return story.voteUp().click();
    }).then(() => {
      return story.voteCount().shouldHave({
        text: '1'
      })
    })
  })
});
