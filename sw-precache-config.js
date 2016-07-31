module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js'
  ],
  runtimeCaching: [{
        urlPattern: /\/bower_components\//,
        handler: "fastest"
    }, {
        urlPattern: /\/src\//,
        handler: "fastest"
    },  {
        urlPattern: /\/elements\//,
        handler: "fastest"
    }],
  navigateFallback: '/index.html'
};
