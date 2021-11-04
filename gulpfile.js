const { watch, src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const stylus = require('gulp-stylus');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const webpack = require('webpack-stream');

const dist = './';

const css = () => {
  return src('source/css/site.styl')
    .pipe(plumber())
    .pipe(stylus({ errLogToConsole: true, compress: true }))
    .pipe(gcmq())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest(dist + 'css'));
}

const js = () => {
  return src('source/js/entry.js')
    .pipe(webpack(require('../webpack.config.js')))
    .pipe(dest(dist + 'js'));
}

exports.default = () => {
  watch('source/js/**/*.js',{
    ignoreInitial: false,
    events: 'all'
  }, js)
  watch('source/css/**/*.styl',{
    ignoreInitial: false,
    events: 'all'
  }, css)
}
