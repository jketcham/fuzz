require('babel-register');
require('require-dir')('gulptasks');

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', () =>
  runSequence(
    'clean',
    [
      'css',
      'webpack:build',
    ]
  )
);

gulp.task('watch', () =>
  runSequence(
    'clean',
    [
      // 'css:watch',
      'webpack-dev-server',
    ]
  )
);
