// 是否从当前路由导航到当前路由
function isRedundantNavigation (err) {
  return (
    err.name === 'NavigationDuplicated' ||
    // 兼容 vue-router@3.3
    (err.message && err.message.indexOf('redundant navigation') !== -1)
  )
}

// 兼容vue-router
export function route (router, config) {
  const { to, url, replace } = config
  if (to && router) {
    const promise = router[replace ? 'replace' : 'push'](to)

    if (promise && promise.catch) {
      promise.catch((err) => {
        if (err && !isRedundantNavigation(err)) {
          throw err
        }
      })
    }
  } else if (url) {
    replace ? location.replace(url) : (location.href = url)
  }
}

// item组件prop
export const routeProps = {
  url: String,
  replace: Boolean,
  to: [String, Object]
}
