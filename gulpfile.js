var gulp = require('gulp');
var del = require('del');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var nodemon = require('gulp-nodemon');
var path = require('path');

gulp.task('clean:build', function() {
  del('./public/js/*');
});

gulp.task('build', ['clean:build'], function() {
  return gulp.src('./src/index.js')
    .pipe(webpack(webpackConfig))
    .on('error', function handleError() {
      this.emit('end');
    })
    .pipe(gulp.dest('./'));
});

gulp.task('watch:build', function() {
  return gulp.watch('./src/**/*', ['build']);
});

gulp.task('serve:node', function(done) {
  nodemon({
    exec: 'node ./node_modules/babel-cli/bin/babel-node.js ./server.js',
    watch: ['server.js'],
    ext: 'js html'
  });
});

gulp.task('serve', ['serve:node']);
gulp.task('watch', ['build', 'watch:build']);
gulp.task('default', ['serve']);
