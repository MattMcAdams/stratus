var path = require('path');
var sassTrue = require('sass-true');

var path = require('path');
var sassTrue = require('sass-true');

var sassFile = path.join(__dirname, 'stratus.spec.scss');
sassTrue.runSass(
  {
    file: sassFile,
  },
  {
    sass: require('dart-sass'),
    describe,
    it,
  }
);
