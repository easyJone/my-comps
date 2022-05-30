# Basic组件

## 安装

```bash
yarn add @solazzo/basic
```

## 使用

### 完整使用

```bash
# 全局引用
  import Vue from 'vue'
  import Basic from '@solazzo/basic'
  Vue.use(Basic)

# 全局单独引用
  import { ProTabs } from '@solazzo/basic'
  Vue.use(ProTabs)

# 组件内引用
  import { ProTabs } from '@solazzo/basic'
  components: { ProTabs, ProTab: ProTabs.Item }
```
