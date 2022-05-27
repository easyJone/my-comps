import { createNamespace, isDef } from '@/utils'
import { BORDER_TOP_BOTTOM } from '@/utils/constant'
import { getScroller, getElementTop, getVisibleHeight, scrollLeftTo, scrollTopTo, getVisibleTop, setRootScrollTop } from '@/utils/scroll'
import { callInterceptor } from '@/utils/interceptor'
import { unitToPx, addUnit } from '@/utils/format'
import { route } from '@/utils/router'
import { on, off } from '@/utils/event'
import { isHidden } from '@/utils/style'

// Mixins
import { ParentMixin } from '@/mixins/relationMixin'
import { BindEventMixin } from '@/mixins/bindEventMixin' // bind：target.addEventListener
// Components
import Title from './comp/Title'
import Content from './comp/Content'
import Sticky from './comp/Sticky'
import './style/pro-tabs.scss'

const [createComponent, bem] = createNamespace('tabs')

export default createComponent({
  mixins: [
    ParentMixin('tabs'), // 将本组件provide出去tabs，定义children为空数组
    BindEventMixin(function (bind, isBind) {
      if (!this.scroller) {
        this.scroller = getScroller(this.$el) // 获取最近的滚动容器 || window
      }

      bind(window, 'resize', this.resize, true) // true为告诉浏览器不会调用preventDefault以优化性能

      if (this.scrollspy) { // 开启了滚动导航
        bind(this.scroller, 'scroll', this.onScroll, true)
      }
    })
  ],
  model: {
    prop: 'active'
  },
  props: {
    color: String, // 标签主题色
    border: Boolean, // 是否显示标签栏外边框，仅在 type="line" 时有效
    sticky: Boolean, // 是否使用粘性定位布局
    animated: Boolean, // 是否开启切换标签内容时的转场动画
    swipeable: Boolean, // 是否开启手势滑动切换
    scrollspy: Boolean, // 是否开启滚动导航
    background: String, // 标签栏背景色
    lineWidth: [Number, String], // 底部条宽度，默认单位 px
    lineHeight: [Number, String], // 底部条高度，默认单位 px
    beforeChange: Function, // 切换标签前的回调函数，返回 false 可阻止切换，支持返回 Promise
    titleActiveColor: String, // 标题选中态颜色
    titleInactiveColor: String, // 标题默认态颜色
    type: { // 样式风格类型，可选值为 card
      type: String,
      default: 'line'
    },
    active: { // v-model
      type: [Number, String],
      default: 0
    },
    ellipsis: { // 是否省略过长的标题文字
      type: Boolean,
      default: true
    },
    duration: { // 动画时间，单位秒
      type: [Number, String],
      default: 0.3
    },
    offsetTop: { // 粘性定位布局下与顶部的最小距离，支持 px vw vh rem 单位，默认 px
      type: [Number, String],
      default: 0
    },
    lazyRender: { // 是否开启延迟渲染（首次切换到标签时才触发内容渲染）
      type: Boolean,
      default: true
    },
    swipeThreshold: { // 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动
      type: [Number, String],
      default: 5
    }
  },

  data () {
    return {
      position: '',
      currentIndex: null, // 当前激活的tab index, 对应children在父组件中的序号
      lineStyle: {
        backgroundColor: this.color
      }
    }
  },
  computed: {
    scrollable () { // 超出容器是否可滚动
      return this.children.length > this.swipeThreshold || !this.ellipsis
    },
    currentName () {
      const activeTab = this.children[this.currentIndex] // 当前激活的children组件

      if (activeTab) {
        return activeTab.computedName
      }
    },
    navStyle () {
      return {
        borderColor: this.color,
        background: this.background
      }
    },
    scrollOffset () { // 粘性布局顶部预留间距+tab栏高度，用于计算滚动相关数据
      if (this.sticky) return this.offsetTopPx + this.tabHeight
      return 0
    },
    offsetTopPx () { // 粘性布局顶部预留间距
      return unitToPx(this.offsetTop)
    }

  },

  watch: {
    color: 'setLine',

    active (name) {
      if (name !== this.currentName) {
        this.setCurrentIndexByName(name)
      }
    },

    children () {
      // children序列可能改变，重设当前激活的tab etc.
      this.setCurrentIndexByName(this.active)
      this.setLine()

      this.$nextTick(() => {
        this.scrollIntoView(true)
      })
    },
    /**
     * 监听currentIndex改变
     * 常规：滚动标签栏&底部条，针对吸顶&非滚动导航 修正顶部距离，设置root scrollTop为当前组件到滚动容器顶部距离 + 当前root scrollTop - 吸顶预留间距
     * 滚动导航：滚动标签栏&底部条，title点击时通过scrollToCurrentContent滚动页面内容
     */
    currentIndex () {
      this.scrollIntoView() // 标签栏滚动
      this.setLine() // 底部条设置

      if (this.stickyFixed && !this.scrollspy) { // 非滚动导航&吸顶：设置根scrollTop、预留offsetTop
        setRootScrollTop(Math.ceil(getElementTop(this.$el) - this.offsetTopPx))
      }
    },

    scrollspy (val) {
      if (val) {
        on(this.scroller, 'scroll', this.onScroll, true) // true为告诉浏览器不会调用preventDefault以优化性能
      } else {
        off(this.scroller, 'scroll', this.onScroll)
      }
    }

  },
  mounted () {
    this.init()
  },
  activated () {
    this.init()
    this.setLine()
  },
  methods: {
    init () {
      this.$nextTick(() => {
        this.inited = true
        this.tabHeight = getVisibleHeight(this.$refs.wrap) // 标签栏高度
        this.scrollIntoView(true)
      })
    },
    resize () {
      this.setLine()
    },
    // 重置导航条nav line位置&&样式
    setLine () {
      const shouldAnimate = this.inited // 首次渲染line无动画

      this.$nextTick(() => {
        const { titles } = this.$refs

        if (
          !titles ||
          !titles[this.currentIndex] ||
          this.type !== 'line' ||
          isHidden(this.$el)
        ) {
          return
        }

        const title = titles[this.currentIndex].$el
        const { lineWidth, lineHeight } = this
        const left = title.offsetLeft + title.offsetWidth / 2

        const lineStyle = {
          width: addUnit(lineWidth),
          backgroundColor: this.color,
          transform: `translateX(${left}px) translateX(-50%)`
        }

        if (shouldAnimate) {
          lineStyle.transitionDuration = `${this.duration}s`
        }

        if (isDef(lineHeight)) {
          const height = addUnit(lineHeight)
          lineStyle.height = height
          lineStyle.borderRadius = height
        }

        this.lineStyle = lineStyle
      })
    },

    // 根据name找出子组件序号，设置currentIndex
    setCurrentIndexByName (name) {
      const matched = this.children.filter(tab => tab.computedName === name)
      const defaultIndex = (this.children[0] || {}).index || 0 // children.index: 该子组件在父组件中的排序，见relationMixin混入
      this.setCurrentIndex(matched.length ? matched[0].index : defaultIndex)
    },

    // 滚动导航开启后的滚动回调：即时获取&设置当前index，通过watch触发标签栏&底部条的滚动
    onScroll () {
      // 点击title的raf动画结束：点击title时滑动无效
      if (this.scrollspy && !this.lockScroll) {
        const index = this.getCurrentIndexOnScroll()
        this.setCurrentIndex(index)
      }
    },
    // 滚动时获取当前展示的index
    getCurrentIndexOnScroll () {
      const { children } = this

      for (let index = 0; index < children.length; index++) {
        const top = getVisibleTop(children[index].$el) // 元素到视窗顶部的距离

        if (top > this.scrollOffset) {
          return index === 0 ? 0 : index - 1
        }
      }

      return children.length - 1
    },

    // 设置最近可用的index，同步v-model；标签&底部条滚动通过对currentIndex的watch触发
    setCurrentIndex (currentIndex) {
      const newIndex = this.findAvailableTab(currentIndex)
      if (!isDef(newIndex)) return
      const newTab = this.children[newIndex]
      const newName = newTab.computedName
      const shouldEmitChange = this.currentIndex !== null // 初始化不emitChange
      this.currentIndex = newIndex
      if (newName !== this.active) {
        this.$emit('input', newName) // v-model同步
        shouldEmitChange && this.$emit('change', newName, newTab.title)
      }
    },

    // 返回最近的可用的index，当前禁用时继续--/++
    findAvailableTab (index) {
      const diff = index < this.currentIndex ? -1 : 1
      while (index >= 0 && index < this.children.length) {
        if (!this.children[index].disabled) {
          return index
        }
        index += diff
      }
    },

    onSticktScroll (params) {
      this.stickyFixed = params.isFixed
      this.$emit('scroll', params) // 滚动时触发，仅在 sticky 模式下生效
    },

    /**
     * @exposed-api
     * 滚动到指定的标签页，在滚动导航模式下可用
     */
    scrollTo (name) {
      this.$nextTick(() => {
        this.setCurrentIndexByName(name)
        this.scrollToCurrentContent(true)
      })
    },

    // 滚动导航模式下：滚动内容到视图，用于点击标题
    scrollToCurrentContent (immediate = false) {
      if (!this.scrollspy) return
      const target = this.children[this.currentIndex]
      const el = target?.$el
      if (!el) return

      const to = getElementTop(el, this.scroller) - this.scrollOffset
      this.lockScroll = true
      scrollTopTo(this.scroller, to, immediate ? 0 : +this.duration, () => {
        this.lockScroll = false
      })
    },

    // 标题点击
    onClick (item, index) {
      const { title, disabled, computedName } = this.children[index]
      if (disabled) {
        this.$emit('disabled', computedName, title)
      } else {
        callInterceptor({
          interceptor: this.beforeChange,
          args: [computedName],
          done: () => {
            this.setCurrentIndex(index)
            this.scrollToCurrentContent()
          }
        })

        this.$emit('click', computedName, title)
        // 跳转item.prop.to(&&router) || item.prop.url
        route(item.$router, item)
      }
    },

    // 标签栏滚动：计算滚动距离，raf帧动画模拟
    scrollIntoView (immediate) {
      const { titles } = this.$refs

      if (!this.scrollable || !titles || !titles[this.currentIndex]) return

      const { nav } = this.$refs
      const title = titles[this.currentIndex].$el
      // title.offsetLeft + title.offsetWidth/2 为屏中到最左侧，再减半屏即滚动后scrollLeft的总长，nav.scrollLeft为原值，差值即滚动长度
      const to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2

      scrollLeftTo(nav, to, immediate ? 0 : +this.duration)
    }

  },
  render: function (h) {
    const { type, animated, scrollable } = this

    const Nav = this.children.map((item, index) => (
      <Title
        ref="titles"
        refInFor // 声明ref在for循环里用，this.$refs.xxx为数组
        type={type}
        dot={item.dot}
        info={item.badge ?? item.info} // 空值合并，null/undefined
        title={item.title}
        color={this.color}
        style={item.titleStyle}
        class={item.titleClass}
        isActive={index === this.currentIndex}
        disabled={item.disabled}
        scrollable={scrollable}
        activeColor={this.titleActiveColor}
        inactiveColor={this.titleInactiveColor}
        scopedSlots={{
          // this.slots: createComponent中已混入
          default: () => item.slots('title')
        }}
        onClick={() => { // 自定义click事件，需要内部$emit触发
          this.onClick(item, index)
        }}
      />
    ))

    const Wrap = (
      <div
        ref="wrap"
        class={[
          bem('wrap', { scrollable }),
          { [BORDER_TOP_BOTTOM]: type === 'line' && this.border }
        ]}
      >
        <div
          ref="nav"
          class={bem('nav', [type, { complete: this.scrollable }])}
          style={this.navStyle}
        >
          {this.slots('nav-left')}
          {Nav}
          {type === 'line' && (
            <div class={bem('line')} style={this.lineStyle} /> // 底部line条
          )}
          {this.slots('nav-right')}
        </div>
      </div>
    )

    return (
      <div class={bem([type])}>
        {this.sticky
          ? (<Sticky
            container={this.$el}
            offsetTop={this.offsetTop}
            onScroll={this.onSticktScroll} // 通过$emit('scroll')触发
          >
            {Wrap}
          </Sticky>)
          : (Wrap)}
        <Content
          count={this.children.length}
          animated={animated}
          duration={this.duration}
          swipeable={this.swipeable}
          currentIndex={this.currentIndex}
          onChange={this.setCurrentIndex} // 通过$emit('change')触发
        >
          {this.slots()}
        </Content>
      </div>
    )
  }
})
