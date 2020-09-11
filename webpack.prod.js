const path = require('path');

module.exports = {
	mode: 'production'
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};