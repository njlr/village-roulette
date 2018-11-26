const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'production', 
  output: {
    path: __dirname,
    filename: 'bundle.js'
  }, 
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
