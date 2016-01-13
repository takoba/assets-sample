import webpack from 'webpack-stream';
import walkdir from 'walkdir';
import path    from 'path';
import fs      from 'fs';
// -- /load plugins

export default (gulp, config) => {

  const SRC_PATHS = [
    config.paths.src,
  ];

  let filepaths = [];
  for (let srcPath of SRC_PATHS) {
    walkdir.sync(srcPath, (filepath, stat) => {
      // node_modules/ が存在する場合は対象外
      if (filepath.match(/node_modules/))      return;
      // ディレクトリは対象外
      if (fs.statSync(filepath).isDirectory()) return;
      // 拡張子が"js"以外は対象外
      if (!filepath.match(/\.js$/))            return;

      filepaths.push(filepath);
    });
  }
  // -- /generate target filepath list

  for (let filepath of filepaths) {
    let entryKey      = path.relative(config.paths.src, filepath).replace(/\.js$/, '');
    let entryFilepath = `./${path.relative('.', filepath)}`;
    config.webpack.entry[entryKey] = entryFilepath;
  }
  // -- /add config params for webpack-stream

  gulp.task('webpack', () => {
    let src = SRC_PATHS.map((path) => {
      return `${path}/**/*.js`;
    });
    return gulp.src(src)
      .pipe(webpack(config.webpack))
      .pipe(gulp.dest(config.paths.dst))
      ;
  });

};
