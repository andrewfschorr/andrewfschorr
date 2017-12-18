// forked pretty much ENTIRELY from https://github.com/VD39/es6-webpack-boilerplate/
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENTRY = path.join(__dirname, '/src');
const OUTPUT = path.join(__dirname, '/public');
const HOST = 'localhost';
const PORT = 9000;

const config = {
  entry: {
    app: ENTRY
  },
  output: {
    path: OUTPUT,
    filename: 'assets/js/bundle.js'
  },
  devServer: {
    contentBase: OUTPUT,
    host: HOST,
    port: PORT
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=1000000'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('assets/css/styles.css'),
  ],
  watch: false
};

module.exports = config;
