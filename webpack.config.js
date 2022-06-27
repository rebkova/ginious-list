const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  entry: [
    './src/index.tsx',
    'react-hot-loader/patch',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          // 'style-loader', // injects CSS into the DOM
          'css-module-typecript-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // nr of loaders applied before CSS modules and the @import rule
              modules: true, // enables CSS modules
            },
          },

          // 'sass-loader',
          // 'css-module-typecript-loader',
        ],
      },
    ]
  },
  devServer: {
    'static': {
      directory: './dist'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(), // plugin to delete build 'dist' folder after every successful rebuild
  ],
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.css',
      '.scss',
    ]
  }
};

module.exports = config;