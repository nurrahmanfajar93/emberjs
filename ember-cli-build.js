/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');
  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css.map', {
    destDir: 'assets'
  });
  app.import(app.bowerDirectory + '/font-awesome/css/font-awesome.css');
  app.import(app.bowerDirectory + '/font-awesome/css/font-awesome.css.map', {
    destDir: 'assets'
  });

  app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');

  app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', {
    destDir: 'fonts'
  });
  app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', {
    destDir: 'fonts'
  });
  app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', {
    destDir: 'fonts'
  });
  app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
    destDir: 'fonts'
  });
  app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {
    destDir: 'fonts'
  });

  app.import(app.bowerDirectory + '/font-awesome/fonts/FontAwesome.otf', {
    destDir: 'fonts'
  });
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.eot', {
    destDir: 'fonts'
  });
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.svg', {
    destDir: 'fonts'
  });
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.ttf', {
    destDir: 'fonts'
  });
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff', {
    destDir: 'fonts'
  });
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff2', {
    destDir: 'fonts'
  });

  return app.toTree();
};
