const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/stylesheets/all.scss";
        `
      }
    }
  }
}
