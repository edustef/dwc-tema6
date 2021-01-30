const pages = require('./pages');
const camelCase = require('lodash/camelCase');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config');
const { merge } = require('webpack-merge');

const htmlPages = pages.map(page => {
  return new HtmlWebpackPlugin({
    template: `./src/${page}/${page}.html`,
    filename: `${page}.html`,
    chunks: [camelCase(page)],
  });
});

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', chunks: ['main'] }),
  ].concat(htmlPages),
});
