// vue.config.js
const vueConfig = {
  runtimeCompiler: true,
  devServer: {
    port: 88,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_BASE_URL,
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 需要rewrite的,
        }
      }
    }
  },
  // lintOnSave: false
}

module.exports = vueConfig
