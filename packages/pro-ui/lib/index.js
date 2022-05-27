// 引入所有组件
import ProTabs from './proTabs/pro-tabs'
import ProTab from './proTabs/pro-tab'

const components = [
  ProTabs, // 标签栏组件
  ProTab // 标签栏子项组件
]

const install = Vue => {
  components.forEach(item => {
    if (item.install) {
      Vue.use(item)
    } else if (item.name) {
      // eslint-disable-next-line
      console.log('no install, register name')
      Vue.component(item.name, item)
    }
  })
}

// 单独引用
export {
  ProTabs,
  ProTab
}

export default install // 全局use调用
