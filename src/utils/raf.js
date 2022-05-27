// requestAnimationFrame API
const root = window

let prev = Date.now()
const iRaf = root.requestAnimationFrame || fallback

export function raf (fn) {
  return iRaf.call(root, fn)
}

// 降级实现，消除时间差
function fallback (fn) {
  const curr = Date.now()
  const ms = Math.max(0, 16 - (curr - prev))
  const id = setTimeout(fn, ms)
  prev = curr + ms
  return id
}

const iCancel = root.cancelAnimationFrame || root.clearTimeout

export function cancelRaf (id) {
  iCancel.call(root, id)
}
