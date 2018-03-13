// dependency
var fs = require("fs");
var path = require("path");
var ora = require('ora')
var rm = require('rimraf')
var chalk = require('chalk')
// gulp & gulp plugin
var gulp = require("gulp");
var babel = require("gulp-babel");
var es3ify = require("gulp-es3ify");

var spinner = ora('building for production...')

var addBabelPrefix = function (key, values) {
  return values.map(function (item) {
    return require.resolve("babel-" + key + "-" + item);
  })
}

var babelPresets = addBabelPrefix('preset', [
  "react",
  "es2015-ie",
  "stage-2",
])

var babelPlugins = addBabelPrefix('plugin', [
  "add-module-exports",
  "transform-object-rest-spread",
])

babelPlugins.push([
  "css-modules-transform",
  {
    generateScopedName: '[name]__[local]___[hash: base64: 5]',
    extractCss: {
      dir: "./build/",
      relativeRoot: "./src/",
      filename: "[path]/[name].css"
    },
    keepImport: true
  },
]);

gulp.task("clean_build", function () {
  spinner.start()
  var promise = new Promise(function (resolve, reject) {
    rm(path.join(__dirname, '../build'), err => {
      if (err) {
        reject(err)
      }
      resolve()
    })
  })
  return promise;
});

gulp.task("build", ["clean_build"], function () {
  return gulp
    .src([
      path.join(process.cwd(), "./src/**/*.js"),
    ])
    .pipe(
    babel({
      presets: babelPresets,
      plugins: babelPlugins,
    })
    )
    .pipe(es3ify())
    .pipe(gulp.dest("build"))
    .on("end", function () {
      spinner.stop()
      console.log(chalk.cyan('  Build complete.\n'))
    })
});
