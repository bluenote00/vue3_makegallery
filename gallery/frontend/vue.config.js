module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8082',
        changeOrigin: true,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  }
}


// 경로가 /일때는 우회해서 설정하겠다.
// api라는 주소로 시작하면, 아래 target 주소로 우회하겠다.