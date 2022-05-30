const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
    config.resolve.alias.set('@p', resolve('packages'))

    // 关闭利用空余带宽加载文件 提升首页速度
    config.plugins.delete('preload-desktop')
    config.plugins.delete('prefetch-desktop')
    config.plugins.delete('preload-mobile')
    config.plugins.delete('prefetch-mobile')

    config.module
      .rule('js')
      .include.add(path.join(process.cwd(), 'src'))
      .end()
    config.module
      .rule('js')
      .include
      .add(/packages/)
      .add(/src/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => {
        return options
      })
  }
  // configureWebpack: (config) => {
  //   config.externals = [
  //     'vue',
  //     'vue-create-api'
  //   ]
  // }
})
