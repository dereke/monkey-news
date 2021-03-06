var mountApp = require('mount-app');
var App = require('../lib/app');
var hyperdom = require('hyperdom');

module.exports = function(config, options){
  mountApp((testEl) => {
    hyperdom.append(testEl, new App(config), undefined, {
      requestRender: setTimeout
    });
  }, {}, options);
};
