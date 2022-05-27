import { sortChildren } from '@/utils/vnodes'

export function ChildrenMixin (parent, options = {}) {
  const indexKey = options.indexKey || 'index'

  return {
    inject: {
      [parent]: {
        default: null
      }
    },

    computed: {
      parent () { // 定义父组件
        return this.disableBindRelation ? null : this[parent]
      },
      // 返回在父组件中的次序
      [indexKey] () {
        this.bindRelation()
        return this.parent ? this.parent.children.indexOf(this) : null
      }
    },

    watch: {
      disableBindRelation (val) {
        !val && this.bindRelation()
      }
    },

    mounted () {
      this.bindRelation()
    },

    beforeDestroy () {
      // 销毁前更新parent.children
      if (this.parent) {
        this.parent.children = this.parent.children.filter(item => item !== this)
      }
    },

    methods: {
      // 关联父组件
      bindRelation () {
        // 无父组件 || 已关联 跳过
        if (!this.parent || this.parent.children.indexOf(this) !== -1) return

        const children = [...this.parent.children, this]
        // 各子组件关联时机不定，需按虚拟dom顺序重新排序
        sortChildren(children, this.parent)

        this.parent.children = children
      }
    }
  }
}

export function ParentMixin (parent) {
  return {
    provide () {
      return {
        [parent]: this
      }
    },

    data () {
      return {
        children: []
      }
    }
  }
}
