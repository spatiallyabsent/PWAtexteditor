const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.
// check activity 24 for reference HTMLWebpackPlugin
// check activity 10 fro reference mini-css-extract-plugin and babel-loader


module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      //add HTMLWebpackPlugin
      //add WebpackPwaManifest
      //add InjectManifest
      
    ],

    module: {
      rules: [
        // add mini-css-extract-plugin
        // add css-loader
        // add babel-loader
        
      ],
    },
  };
};
