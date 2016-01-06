import path from 'path';
// -- /load plugins

export default {
  paths: {
    src: './resources/assets/js',
    dst: './assets/js',
    gulp: {
      tasksDir: `./gulp/tasks`,
    },
    jscs: {
      configFile: './.jscsrc',
    }
  },
};
