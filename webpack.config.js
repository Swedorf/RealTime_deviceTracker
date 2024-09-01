// webpack.config.js

const path = require('path');

module.exports = {
  entry: './public/client.js', // Adjust based on your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Adjust based on your desired output directory
  },
  mode: 'development', // Change to 'production' for production builds
};
