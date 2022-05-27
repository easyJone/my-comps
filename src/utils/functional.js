
const inheritKey = [
  'ref',
  'key',
  'style',
  'class',
  'attrs',
  'refInFor',
  'nativeOn',
  'directives',
  'staticClass',
  'staticStyle'
]

const mapInheritKey = { nativeOn: 'on' } // nativeOn仅用于组件，这里需替换为on用于元素

// 子组件根元素继承父组件中传递给子组件的各属性&事件
export function inherit (context, inheritListeners) {
  const result = inheritKey.reduce((obj, key) => {
    if (context.data[key]) {
      // 将组件所有nativeOn事件保存到on
      obj[mapInheritKey[key] || key] = context.data[key]
    }
    return obj
  }, {})

  // 上面继承了所有nativeOn事件，这里继续继承自定义事件
  if (inheritListeners) {
    result.on = result.on || {}
    Object.assign(result.on, context.data.on)
  }

  return result
}
