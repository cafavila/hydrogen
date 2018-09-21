const path = require('path')

module.exports =
{
  entry:
  {
    main: path.resolve(__dirname, './src/index.js'),
/*    default: path.resolve(__dirname, './src/default.js'),*/
    vendor: ['react', 'redux', 'react-dom', 'react-redux']
  },
  output:
  {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: 'dist'
  },
  devServer:
  {
    port: 3001,
    contentBase: 'public'
  },
  module:
  {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: 'file-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }]
  },
  optimization:
  {
     splitChunks:
     {
        cacheGroups:
        {
           commons:
           {
             name: 'vendors',
             filename: '[name].js',
             minChunks: Infinity
           }
         }
      }
  },
  mode: 'development',
  devtool: 'eval-source-map'
}
