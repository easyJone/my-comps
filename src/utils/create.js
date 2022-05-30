import { isFunction } from '.'
// import { camelize } from './format'
import { SlotsMixin } from '@/mixins/slotsMixin'

// 统一slots和scopedSlots
export function unifySlots (context) {
  const scopedSlots = context.scopedSlots || context.data.scopedSlots || {} // (2.6.0+)作用域插槽对象，低版本vue: data.scopedSlots
  const slots = context.slots() // 返回了包含所有插槽的对象

  Object.keys(slots).forEach((key) => {
    if (!scopedSlots[key]) {
      scopedSlots[key] = () => slots[key] // scopedSlots以函数形式暴露普通插槽（兼容低版本）
    }
  })

  return scopedSlots
}

// 函数转化为函数式组件
function transformFunctionComponent (pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: (h, context) =>
      pure(h, context.props, unifySlots(context), context) // context.props: 所有prop的对象
  }
}

// 全局注册：优先调用组件的install
// function install (Vue) {
//   const { name } = this
//   Vue.component(name, this)
//   Vue.component(camelize(`-${name}`), this)
// }

// 预设组件处理，混入获取slot兼容写法，定义组件install方法，这里的name为pro-xxx
export function createComponent (name) {
  return function (sfc) {
    if (isFunction(sfc)) {
      sfc = transformFunctionComponent(sfc) // 函数转化为函数式组件
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || []
      sfc.mixins.push(SlotsMixin)
    }

    sfc.name = name

    return sfc
  }
}
