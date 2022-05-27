function flattenVNodes (vnodes) {
  const result = []

  function traverse (vnodes) {
    vnodes.forEach((vnode) => {
      result.push(vnode)

      if (vnode.componentInstance) {
        // 扁平化当前组件内部子组件节点：index组件内引用的Header和Footer组件
        traverse(vnode.componentInstance.$children.map((item) => item.$vnode))
      }

      if (vnode.children) {
        // 当前组件有父子组件关联关系混入：relationMixin
        traverse(vnode.children)
      }
    })
  }

  traverse(vnodes)
  return result
}

// 根据虚拟dom顺序进行排序
export function sortChildren (children, parent) {
  const { componentOptions } = parent.$vnode
  if (!componentOptions || !componentOptions.children) return
  // 扁平化vnode外部子组件(Tab组件)节点：<Tabs><Tab></Tab></Tabs>
  const vnodes = flattenVNodes(componentOptions.children)
  children.sort((a, b) => vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode))
}
