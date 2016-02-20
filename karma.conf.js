module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'mocha'],
    files: [
      'test/**/*.js'
    ],
    exclude: [
      '**/*.swp'
    ],
    preprocessors: {
    },
    preprocessors: {
      'test/globals.js': ['browserify'],
      'test/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
        transform: [
        ['babelify', {
          ignore: /node_modules/
        }]
      ],
      extensions: ['.jsx']
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
