var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      react: path.resolve('./node_modules/react')
    }
  },
  resolveLoader: {
    modules: [
        '/users/path/a/node_modules'
    ]
},
  devServer: {
    port: 3001
  },
  externals: {
    'react': 'commonjs react'
  }
}