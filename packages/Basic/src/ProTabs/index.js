import ProTabs from './src/pro-tabs'
import ProTab from './src/pro-tab'
import { camelize } from '@/utils/format'

ProTabs.install = function (Vue) {
  Vue.component(ProTabs.name, ProTabs)
  Vue.component(camelize(`-${ProTabs.name}`), ProTabs)
  Vue.component(ProTab.name, ProTab)
  Vue.component(camelize(`-${ProTab.name}`), ProTab)
}
ProTabs.Item = ProTab

export default ProTabs
