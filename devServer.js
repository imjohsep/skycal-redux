var path = require('path')
var express = require('express')
var webpack = require('webpack')
var webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.dev')
var dbConfig = require('./config')
var mongoose = require('mongoose')

var app = express();
require('./router')(app);

/* Mongo */
mongoose.connect(dbConfig.database)
mongoose.connection.on('error', function () {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?')
})

/* Webpack Middleware */
const compiler = webpack(config)
const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  })

app.use(middleware)
app.use(webpackHotMiddleware(compiler))

app.get('*', function(req, res) {
  // res.sendFile(path.join(__dirname, 'dist/index.html'));
 res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')))
 res.end()
})

app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});
