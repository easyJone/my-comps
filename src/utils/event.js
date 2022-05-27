// 这里检验当前环境的addEventListener是否支持passive属性,监听test-passive时，读取opts的passive属性，触发get, supportsPassive设置为true，addEventListener中第三个参数布尔值表示触发回调的阶段：true捕获，默认false为冒泡；也可以用obj来表示，capture表示触发阶段，passive: true是告诉浏览器监听器内部不会调用preventDefault来阻止默认行为，以便浏览器据此优化页面性能（滑动），目前passive仅影响mousewheel/touch相关事件，如果passive设置为true但是又调用了preventDefault会有警告⚠️但浏览器不会执行 preventDefault
// eslint-disable-next-line import/no-mutable-exports
export let supportsPassive = false

try {
  const opts = {}
  Object.defineProperty(opts, 'passive', {
    // eslint-disable-next-line getter-return
    get () {
      /* istanbul ignore next */
      supportsPassive = true
    }
  })
  window.addEventListener('test-passive', null, opts)
  // eslint-disable-next-line no-empty
} catch (e) { }

/**
 * 绑定事件，默认冒泡
 */
export function on (target, event, handler, passive = false) {
  target.addEventListener(
    event,
    handler,
    supportsPassive ? { capture: false, passive } : false
  )
}

/**
 * 解绑事件
 */
export function off (target, event, handler) {
  target.removeEventListener(event, handler)
}
