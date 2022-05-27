/**
 * bem模式（block,element,modifier）
 * -中划线连接单词，可以是块元素也可以是子元素
 * __ 双下划线 连接块与块的子元素
 * -- 双中划线 描述一个块或者块的子元素的一种状态
 * is is-关键字结合使用时，指示模块特定的状态类；一般用于js控制样式时,css命名用is-开头 例如 is-open、is-disabled
 */

export const createBEM = name => {
  return function (el, mods) {
    let resultEl = el
    let resultMods = mods
    if (el && typeof el !== 'string') {
      resultMods = el
      resultEl = ''
    }

    resultEl = resultEl ? `${name}__${resultEl}` : name

    return `${resultEl}${gen(resultEl, resultMods)}`
  }
}

export const gen = (name, mods) => {
  if (!mods) return ''

  if (typeof mods === 'string') return ` ${name}--${mods}`

  if (Array.isArray(mods)) return mods.reduce((ret, item) => ret + gen(name, item), '')

  return Object.keys(mods).reduce(
    (ret, key) => ret + (mods[key] ? gen(name, key) : ''),
    ''
  )
}
