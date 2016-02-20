/** @jsx plastiq.html */
var plastiq = require('plastiq');
var h = plastiq.html;
var httpism = require('httpism');

module.exports = class App {
  constructor(config) {
    this.topStories = [];
    httpism.get('/top-stories').then((response) => {
      this.topStories = response.body;
      this.refresh();
    });
  }

  renderStory(story){
    return <div class="story">
      <a class="vote-down" onclick={() => story.votes--}>down</a>&nbsp;
      <span class="votes">{story.votes}</span>&nbsp;
      <a class="vote-up" onclick={() => story.votes++}>up</a>
      {story.title}
    </div>;
  }

  render(){
    this.refresh = h.refresh;
    return <div>
      <h1>Monkey News</h1>
      {this.topStories.map(this.renderStory)}
    </div>;
  }
}
