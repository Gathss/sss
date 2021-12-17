module.exports = {
  devServer: {
    proxy: {
      '/img': {
        target: 'https://www.baidu.com',
        // ws: true,
        changeOrigin: true
      }
      // '/api': {
      //   target: '<url>',
      //   ws: true,
      //   changeOrigin: true
      // },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
}
