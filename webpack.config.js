const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: {
    app: path.join(__dirname, 'src')
  },
  output: {
    filename: '[contenthash].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader' }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CleanWebpackPlugin()
  ]
};

module.exports = config;
