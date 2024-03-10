const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.
// check activity 24 for reference HTMLWebpackPlugin
// check activity 10 fro reference mini-css-extract-plugin and babel-loader
// check activity 19 for injectMinifest example
// check https://www.npmjs.com/package/webpack-pwa-manifest for WebpackPwaManifest


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
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Webpack Plugin',
      }),
      //add MiniCssExtractPlugin
      // new miniCssExtractPlugin(),
      //add InjectManifest
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),
      //add WebpackPwaManifest
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Jate PWA',
        short_name: 'JPWA',
        description: 'A simple offline text editor PWA',
        background_color: '#01579b',
        theme_color: '#01579b',
        start_url: '/',
        publicPath: '/',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],
    module: {
      rules: [
        // add css-loader
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        // add babel-loader
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [ '@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
