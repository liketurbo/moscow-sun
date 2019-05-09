const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    app: path.join(__dirname, 'src')
  },
  output: {
    filename: '[contenthash].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [new HtmlWebpackPlugin()]
};

module.exports = config;
