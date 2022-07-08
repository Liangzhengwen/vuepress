
# Vue开发风格

::: tip page style

:tada:  各组件中的<font color=#ed1941>字体风格，颜色，大小</font>建议保持一致

:tada:  各组件中的<font color=#ed1941>表格中的状态,类型等字段，按钮风格</font>建议保持一致

:tada:  各组件中的<font color=#ed1941>页面布局，如表格，输入框，按钮等排列方式</font>建议保持一致

:::

## 代码结构

```html
<template>
  <div id="my-component">
    <DemoComponent />
  </div>
</template>

<script>
import DemoComponent from '../components/DemoComponent'
export default {
  name: 'MyComponent',
  components: {
    DemoComponent
  },
  mixins: [],
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {}
  created () {},
  mounted () {},
  destroyed () {},
  methods: {},
}
</script>

<style lang="scss" scoped>
  #my-component {
    width: 100%;
  }
</style>
```

## v-for 设置键值

- 在组件上必须用 key 搭配 v-for，以便维护内部组件及其子树的状态

```html
<template>
  <ul>
    <li
      v-for="todo in todos"
      :key="todo.id">
        {{ todo.text }}
    </li>
  </ul>
</template>
```

## v-if 和 v-for 互斥

> 永远不要把 v-if 和 v-for 同时用在同一个元素上

```html
<!-- 错误示例 -->
<template>
  <ul>
	<li
	  v-for="user in users"
	  v-if="shouldShowUsers"
	  :key="user.id">
	  {{ user.name }}
	</li>
  </ul>
</template>

<!-- 正确示例 -->
<template>
  <ul v-if="shouldShowUsers">
	<li
	  v-for="user in users"
	  :key="user.id">
	  {{ user.name }}
	</li>
  </ul>
</template>
```

## @click指令不能为空

- 在@click指令不能为空，虽然不影响程序，但是在Eslint中还是会有warnning警告

```html
<!-- 推荐 -->
<template>
  <ul>
    <li @click="handleBtnClick">
      {{ todo.text }}
    </li>
  </ul>
</template>

<!-- 不推荐 -->
<template>
  <ul>
    <li @click="">
      {{ todo.text }}
    </li>
  </ul>
</template>
```

## 事件方法

- 命名方法：camelCase
- 命名规范：handle + 名称（可选）+ 动词 (建议)

```html
<template>
  <div
    @click.native.stop="handleItemClick()"
    @mouseenter.native.stop="handleItemHover()">
  </div>
</template>

<script>
  export default {
    methods: {
      handleItemClick () {
        //...
      },
      handleItemHover () {
        //...
      }
    }
  }
</script>
```


