const path = require('path');

module.exports = {
	mode: 'development'
	entry: './src/app.js',
  output: {
    filename: 'main-dev.js',
    path: path.resolve(__dirname, 'dist'),
  },
};