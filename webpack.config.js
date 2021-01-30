const pages = require('./pages');
const camelCase = require('lodash/camelCase');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ts = require('typescript');

const tsFiles = {};

pages.forEach(page => {
  tsFiles[camelCase(page)] = `./src/${page}/${page}.ts`;
});

module.exports = {
  entry: {
    main: './src/index.ts',
    ...tsFiles,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [new CleanWebpackPlugin()],
};
