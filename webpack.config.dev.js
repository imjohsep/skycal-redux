var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    'containers/skycal'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
      modulesDirectories: [
          'client/components',
          'client/reducers',
          'client',
          'node_modules'
      ]
  },
  module: {
    loaders: [
      // JS
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client')
      },
      // CSS
      { 
        test: /\.styl$/, 
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader!stylus-loader'
      },
      // SASS
      {
        test: /\.sass/,
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      }
    ]
  }
};
