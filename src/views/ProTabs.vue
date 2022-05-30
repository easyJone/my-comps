<template>
  <ProTabs v-model="active1" animated>
    <ProTab title="标签 1">内容 1</ProTab>
    <ProTab title="标签 2">内容 2</ProTab>
    <ProTab title="标签 3">内容 3</ProTab>
    <ProTab title="标签 4">内容 4</ProTab>
    <ProTab title="标签 5">内容 5</ProTab>
    <ProTab title="标签 6">内容 6</ProTab>
  </ProTabs>
</template>

<script>

// import { ProTabs } from '@solazzo/basic'
export default {
  name: 'TabsView',
  components: {
    // ProTabs,
    // ProTab: ProTabs.Item
  },
  data () {
    return {
      active1: 1
    }
  }
}
</script>
