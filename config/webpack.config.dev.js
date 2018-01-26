var merge = require('webpack-merge')
var base = require('./webpack.config.base')
var path = require('path')

var outputFile = 'vue-object-fit'
var globalName = 'VueObjectFit'

module.exports = merge(base, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: outputFile + '.common.js',
    library: globalName,
    libraryTarget: 'umd',
  },
  devtool: 'eval-source-map',
})