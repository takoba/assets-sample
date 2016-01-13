import path from 'path';
import webpack from 'webpack';
import BowerWebpackPlugin from 'bower-webpack-plugin';
// -- /load plugins

const SRC_DIR = './resources/assets/js';
const DST_DIR = './assets/js';
// -- /difine constants

export default {
  paths: {
    src: SRC_DIR,
    dst: DST_DIR,
    gulp: {
      tasksDir: `./gulp/tasks`,
    },
    jscs: {
      configFile: './.jscsrc',
    }
  },
  webpack: {
    entry: {
    },
    output: {
      path    : `${__dirname}/${path.normalize(DST_DIR)}`,
      filename: '[name].js',
    },
    resolve: {
      root: [
        path.join(__dirname, 'bower_components'),
      ],
      extensions: [
        '',
        '.js',
      ],
    },
    module: {
      loaders: [
        {
          test   : /\.js$/,
          loaders: ['babel'],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new BowerWebpackPlugin(),
    ],
  },
};
