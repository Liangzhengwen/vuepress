# CSS开发风格（vue）

## 全局样式

> 多个组件都用到的样式建议放在global.css或common.css中，然后在入口文件mian.js中引入

::: warning
不建议引入兄弟组件的样式来当作本页面的样式，这样其他的样式容易受到样式污染
:::


## Scoped特殊属性

- 在Vue文件中的style标签上有一个特殊的属性，scoped。当一个style标签拥有scoped属性时候，它的css样式只能用于当前的Vue组件，可以使组件的样式不相互污染。如果一个项目的所有style标签都加上了scoped属性，相当于实现了样式的模块化。

```css
<style lang="scss" scoped>
  .container {
    width: 100%;
    height: auto;
  }
</style>
```

### Scoped样式穿透

**使用场景**

1.需要修改element ui底层样式

2.防止组件间同名class的样式污染


**使用注意**

1.父组件无scoped属性，子组件带有scoped，父组件是无法操作子组件的样式的，虽然我们可以在全局中通过该类标签的标签选择器设置样式，但会影响到其他组件

2.父组件有scoped属性，子组件无，父组件也无法设置子组件样式，因为父组件的所有标签都会带有data-v-469af010唯一标志，但子组件不会带有这个唯一标志属性，与1同理，虽然我们可以在全局中通过该类标签的标签选择器设置样式，但会影响到其他组件

3.父子组建都有，同理也无法设置样式，更改起来增加代码量

因此如果组件内部还有组件，只会给最外层的组件里的标签加上唯一属性字段，不影响组件内部引用的组件（ 注意 ）


**使用方式**

  - 原生CSS： >>>
  - less： /deep/
  - scss： ::v-deep

```css
/* 外层 >>> 第三方组件 */
.wrapper >>> .el-button {
  background: #fff;
}

/* 外层 /deep/ 第三方组件  */
.wrapper /deep/ .el-button{
  background: #fff;
}
```

## 代码易读性

- （Eslint）左括号与类名之间一个空格，冒号与属性值之间一个空格。

```css
/* 推荐 */
.button {
  background: #fff;
}

/* 不推荐  */
.button{
  background:#fff;
}
```

- （Eslint）颜色值 rgb()rgba()hsl()hsla()rect() 中不需有空格，且取值不要带有不必要的 0。

```css
/* 推荐 */
.button {
  color: rgba(255,255,255,.5);
}

/* 不推荐  */
.button {
  color: rgba( 255, 255, 255, 0.5 );
}
```

## 不为 0 指明单位

```css
/* 推荐 */
.button {
  margin: 0 10px;
}

/* 不推荐  */
.button {
  margin: 0px 10px;
}
```

## 无属性建议整个注释或删除

```css
/* 推荐 */
/* .button {
  margin: 0 10px;
} */

/* 不推荐  */
.button {
  /* margin: 0px 10px; */
}
```

## 属性值引号

- CSS属性值需要用到引号时，建议统一使用单引号。

```css
/* 推荐 */
.button {
  font-family: 'Hiragino Sans GB';
}

/* 不推荐  */
.button {
  font-family: "Hiragino Sans GB";
}
```

## 属性书写建议

- 左到右，从上到下

| 显示属性    | 自身属性  | 文本属性和其他修饰 |
| --------   | --------  | ---------------- |
| display    | width     | font             |
| visibility | height    | text-align       |
| position   | margin    | text-decoration  |
| float      | padding   | vertical-align   |
| clear      | border    | white-space      |
| list-style | overflow  | color            |
| top        | min-width | background       |

```css
.foo {
  display: block;
  position: relative;
  float: left;
  width: 100px;
  height: 100px;
  margin: 0 10px;
  padding: 20px 0;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  color: #333;
  background: rgba(0,0,0,.5);
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```