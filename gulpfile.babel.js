import gulp      from 'gulp';
import recursive from 'recursive-readdir';
// -- /load plugins

const config = {
  gulp: {
    paths: {
      tasksDir: `./gulp/tasks`,
    },
  },
};
// -- /config

/**
 * `gulp recursice-require-task`
 */
gulp.task('recursive-require-task', (callback) => {
  recursive(config.gulp.paths.tasksDir, (err, files) => {
    files.forEach((path) => {
      if (!path.match(/\.js$/)) {
        return;
      }

      require(`./${path.replace('\\', '/')}`)(gulp);
    });
    callback();
  });
});
