const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port:8090,
    proxy: {
      '/': {
          //要访问的跨域的域名
          target: 'https://pc-index-static.cdn.bcebos.com',
      }
  }
  }
})
