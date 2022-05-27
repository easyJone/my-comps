import { createBEM } from './bem'
import { createComponent } from './create'

/**
 * 命名空间
 */
export const createNamespace = name => {
  const proName = 'pro-' + name
  return [createComponent(proName), createBEM(proName)]
}

export const inBrowser = typeof window !== 'undefined'

export function noop () { }

export function isDef (val) {
  return val !== undefined && val !== null
}

export function isPromise (val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

export function isFunction (val) {
  return typeof val === 'function'
}

export function isObject (val) {
  return val !== null && typeof val === 'object'
}

export function isNumeric (val) {
  return /^\d+(\.\d+)?$/.test(val)
}
