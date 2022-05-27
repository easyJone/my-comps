import { isPromise, noop } from '.'

/**
 * 回调拦截
 * @param {function} interceptor -拦截函数
 * @param {function} done -回调
 * @param {array} args -拦截函数入参
 */
export function callInterceptor (options) {
  const { interceptor, args, done } = options

  if (interceptor) {
    const returnVal = interceptor(...args)

    if (isPromise(returnVal)) {
      returnVal
        .then(value => {
          value && done()
        })
        .catch(noop)
    } else if (returnVal) {
      done()
    }
  } else {
    done()
  }
}
