var path = require('path');
var sassTrue = require('sass-true');

var sassFile = path.join(__dirname, 'unit/_typography.spec.scss');
sassTrue.runSass(
    {
    file: sassFile,
    includePaths: ['node_modules'],
    },
    {
      describe,
      it
    }
  );

var sassFile = path.join(__dirname, 'unit/_structure.spec.scss');
sassTrue.runSass(
  {
    file: sassFile,
    includePaths: ['node_modules'],
  },
  {
    describe,
    it
  }
);
