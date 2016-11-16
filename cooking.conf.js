var path = require('path');
var cooking = require('cooking');
var build = require('./build');

var isProd = process.env.NODE_ENV === 'production';

cooking.set({
  entry: {
    home:"./src/pages/home/index.js",
    common: ['./src/common/common.js'],
  },
  dist: 'D:/phpStudy/WWW/work/fisDemo/dist/',
  template: [{
    filename:"home.html",
    template:"./src/pages/home/index.tpl"
  }],
  devServer: {
    port: 8081,
    publicPath: '/',
  },
  clean: true,
  hash: true,
  sourceMap: false,
  chunk: [
    {
      'name': 'common',
      'filename': 'common.js',
      'minChunks': 3,
      'chunks': ['common','home']
    }

  ],
  postcss: [],
  publicPath: '/dist/',
  extractCSS: 'static/[name].[contenthash:7].css',
  alias: {
    'src': path.join(__dirname, 'src')
  },
  extends: ['vue2', 'buble', 'autoprefixer'],
  externals: build.externals(),
  assetsPath: 'statics',
  urlLoaderLimit: 10000,
  devServer: {
    port: 8081,
    hostname: 'localhost',
    publicPath:"/",
    proxy: {
      '*': {
        target: 'http://m.huizuche.com/',
        secure: false
      }
    }
  },
  devtool: 'source-map'
});

cooking.add('output.filename', 'static/[name].[hash:7].js');
cooking.add('output.chunkFilename', 'chunks/[name]-[chunkhash:8].js');
module.exports = cooking.resolve();
