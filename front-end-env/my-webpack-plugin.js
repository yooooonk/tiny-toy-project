class MyWebpackPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('My Plugin', (stats) => {
      console.log('MyPlugin: done');
    });

    compiler.plugin('emit', (compilation, callback) => {
      const source = compilation.assets['main.js'].source();
      console.log(source);
      callback();
    });
  }
}

module.exports = MyWebpackPlugin;
