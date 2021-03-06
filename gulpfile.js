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
var uglify = require('gulp-uglify');

var spinner = ora('building for production...')

var makeAlias = function (obj) {
  var result = [];
  Object.keys(obj).forEach(function (key) {
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
  "transform-decorators-legacy",
  [
    "css-modules-transform",
    {
      generateScopedName: '[local]__[name]___[hash:base64:5]',
      ignore: function (url) {
        if (url.indexOf(path.join(__dirname, './src/bee')) >= 0 || url.indexOf(path.join(__dirname, './node_modules')) >= 0) {
          return true
        }
      },
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
      "./src/utils.js":'utils'
    })
  ]
];

gulp.task("clean", function (cb) {
  // spinner.start()
  rm(path.join(__dirname, './build'), err => {
    if (err) {
      cb(err)
    }
    cb()
  })
});
gulp.task("css", function () {
  return gulp
    .src([
      './src/bee/*.css',
    ])
    .pipe(gulp.dest('build/bee'))
});

gulp.task("fonts", function () {
  return gulp
    .src([
      './src/**/*.eot',
      './src/**/*.svg',
      './src/**/*.ttf',
      './src/**/*.woff',
      './src/**/*.woff2'
    ])
    .pipe(gulp.dest('build'))
});
gulp.task("npm", function () {
  return gulp
    .src([
      './src/**/*.md',
      './src/**/*.json',
    ])
    .pipe(gulp.dest('build'))
});
gulp.task("js", function () {
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
    // .pipe(uglify())
    .pipe(gulp.dest("build"))
    .on("end", function () {
      // spinner.stop()
      console.log(chalk.cyan('  Build complete.\n'))
    })
});


gulp.task("build", gulp.series('clean',gulp.parallel('npm','fonts','css','js')));