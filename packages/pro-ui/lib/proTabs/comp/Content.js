import { createNamespace } from '@/utils'
import { TouchMixin } from '@/mixins/touchMixin'

const [createComponent, bem] = createNamespace('tabs')
const MIN_SWIPE_DISTANCE = 50 // 滑动切换临界值
export default createComponent({
  mixins: [TouchMixin],

  props: {
    count: Number, // item数量
    duration: [Number, String], // 动画时间
    animated: Boolean, // // 是否开启切换标签内容时的转场动画
    swipeable: Boolean, // 是否开启手势滑动切换
    currentIndex: Number
  },

  computed: {
    style () {
      if (this.animated) {
        return {
          transform: `translate3d(${-1 * this.currentIndex * 100}%, 0, 0)`,
          transitionDuration: `${this.duration}s`
        }
      }
    },

    listeners () {
      if (this.swipeable) {
        return {
          touchstart: this.touchStart,
          touchmove: this.touchMove,
          touchend: this.onTouchEnd,
          touchcancel: this.onTouchEnd
        }
      }
    }
  },

  methods: {
    // 监听 touch end，改变currentIndex
    onTouchEnd () {
      const { direction, deltaX, currentIndex } = this

      /* istanbul ignore else */
      if (direction === 'horizontal' && this.offsetX >= MIN_SWIPE_DISTANCE) {
        /* istanbul ignore else */
        if (deltaX > 0 && currentIndex !== 0) {
          this.$emit('change', currentIndex - 1)
        } else if (deltaX < 0 && currentIndex !== this.count - 1) {
          this.$emit('change', currentIndex + 1)
        }
      }
    },

    genChildren () {
      if (this.animated) {
        return (
          <div class={bem('track')} style={this.style}>
            {this.slots()}
          </div>
        )
      }

      return this.slots()
    }
  },

  render () {
    // {...obj}为jsx语法，obj会被编译成createElement的第二参数数据对象
    return (
      <div
        class={bem('content', { animated: this.animated })}
        {...{ on: this.listeners }}
      >
        {this.genChildren()}
      </div>
    )
  }
})
