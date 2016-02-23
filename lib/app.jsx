/** @jsx plastiq.html */
var plastiq = require('plastiq');
var h = plastiq.html;
var httpism = require('httpism');

module.exports = class App {
  constructor(config) {
    this.topStories = [];
    this.newStory = {};
    this.reloadTopStories();
  }
  reloadTopStories(){
    httpism.get('/top-stories').then((response) => {
      this.topStories = response.body;
      this.refresh()
    });
  
  }

  renderStory(story){
    return <div class="story">
      <span class="vote-count">{story.voteCount}</span>
      <a class="vote-up" onclick={() => {story.voteCount++}}>up</a>
    {story.title}</div>
  }

  submitStory(){
    httpism.post('/top-stories', this.newStory).then(() => {
      this.reloadTopStories();
    })
  }

  render(){
    this.refresh = h.refresh;
    return <div>
      <h1>Monkey News</h1>
      {this.topStories.map(this.renderStory)}

      <div>
        <h2>Submit Story</h2>
        <input type="text" class="story-title" binding={[this.newStory, 'title']} />
        <button class="submit-story" onclick={this.submitStory.bind(this)}>Submit</button>
        </div>
    </div>;
  }
}
