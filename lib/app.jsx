/** @jsx plastiq.html */
var plastiq = require('plastiq');
var h = plastiq.html;
var httpism = require('httpism');

module.exports = class App {
  constructor(config) {
  }

  render(){
    return <div>
      <h1>Monkey News</h1>
    </div>;
  }
}
