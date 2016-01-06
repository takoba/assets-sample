import gulp      from 'gulp';
import recursive from 'recursive-readdir';
// -- /load plugins

import config from './gulp/config';
// -- /config

/**
 * `gulp recursice-require-task`
 */
gulp.task('recursive-require-task', (callback) => {
  recursive(config.paths.gulp.tasksDir, (err, files) => {
    files.forEach((path) => {
      if (!path.match(/\.js$/)) {
        return;
      }

      require(`./${path.replace('\\', '/')}`)(gulp, config);
    });
    callback();
  });
});

/**
 * `gulp lint:js`
 */
gulp.task('lint:js', ['recursive-require-task'], () => {
  gulp.start(['lint:js']);
});
