const path = require('path');
const webpack = require('webpack');


module.exports = {
  debug: true,
  devtool: 'cheap-module-inline-source-map',

  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      './src/js/index.js',
    ],
  },

  output: {
    path: path.join(__dirname, 'build/'),
    publicPath: 'static/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },

  module: {
    preLoaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint' },
    ],
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.json$/, exclude: /node_modules/, loader: 'json' },
    ],
  },

  resolve: {
    root: path.join(__dirname, 'scripts'),
    extensions: ['', '.js', '.jsx', '.json'],
  },

  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      Promise: 'bluebird',
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
  ],

  eslint: {
    configFile: path.join(__dirname, '.eslintrc'),
  },
};
