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

var makeAlias = function(obj) {
  var result = [];
  Object.keys(obj).forEach(function(key) {
    var cell = {
      src: key,
      expose: obj[key]
    };
    result.push(cell);
  })
  return result;
};

var babelPresets = [
  "react",
  "es2015-ie",
  "stage-2",
]

var babelPlugins = [
  "add-module-exports",
  "transform-object-rest-spread",
  [
    "css-modules-transform",
    {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      extractCss: {
        dir: "./build/",
        relativeRoot: "./src/",
        filename: "[path]/[name].css"
      },
      keepImport: true
    },
  ],
  [
    "module-alias",
    makeAlias({
      "./src/bee": "bee",
    })
  ]
];

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
