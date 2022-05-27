/**
 * 兼容老版本写法，获取slot
 */
export const SlotsMixin = {
  methods: {
    slots (name = 'default', props) {
      const { $slots, $scopedSlots } = this
      const scopedSlot = $scopedSlots[name]

      if (scopedSlot) {
        return scopedSlot(props)
      }

      return $slots[name]
    }
  }
}
