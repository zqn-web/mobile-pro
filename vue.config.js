module.exports = {
    devServer: {
      open: true,
      host: 'localhost',
      port: 8080,
      https: false,
      hotOnly: false,
      proxy: {
        // 配置跨域
        '/api': {
          // target: 'https://eleme1-gorge-61965.herokuapp.com/api/',
          target: 'http://localhost:8080/',
          
          ws: true,
          changOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      },
    }
  };
  