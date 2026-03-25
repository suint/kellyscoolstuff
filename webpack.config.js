const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackFavicons = require('webpack-favicons');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // This enables production mode, which minifies the JS and CSS files for fast loading times:
  mode: "production",

  // Define entry file (which loads every other file):
  entry: "./content/index.js",

  // Define output file/directory:
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
    assetModuleFilename: "assets/[path][name][ext]", // Preserve original file paths and file names for resources (images, fonts, etc.)
  },

  module: {
    rules: [
      // Rule for .css files:
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, // extracts css into a file
          "css-loader", // necessary to load css
        ],
      },
      // Rule for .scss files:
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, // extracts css into a file
          "css-loader", // necessary to load css
          "sass-loader", // turns scss into css
        ],
      },
    ],
  },

  plugins: [
    // define name for generated css files:
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new WebpackFavicons({
      src: 'content/assets/favicon.ico',
      path: 'img',
      background: '#000',
      theme_color: '#000',
      icons: {
        favicons: true
      }
    })
    ,
    // Copy static images from content/images into public/images
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'content/images'), to: 'images' }
      ]
    })
  ],

  // Generate source maps for easier debugging:
  devtool: "source-map",
};