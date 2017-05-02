const gulp = require('gulp');
const del = require('del');

const BUILD_FILES = [
  'build/',
];

gulp.task('clean', () =>
  del(BUILD_FILES)
);
