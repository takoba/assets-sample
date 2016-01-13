import jscs from 'gulp-jscs';
// -- /load plugins

export default (gulp, config) => {

  gulp.task('lint:js', () => {
    return gulp.src([
        `${config.paths.src}/**/*.js`,
        `${config.paths.gulp.tasksDir}/**/*.js`,
        './gulpfile*.js',
      ])
      .pipe(jscs({
        configPath: config.paths.jscs.configFile,
      }))
      .pipe(jscs.reporter())
      .pipe(jscs.reporter('fail'))
      ;
  });

};
