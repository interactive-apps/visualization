const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const packageDetails = require('./package.json');

const libraryName = packageDetails.name;

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  entry: __dirname + '/lib/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    filename: libraryName + '.min.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'lib/package.json', to: '' },
      { from: 'lib/*.md', to: '', flatten: true },
      { from: 'LICENSE', to: '' }
    ])
  ],
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    },
    Fn: {
      commonjs: 'Fn',
      commonjs2: 'Fn',
      amd: 'Fn',
      root: 'Fn'
    }
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /(\.jsx|\.js)$/,
        use: 'webpack-strip-log-loader'
      }
    ]
  }
};
