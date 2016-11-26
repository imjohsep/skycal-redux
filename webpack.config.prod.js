var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var StatsPlugin = require('stats-webpack-plugin')

module.exports = {
  entry: [
    path.join(__dirname, 'client/containers/skycal.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    // new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
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
      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        include: path.join(__dirname, 'client'),
        query: {
          'presets': ['es2015', 'stage-0', 'react']
        }
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
