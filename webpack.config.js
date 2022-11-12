const fs = require('node:fs')
const path = require('node:path')
const dotenv = require('dotenv')
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ENVObj = dotenv.parse(fs.readFileSync(process.env.ENV_FILE))

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[chunkhash:6].js',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@src': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|sass|scss)$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } }
        ]
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new DefinePlugin({
      ENV: JSON.stringify(ENVObj)
    })
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true
    // proxy: {
    //   'http://172.40.13.103:8095': {
    //     target: 'http://172.40.13.103:8095'
    //   }
    // }
  }
}
