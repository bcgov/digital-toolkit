const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }, {
      test: /\.(eot|svg|ttf|woff|woff2|png)$/, // fonts and images used in SCSS
      use: 'file-loader'
    }]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')]
};
