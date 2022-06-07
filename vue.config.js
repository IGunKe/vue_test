const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // devServer: {//代理服务，实现跨域请求，但是只可以配一个
  //   proxy: 'http://localhost:5000'
  // }
  devServer: {
    '/api' : {
      target: 'url',
      //ws: true,//websocket支持
      //changeOrigin: true//用于是否给服务器显示真实地址
      pathRewirte: {
        '/api': ''//重写地址
      },
      
    }
  }
});
