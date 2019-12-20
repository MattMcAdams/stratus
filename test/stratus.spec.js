var path = require('path');
var sassTrue = require('sass-true');

var sassFile = path.join(__dirname, 'unit/_core.spec.scss');
sassTrue.runSass(
  { file: sassFile, includePaths: ['node-modules'] },
  { sass: require('sass'), describe, it, }
);

var sassFile = path.join(__dirname, 'unit/_color.spec.scss');
sassTrue.runSass(
  { file: sassFile, includePaths: ['node-modules'] },
  { sass: require('sass'), describe, it, }
);

var sassFile = path.join(__dirname, 'unit/_typography.spec.scss');
sassTrue.runSass(
  { file: sassFile, includePaths: ['node-modules'] },
  { sass: require('sass'), describe, it, }
);

var sassFile = path.join(__dirname, 'unit/_structure.spec.scss');
sassTrue.runSass(
  { file: sassFile, includePaths: ['node-modules'] },
  { sass: require('sass'), describe, it, }
);

var sassFile = path.join(__dirname, 'unit/_media.spec.scss');
sassTrue.runSass(
  { file: sassFile, includePaths: ['node-modules'] },
  { sass: require('sass'), describe, it, }
);
