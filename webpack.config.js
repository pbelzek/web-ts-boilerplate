const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;

const port = process.env.PORT || 3000;
const publicPath = process.env.PUBLIC_URL || "/";


module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [isProduction ? MiniCssExtractPlugin.loader : "style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(avif|jpg|png|svg|webp|woff|woff2)$/,
        type: "asset/resource",
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      templateParameters: {
        publicPath
      }
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist",
    port,
    hot: isDevelopment,
    historyApiFallback: true
  }
}
