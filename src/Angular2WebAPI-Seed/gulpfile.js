/// <binding BeforeBuild='default' />

var _ = require('lodash');
var gulp = require('gulp');

var js = [
    'node_modules/zone.js/dist/zone.min.js',
    'node_modules/systemjs/dist/system.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/es6-shim/es6-shim.min.js'
];

var map = [
    'node_modules/es6-shim/es6-shim.map',
    'node_modules/reflect-metadata/reflect.js.map',
    'node_modules/systemjs/dist/system.js.map'
];

var folders = [
    'node_modules/@angular/**/*.*',
    'node_modules/rxjs/**/*.*'
];

gulp.task('copy-js', function () {
    _.forEach(js, function (file, _) {
        gulp.src(file)
       .pipe(gulp.dest('./wwwroot/js'))
    });
});

gulp.task('copy-map', function () {
    _.forEach(map, function (file, _) {
        gulp.src(file)
        .pipe(gulp.dest('./wwwroot/js'))
    });
});

gulp.task('copy-folders', function () {
    _.forEach(folders, function (folder) {
        gulp.src(folder, { base: 'node_modules' })
            .pipe(gulp.dest('./wwwroot/js'))
    });
})

gulp.task('default', ['copy-js', 'copy-map', 'copy-folders']);