const webpack = require('webpack');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: "./src/main.js",
  
  output: {
    filename: "bundle.js",
    path: path.resolve("dist")
  },

  watchOptions: {
    ignored: "node_modules"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/'
          }
        }
      }     
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  devServer: {
    contentBase: [path.join(__dirname, './dist')],
    clientLogLevel: 'none',
    hot: true
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].bundle.css"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
            autoprefixer()
        ]
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};