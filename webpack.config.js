const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/index.js', // Your entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Add other loaders (CSS, images, etc.) here if needed
    ],
  },
  plugins: [
    new Dotenv({
      path: './.env', // Path to the .env file
      systemvars: true, // Load system environment variables too
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
