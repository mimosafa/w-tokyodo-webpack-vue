const path = require('path');
const dist = path.resolve(__dirname, 'dist');
const mode = process.env.NODE_ENV;

module.exports = {
  mode: mode,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: dist
  },
  devServer: {
    open: true,
    contentBase: dist,
    watchContentBase: true
  }
};
