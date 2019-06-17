module.exports = {
  entry: './frontend/components/app.jsx',
  output: {
    path: __dirname + '/frontend',
    filename: './bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: (/\.js?$/, /\.jsx?$/),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        exclude: /(node_modules)/
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx' ]
  },
  node: {
    console: true,
    fs: 'empty',
    tls: 'empty',
    net: 'empty'
  },
  mode: 'production'
};
