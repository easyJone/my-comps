const path = require('path')
const fs = require('fs')
const chalk = require('chalk')

const PACKAGE_PATH = path.resolve(__dirname, '../packages')

module.exports = {
  getAssetsPath (_path = '.', outputPath = 'dist') {
    return path.posix.join(outputPath, _path)
  },
  resolve (_path) {
    return path.resolve(__dirname, _path)
  },
  isProduct: ['production', 'prod'].includes(process.env.NODE_ENV),
  env: process.env.NODE_ENV,
  chalkConsole: {
    success: () => {
      console.log(chalk.green('========================================='))
      console.log(chalk.green('========打包成功(build success)!========='))
      console.log(chalk.green('========================================='))
    },
    building: (index, total, name) => {
      console.log(chalk.blue(`正在打包第${index}/${total}个文件 ${name} ...`))
    }
  },
  fsExistsSync: (_path) => {
    try {
      fs.accessSync(_path, fs.F_OK)
    } catch (e) {
      return false
    }
    return true
  },
  mapPkgList: (callback, subPath) => {
    let curPath = PACKAGE_PATH // packages
    if (subPath) curPath = path.resolve(PACKAGE_PATH, subPath) // packages/Basic/src
    const packageDir = fs.readdirSync(curPath)
    packageDir.forEach(function (subDir) {
      if (fs.statSync(curPath + '/' + subDir).isDirectory()) {
        callback(subDir)
      }
    })
  }
}
