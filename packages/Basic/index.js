// 引入所有组件
import ProTabs from './src/ProTabs'

const components = {
  ProTabs // 标签栏组件
}

const install = Vue => {
  Object.values(components).forEach(comp => {
    comp.install(Vue)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  ProTabs
}

export default install
