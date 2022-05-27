import { on } from '@/utils/event'

const MIN_DISTANCE = 10 // 最低幅度

function getDirection (x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal'
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical'
  }

  return ''
}

export const TouchMixin = {
  data () {
    return { direction: '' }
  },

  methods: {
    touchStart (event) {
      this.resetTouchStatus()
      this.startX = event.touches[0].clientX
      this.startY = event.touches[0].clientY
    },

    touchMove (event) {
      const touch = event.touches[0]
      /**
       * clientX: 鼠标指针相对于浏览器页面（或客户区）的水平坐标
       */
      // 兼容safari弹性回弹，clientX为负的情景
      this.deltaX = touch.clientX < 0 ? 0 : touch.clientX - this.startX
      this.deltaY = touch.clientY - this.startY
      this.offsetX = Math.abs(this.deltaX)
      this.offsetY = Math.abs(this.deltaY)
      this.direction =
        this.direction || getDirection(this.offsetX, this.offsetY)
    },

    resetTouchStatus () {
      this.direction = '' // 滑动方向
      this.deltaX = 0 // 水平坐标变化值
      this.deltaY = 0 // 垂直坐标变化值
      this.offsetX = 0 // 水平坐标变化净值
      this.offsetY = 0 // 垂直坐标变化净值
    },

    // avoid Vue 2.6 event bubble issues by manually binding events
    // https://github.com/youzan/vant/issues/3015
    bindTouchEvent (el) {
      const { onTouchStart, onTouchMove, onTouchEnd } = this

      on(el, 'touchstart', onTouchStart)
      on(el, 'touchmove', onTouchMove)

      if (onTouchEnd) {
        on(el, 'touchend', onTouchEnd)
        on(el, 'touchcancel', onTouchEnd)
      }
    }
  }
}
