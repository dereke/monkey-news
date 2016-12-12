/** @jsx hyperdom.jsx */
var hyperdom = require('hyperdom');
var h = hyperdom.html;
var httpism = require('httpism');

module.exports = class App {
  constructor(config) {
    this.topStories = [];
    this.newStory = {};
  }
  onload() {
    return this.reload();
  }

  reload(){
    return httpism.get('/top-stories').then((response) => {
      this.topStories = response.body;
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

  submitStory(){
    return httpism.post('/top-stories', this.newStory).then(() => {
      this.newStory = {};
      return this.reload();
    });
  }

  render(){
    return <div>
      <h1>Monkey News</h1>
      {this.topStories.map(this.renderStory)}
      <div>
        <h2>Add a story</h2>
        <input type="text" class="story-title" binding={[this.newStory, 'title']} />
        <button class="story-submit" onclick={() => this.submitStory()}>Submit</button>
      </div>
    </div>;
  }
}
