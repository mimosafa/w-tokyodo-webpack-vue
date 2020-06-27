const path = require('path');
const dist = path.resolve(__dirname, 'dist');
const mode = process.env.NODE_ENV;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
        test: /\.vue$/,
        loader: 'vue-loader'
      },
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
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, 'src/css/core/variable/_color.scss'),
                path.resolve(__dirname, 'src/css/core/mixin/_mixin.scss')
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 10,
              name: 'img/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    open: true,
    contentBase: dist,
    watchContentBase: true,
    historyApiFallback: true
  }
};
