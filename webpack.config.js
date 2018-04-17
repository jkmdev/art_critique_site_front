const path = require('path');

module.exports = {
  entry: "./src/app.module.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, "src")
  },
  module: {
       rules: [{
           test: /\.scss$/,
           use: [{
               loader: "sass-loader" // compiles Sass to CSS
           }]
       }]
   }
}
