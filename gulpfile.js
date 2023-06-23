const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const del = require('del');

function compileScss() {
  del(['./app/css/*.css']);

  return src('./app/scss/**/*.scss').pipe(sass()).pipe(dest('./app/css'));
}

function minifyCss() {
  del(['./css/*.css']);

  return src('./app/css/*.css')
    .pipe(
      cleanCss({ debug: true }, (details) => {
        console.log(`${details.name}: ${details.stats.originalSize}`);
        console.log(`${details.name}: ${details.stats.minifiedSize}`);
      })
    )
    .pipe(dest('./css'));
}

function compileJs() {
  del(['./js/*.js']);

  return src('./app/js/*.js')
    .pipe(babel({ presets: [['@babel/preset-env', { modules: false }]] }))
    .pipe(uglify())
    .pipe(dest('./js'));
}

function watchTask() {
  watch('./app/scss/**/*.scss', series(compileScss, minifyCss));
  watch('./app/js/*.js', compileJs);
}

exports.default = series(compileScss, minifyCss, compileJs, watchTask);
