var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    
    './client/containers/skycal'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': 'production'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
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
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
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
