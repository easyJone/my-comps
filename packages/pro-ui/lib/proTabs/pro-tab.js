import { createNamespace } from '@/utils'
import { ChildrenMixin } from '@/mixins/relationMixin'
import { routeProps } from '@/utils/router'
import './style/pro-tab.scss'

const [createComponent, bem] = createNamespace('tab')
export default createComponent({
  mixins: [ChildrenMixin('tabs')], // inject父组件tabs，绑定与父组件的关联关系

  props: {
    ...routeProps, // url: 点击后跳转的链接地址; to: 点击后跳转的目标路由对象，同 vue-router 的 to 属性; replace: 是否在跳转时替换当前页面历史
    dot: Boolean, // 是否在标题右上角显示小红点
    name: [Number, String], // 标签名称，作为匹配v-model的标识符
    // @deprecated
    info: [Number, String], // 图标右上角徽标的内容（已废弃，请使用 badge 属性）
    badge: [Number, String],
    title: String, // 标题
    titleStyle: null, // 自定义标题样式
    titleClass: null, // 自定义标题类名
    disabled: Boolean // 是否禁用标签
  },

  data () {
    return {
      inited: false
    }
  },

  computed: {
    computedName () {
      return this.name ?? this.index // 空值合并
    },

    isActive () {
      const active = this.computedName === this.parent.currentName

      if (active) {
        this.inited = true
      }
      return active
    }
  },

  watch: {
    title () {
      this.parent.setLine()
      this.parent.scrollIntoView()
    },
    // 开启延迟渲染后，tab内容首次渲染触发rendered回调
    inited (val) {
      if (this.parent.lazyRender && val) {
        this.$nextTick(() => {
          this.parent.$emit('rendered', this.computedName, this.title)
        })
      }
    }
  },

  render (h) {
    const { slots, parent, isActive } = this
    const slotContent = slots() // 获取default slot

    if (!slotContent && !parent.animated) {
      return
    }

    const show = parent.scrollspy || isActive
    const shouldRender = this.inited || parent.scrollspy || !parent.lazyRender
    const Content = shouldRender ? slotContent : h()

    if (parent.animated) {
      return (
        <div
          class={bem('pane-wrapper', { inactive: !isActive })}
        >
          <div class={bem('pane')}>{Content}</div>
        </div>
      )
    }

    return (
      <div vShow={show} class={bem('pane')}>
        {Content}
      </div>
    )
  }
})
