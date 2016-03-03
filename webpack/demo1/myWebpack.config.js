var path = require('path');

var projectRootPath = path.resolve(__dirname, '../');
var webpack = require('webpack');

var assetsPath = path.resolve(__dirname, './static/dist');
var CleanPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: {
    'main': [
      './server.js'
    ]
  },
  output: {
    path: assetsPath,
    // filename: '[name]-[chunkhash].js',
    filename: 'abc.js',
    // chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/dist/'
  },
  module: {
  },
  progress: true,
  target: 'node',
  resolve: {
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  },
  plugins: [
    new CleanPlugin([assetsPath], { root: projectRootPath })
    //,

    // css files from the extract-text-plugin loader
    // new ExtractTextPlugin('[name]-[chunkhash].css', {allChunks: true}),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   },
    //
    //   __CLIENT__: true,
    //   __SERVER__: false,
    //   __DEVELOPMENT__: false,
    //   __DEVTOOLS__: false
    // }),

    // ignore dev config
    // new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

    // optimizations
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin()
    // ,
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
};
