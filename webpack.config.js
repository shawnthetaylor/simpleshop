const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './public/js/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss?sourceMap=inline'
        ]
      }
    ]
  }
}
