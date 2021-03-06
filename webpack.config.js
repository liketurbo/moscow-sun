const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const EmojiFaviconPlugin = require('emoji-favicon-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DEV_ENV = 'DEV_ENV';
const PROD_ENV = 'PROD_ENV';

const commonConfig = env => ({
  entry: {
    app: path.join(__dirname, 'src')
  },
  output: {
    filename: '[contenthash].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: env === DEV_ENV
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: env === DEV_ENV,
              data: `@import ${path.join(
                __dirname,
                'src',
                'assets',
                'styles',
                'variables.sass'
              )}`
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat'
    },
    mainFiles: ['index']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Moscow Sun - Get time of sunrise and sunset',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      minify:
        env === PROD_ENV
          ? {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true
            }
          : false
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new MiniCssExtractPlugin({
      filename: '[contenthash].css'
    }),
    new EmojiFaviconPlugin('🌇')
  ]
});

const productionConfig = {
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }]
        }
      }),
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'src', 'assets', 'seo')
      }
    ])
  ]
};

const devServer = {
  devServer: {
    port: 3000
  }
};

module.exports = (_, { mode }) => {
  if (mode === 'development') {
    return merge(commonConfig(DEV_ENV), devServer);
  }
  return merge(commonConfig(PROD_ENV), productionConfig);
};
