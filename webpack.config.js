var path = require('path')
var webpack = require('webpack')
var proxy = require('http-proxy-middleware')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = {
  mode: "development",
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=1024'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './index.html'),
      inject: 'body'
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 8080,
    host: 'localhost',
    proxy: {
      '/api': { // api表示当前项目请求的key
        target: 'https://news-at.zhihu.com/api/4/', // 代理服务器路径
        pathRewrite: {
          '^/api': '/'
        }, // 重写路径
        changeOrigin: true
      }
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}


if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}