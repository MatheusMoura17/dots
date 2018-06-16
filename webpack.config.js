var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: './public/index.html' });

module.exports = {
  mode: 'production',
  entry: './source/index.js',
  output: {
    filename: './public/assets/js/app.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        use:{
          loader: 'babel-loader',
          query: { presets: ['es2015', 'stage-0'] }
        }
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};