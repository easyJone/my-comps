import { raf } from './raf'

function isWindow (val) {
  return val === window
}

/**
 * 获取最近的滚动容器 || root
 */
export function getScroller (el, root = window) {
  const overflowScrollReg = /scroll|auto/i
  let node = el

  while (
    node &&
    node.tagName !== 'HTML' &&
    node.tagName !== 'BODY' &&
    node.nodeType === 1 &&
    node !== root
  ) {
    const { overflowY } = window.getComputedStyle(node)
    if (overflowScrollReg.test(overflowY)) {
      return node
    }
    node = node.parentNode
  }
  return root
}

// 元素到视窗顶部距离 + 容器scrollTop/页面scrollTop
export function getElementTop (el, scroller) {
  if (isWindow(el)) return 0
  const scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop()
  return el.getBoundingClientRect().top + scrollTop
}

export function getScrollTop (el) {
  const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset
  // iOS滚动回弹兼容
  return Math.max(top, 0)
}

export function getRootScrollTop () {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  )
}

export function getVisibleHeight (el) {
  if (isWindow(el)) return el.innerHeight
  return el.getBoundingClientRect().height
}

export function scrollLeftTo (scroller, to, duration) {
  let count = 0
  const from = scroller.scrollLeft
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16) // 按1s 60帧算，1帧16毫秒，总帧数
  // raf动画
  function animate () {
    scroller.scrollLeft += (to - from) / frames

    if (++count < frames) {
      raf(animate)
    }
  }

  animate()
}

export function scrollTopTo (scroller, to, duration, callback) {
  let current = getScrollTop(scroller)

  const isDown = current < to // 向上滚动展示下部内容
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16) // 按1s 60帧算，1帧16毫秒，共frames帧
  const step = (to - current) / frames // 每帧步长

  function animate () {
    current += step
    // 临界点
    if ((isDown && current > to) || (!isDown && current < to)) {
      current = to
    }

    setScrollTop(scroller, current)
    // 循环/结束
    if ((isDown && current < to) || (!isDown && current > to)) {
      raf(animate)
    } else if (callback) {
      raf(callback)
    }
  }

  animate()
}

// 设置scrollTop
export function setScrollTop (el, value) {
  if ('scrollTop' in el) {
    el.scrollTop = value
  } else {
    el.scrollTo(el.scrollX, value)
  }
}

// 元素到视窗顶部的距离
export function getVisibleTop (el) {
  if (isWindow(el)) {
    return 0
  }
  return el.getBoundingClientRect().top
}

export function setRootScrollTop (value) {
  setScrollTop(window, value)
  setScrollTop(document.body, value)
}
