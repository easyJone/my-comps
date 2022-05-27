// Utils
import { createNamespace, isDef } from '@/utils'
import { inherit } from '@/utils/functional'

const [createComponent, bem] = createNamespace('info')

function Info (h, props, slots, ctx) {
  const { dot, info } = props
  const showInfo = isDef(info) && info !== ''

  if (!dot && !showInfo) {
    return
  }

  return (
    // {...obj}将作为createElement第二个参数，即数据对象; 将本组件的可继承的数据对象传递给子组件，例如class,style,etc.
    <div class={bem({ dot })} {...inherit(ctx, true)}>
      {dot ? '' : props.info}
    </div>
  )
}

Info.props = {
  dot: Boolean, // 是否在标题右上角显示小红点
  info: [Number, String] // 徽标
}

export default createComponent(Info)
