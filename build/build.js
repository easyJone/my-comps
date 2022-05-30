const { run } = require('runjs')
const { getAssetsPath, chalkConsole, resolve, mapPkgList } = require('./utils')
// eslint-disable-next-line no-unused-vars
const rimraf = require('rimraf')
const argv = require('yargs').argv
const _ = require('lodash')
const { move, fileDisplay } = require('./fileHandle')

function build ({ input, output, dest } = {}, name, index, length, isSub = true) {
  chalkConsole.building(index + 1, length, name)
  const rimrafCl = isSub ? '' : `rimraf ${dest} &&`
  run(`${rimrafCl} vue-cli-service build --target lib --no-clean --formats commonjs --name ${output} --dest ${dest} ${input}`)
}

// 储存大类 name：[Basic]
const groups = []

if (argv.pkg) {
  // 手动指定打包
  groups.push(argv.pkg)
} else {
  // 获取大类的输出配置
  mapPkgList((name) => {
    groups.push(name)
  })
}

// 获取大类下的具体组件包
groups.forEach((name) => { // [Basic]
  const subList = []
  const pkgPath = `packages/${name}` // packages/Basic
  // 输出目录
  const destPath = getAssetsPath('./lib', pkgPath) // packages/Basic/lib
  subList[name] = {
    input: getAssetsPath('./index.js', pkgPath), // 入口: packages/Basic/index.js
    output: 'index', // 输出文件名
    dest: destPath // 输出文件目录地址: packages/Basic/lib
  }
  mapPkgList((subName) => { // ProTabs
    const subPkgPath = `packages/${name}/src/${subName}` // packages/Basic/src/ProTabs
    subList[`${name}_${subName}`] = { // [Basic_ProTabs: {}]
      input: getAssetsPath('./index.js', subPkgPath), // packages/Basic/src/ProTabs/index.js
      output: _.kebabCase(subName) + '/index', // 防止按需引入时和其他组件库冲突 slz-pro-tabs/index
      dest: destPath // packages/Basic/lib
    }
  }, `${name}/src`)
  Object.keys(subList).forEach((moduleName, index, arr) => {
    const { input, output, dest } = subList[moduleName]
    build({ input, output, dest }, moduleName, index, arr.length, !groups.includes(moduleName))
  })
})

groups.forEach((name) => { // [Basic]
  const dest = getAssetsPath('./lib', `packages/${name}`) // packages/Basic/lib
  fileDisplay(dest, (file) => {
    // 重命名common文件
    const reg = /.common/
    if (reg.test(file)) {
      file = `../${file}`
      move(resolve(file), resolve(file.replace(reg, '')))
    }
    // 重命名css文件
    if (/.css/.test(file)) {
      file = `../${file}`
      move(resolve(file), resolve(file.replace(/index/, 'style')))
    }
  })
})

chalkConsole.success()
