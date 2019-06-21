const path = require('path');

module.exports = {
  mode: "development",

  devtool: "inline-source-map",

  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    filename: 'index.js'
  },

  optimization:{
    minimize: false,
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};
