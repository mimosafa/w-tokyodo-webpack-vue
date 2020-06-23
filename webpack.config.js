const path = require('path');
const dist = path.resolve(__dirname, 'dist');
const mode = process.env.NODE_ENV;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: mode,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: dist
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                fiber: require('fibers')
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  devServer: {
    open: true,
    contentBase: dist,
    watchContentBase: true
  }
};
