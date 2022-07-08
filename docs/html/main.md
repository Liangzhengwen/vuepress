# HTML开发风格（vue）

## 标签属性

- 当标签内的属性过多时，换行对齐

::: tip
按照Eslint的规则，标签属性一般采用双引号，在js模块里采用单引号
:::

```html
	<el-pagination
	  class="paginationMain"
	  @size-change="handleSizeChange"
	  :page-sizes="[10, 20, 30, 40, 50]"
	  layout="total, prev, pager, next, sizes"
	  :total="productList.total">
	</el-pagination>
```

## 标签样式

- 不推荐在vue开发中标签内写样式，显得臃肿，写在专属的css模块内，需要绑定:style做判断等特殊情况除外

```html
	<!-- 不推荐 -->
	<div class="sytle" style="width: auto, height: 100%;">
	  我是案例
	</div>

	<!-- 特殊情况 -->
	<div :style="{ minHeight: ( userMark ? 'calc(100vh - 15px)' : 'calc(100vh - 25px)' ) }">
	  对不起，我是特殊情况
	</div>
```

## 标签缩进

- 在vue开发中默认缩进两个空格，当然这是跟编辑器有关，可以调试

```html
<template>
  <div class="container">
	<div class="breadcrumb">
	  <breadcrumb />
	</div>
  </div>
</template>
```

## 标签紧贴

> 按照Elist的语法规则在开发中同级的标签不允许空行，或许一大段，这种情况大部分都是编辑器造成的

```html
<!-- 错误示例 -->
<template>
  <div class="container">
	<div class="breadcrumb">
	  <breadcrumb />
	</div>


	<div class="content">
	  <component />
	</div>
  </div>
</template>
```

## 代码嵌套

- 元素嵌套规范，每个块状元素独立一行，内联元素可选。

```html
<!-- 错误示例 -->
<template>
  <div>
    <h1></h1><p></p>
  </div> 
  <p> 
    <span></span>
    <span></span>
  </p>
</template>

<!-- 正确示例 -->
<template>
  <div>
    <h1></h1>
    <p></p>
  </div> 
  <p><span></span><span></span></p>
</template>
```

- 段落元素与标题元素只能嵌套内联元素。

```html
<!-- 错误示例 -->
<template>
  <h1><div></div></h1>
  <p><div></div><div></div></p>
</template>

<!-- 正确示例 -->
<template>
  <h1><span></span></h1>
  <p><span></span><span></span></p>
</template>
```


## Class命名规则

- camelCase（小驼峰式命名法 —— 首字母小写）
- PascalCase（大驼峰式命名法 —— 首字母大写）
- kebab-case（短横线连接式）
- Snake（下划线连接式）
