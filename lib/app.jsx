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
    return <div class="story">{story.title}</div>;
  }

  render(){
    this.refresh = h.refresh;
    return <div>
      <h1>Monkey News</h1>
      {this.topStories.map(this.renderStory)}
    </div>;
  }
}
