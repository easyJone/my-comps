import Info from './Info'
import { createNamespace, isDef } from '@/utils'
const [createComponent, bem] = createNamespace('tab')

export default createComponent({
  props: {
    dot: Boolean, // 是否在标题右上角显示小红点
    type: String, // 样式风格类型，可选值为 card | line
    info: [Number, String], // 徽标
    color: String, // 标签主题色
    title: String, // 标题
    isActive: Boolean, // 是否当前标题
    disabled: Boolean, // 是否禁用
    scrollable: Boolean, // 是否可滚动
    activeColor: String, // 标题选中态颜色
    inactiveColor: String // 标题默认态颜色
  },
  computed: {
    style () {
      const style = {}
      const { color, isActive } = this
      const isCard = this.type === 'card'

      // card theme color
      if (color && isCard) {
        style.borderColor = color

        if (!this.disabled) {
          if (isActive) {
            style.backgroundColor = color
          } else {
            style.color = color
          }
        }
      }

      const titleColor = isActive ? this.activeColor : this.inactiveColor
      if (titleColor) {
        style.color = titleColor
      }

      return style
    }
  },
  methods: {
    onClick () {
      // 触发组件onClick事件
      this.$emit('click')
    },
    genText () { // 标题文案+徽标
      const Text = (
        <span class={bem('text', { ellipsis: !this.scrollable })}>
          {this.slots() || this.title}
        </span>
      )

      if (this.dot || (isDef(this.info) && this.info !== '')) {
        return (
          <span class={bem('text-wrapper')}>
            {Text}
            {<Info dot={this.dot} info={this.info} />}
          </span>
        )
      }

      return Text
    }
  },
  render () {
    return (
      <div
        class={[
          bem({
            active: this.isActive,
            disabled: this.disabled
          })
        ]}
        style={this.style}
        onClick={this.onClick}
      >
        {this.genText()}
      </div>
    )
  }
})
