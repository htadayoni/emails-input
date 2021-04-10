const common = require('./webpack/paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: common.entryPath,
  output: {
    filename: 'bundle.js',
    path: common.outputPath,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['url-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Demo Email Input',
      filename: common.demoPath,
      style: common.templateStylePath,
      inject: false,
      template: common.templatePath,
    }),
  ],
};
