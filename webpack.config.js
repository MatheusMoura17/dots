var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var path = require('path');

const configs = {
  development: {
    outputPath: 'dist-dev'
  },
  testing: {
    outputPath: 'dist-testing'
  },
  production: {
    outputPath: 'dist'
  },
};

module.exports = function (env) {

  var environment =
    env.production && 'production' ||
    env.development && 'development' ||
    env.testing && 'testing';

  var config = configs[environment];


  var plugins = [];

  if (env.development) {

    plugins.push(new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './source/index.html',
      chunk: ['layout', 'app'],
      inject: 'body'
    }));

    plugins.push(new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: [config.outputPath] }
    }));
  }

  if (env.production) {
    plugins.push(new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './source/index.html',
      chunk: ['app', 'layout'],
      inject: 'body'
    }));
  }

  if (env.testing) {
    plugins.push(new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './test/template.html',
      chunk: ['test'],
      inject: 'body'
    }));
  }

  return {
    entry: {
      'app': './source/js/index.js',
      'layout': './source/css/layout.css'
    },
    output: {
      path: path.resolve(__dirname, config.outputPath)
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: plugins
  }
};