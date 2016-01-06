import jscs from 'gulp-jscs';
import path from 'path';
// -- /load plugins

export default (gulp, config) => {

  gulp.task('lint:js', () => {
    return gulp.src([
        `${path.relative('.', config.paths.src)}/**/*.js`,
        `${path.relative('.', config.paths.gulp.tasksDir)}/**/*.js`,
        './gulpfile.babel.js',
      ])
      .pipe(jscs({
        configPath: config.paths.jscs.configFile,
      }))
      .pipe(jscs.reporter())
      .pipe(jscs.reporter('fail'))
      ;
  });

};
