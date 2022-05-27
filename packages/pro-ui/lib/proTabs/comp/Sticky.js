import { isHidden } from '@/utils/style'
import { unitToPx } from '@/utils/format'
import { createNamespace, isDef } from '@/utils'
import { getScrollTop, getElementTop, getScroller } from '@/utils/scroll'
import { BindEventMixin } from '@/mixins/bindEventMixin'

const [createComponent, bem] = createNamespace('sticky')
export default createComponent({
  mixins: [
    BindEventMixin(function (bind, isBind) {
      if (!this.scroller) {
        this.scroller = getScroller(this.$el)
      }

      if (this.observer) { // 监听元素可见性
        const method = isBind ? 'observe' : 'unobserve'
        this.observer[method](this.$el)
      }

      bind(this.scroller, 'scroll', this.onScroll, true)
      this.onScroll()
    })
  ],

  props: {
    zIndex: [Number, String],
    container: null,
    offsetTop: {
      type: [Number, String],
      default: 0
    }
  },

  data () {
    return {
      fixed: false,
      height: 0,
      transform: 0
    }
  },

  computed: {
    offsetTopPx () {
      return unitToPx(this.offsetTop)
    },

    style () {
      if (!this.fixed) {
        return
      }

      const style = {}

      if (isDef(this.zIndex)) {
        style.zIndex = this.zIndex
      }

      if (this.offsetTopPx && this.fixed) {
        style.top = `${this.offsetTopPx}px`
      }

      if (this.transform) {
        style.transform = `translate3d(0, ${this.transform}px, 0)`
      }

      return style
    }
  },

  watch: {
    fixed (isFixed) {
      this.$emit('change', isFixed)
    }
  },

  created () {
    // 元素是否可见api，兼容性：https://caniuse.com/?search=IntersectionObserver
    if (window.IntersectionObserver) {
      this.observer = new IntersectionObserver(
        entries => {
          // 这里回调触发时机为配置项中的thresholds阈值，默认[0]即可见比例超过0触发一次
          // intersectionRatio:目标元素的可见比例
          if (entries[0].intersectionRatio > 0) {
            this.onScroll()
          }
        },
        // root: 监视元素在root(默认视口)区域的可见性变化
        { root: document.body }
      )
    }
  },

  methods: {
    onScroll () {
      if (isHidden(this.$el)) {
        return
      }

      this.height = this.$el.offsetHeight // 当前组件高度（包括border）

      const { container, offsetTopPx } = this // 组件的容器，粘性定位距顶部距离
      const scrollTop = getScrollTop(window) // 当前页面的scrollTop
      const topToPageTop = getElementTop(this.$el) // 组件元素顶部到页面顶部距离

      const emitScrollEvent = () => {
        this.$emit('scroll', {
          scrollTop,
          isFixed: this.fixed
        })
      }

      // The sticky component should be kept inside the container element
      if (container) {
        const bottomToPageTop = topToPageTop + container.offsetHeight // 组件元素顶部到页面顶部距离+容器container高度

        // 区域吸顶：scrollTop增加到超过临界
        if (scrollTop + offsetTopPx + this.height > bottomToPageTop) {
          const distanceToBottom = this.height + scrollTop - bottomToPageTop

          if (distanceToBottom < this.height) { // header跟随上移
            this.fixed = true
            this.transform = -(distanceToBottom + offsetTopPx)
          } else {
            this.fixed = false
          }

          emitScrollEvent()
          return
        }
      }
      // 一般吸顶：topToPageTop和offsetTopPx固定，scrollTop不断变大
      if (scrollTop + offsetTopPx > topToPageTop) {
        this.fixed = true
        this.transform = 0
      } else {
        this.fixed = false
      }

      emitScrollEvent()
    }
  },

  render () {
    const { fixed } = this
    const style = {
      height: fixed ? `${this.height}px` : null
    }

    return (
      <div style={style}>
        <div class={bem({ fixed })} style={this.style}>
          {this.slots()}
        </div>
      </div>
    )
  }
})
