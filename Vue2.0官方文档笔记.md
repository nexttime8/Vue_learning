## 介绍

### Vue.js 是什么

1. 可以自底向上逐层应用
2. 核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合
3. 核心思想是将用户界面抽象为一系列的组件，并且通过数据驱动和声明式的方式来构建交互性
4. 当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动 https://github.com/vuejs/awesome-vue#libraries--plugins 里面有 Vue 官方认可的插件

### Vue 其他框架的比较

1. React 和 Vue 有许多相似之处，它们都有：
   1. 使用 Virtual DOM
   2. 提供了响应式 (Reactive) 和组件化 (Composable) 的视图组件。
   3. 将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库。
2. https://v2.cn.vuejs.org/v2/guide/comparison.html

### 声明式渲染

1. 响应式
   - 不再与 HTML 直接交互，HTML 是入口，其余都会发生在新创建的 Vue 实例内部。
   - 一个 Vue 应用会将其挂载到一个 DOM 元素上然后对其进行完全控制
   - v-bind 绑定之后，将元素节点的 attribute 和 Vue 实例的 property 保持一致
   - 此外，不仅可以把数据绑定到 DOM 文本或 attribute，还可以绑定到 DOM 结构
2. 学会用 Console
3. 为了让用户和应用进行交互，可以用 v-on 指令添加一个事件监听器，通过它调用在 Vue 实例中定义的方法，以对象的格式写在 methods 中，v-on:简写为@
   - 更新了应用的状态，但没有触碰 DOM，所有的 DOM 操作都由 Vue 来处理，只需要关注逻辑层面即可
4. v-model 双向绑定，而不是 v-bind
   - 能轻松实现表单输入和应用状态之间的双向绑定。
5. **SGG 解释了一部分 Vue 如何实现响应式，确实是可以去了解一下 Vue 的源码**

### 组件化应用构建

1. 在 Vue 里，一个组件本质上是一个拥有预定义选项的一个 Vue 实例
   ```js
   // 定义名为 todo-item 的新组件，之后组件名就可以直接作为双标签使用了
   Vue.component('todo-item', {
     // props: ['todo'],
     // template: '<li>{{todo.text}}</li>'
     template: '<li>这是个待办项</li>'
   })
   // 类似于一个自定义 attribute，prop名为todo
   var app = new Vue(...)
   ```
   - 但是这样会为每个待办项渲染同样的文本，修改组件定义使之能接受一个 prop
   - 使用 v-for，是直接 v-for="xx in xxx"
2. 在一个大型应用中，有必要将整个应用程序划分为组件，以使开发更易管理

### 与自定义元素的关系

1. Vue 组件提供了纯自定义元素所不具备的一些重要功能，最突出的是跨组件数据流、自定义事件通信以及构建工具集成
2. 规范已完成未通过，不是所有浏览器都原生支持，必要时，Vue 组件也可以包装于原生自定义元素之内

## Vue 实例

### 创建一个 Vue 实例

1. MVVM 模型
   - 是一种软件架构模式
   - MVVM 有助于将图形用户界面的开发与业务逻辑或后端逻辑（数据模型）的开发分离开来 https://zh.wikipedia.org/wiki/MVVM
2. 创建一个 Vue 实例时，可以传入一个选项对象，学的就是如何使用这些选项来创建想要的行为 https://v2.cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE 有完整的选项列表
3. 一个 Vue 应用由一个通过 new Vue 创建的根 Vue 实例，以及可选的嵌套的、可复用的组件树组成。
   - 组件树？
   - 所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象 (一些根实例特有的选项除外)

### 数据与方法

1. 响应式基本原理
   1. 当一个 Vue 实例被创建时，它将 data 对象中的所有的 property 加入到 Vue 的响应式系统中。当这些 property 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。
   2. 当这些数据改变时，视图会进行重渲染。值得注意的是只有当实例被创建时就已经存在于 data 中的 property 才是响应式的。
   - 如通过 vm.xx = ''的方式新增 property，并不会导致视图更新
   - 情况一：知道需要设置某 property，但是初始为空，或者不存在，则需要在 data 里面添加，并设置初始值，如'',[],0,null,false
   - 例外：Object.freeze()，会阻止修改现有的 property，从而响应系统无法再追踪变化
     - 修改会报错：Error in v-on handler: "TypeError: Cannot assign to read only property 'foo' of object '#<Object>'"
2. data 以外的 Vue 的实例 property 与方法，都有前缀$，与用户定义的 property 区分开
   1. property
      - vm.$data
        - 与 Vue 实例中 data 所指的{}全等
      - vm.$el
        - 与 Vue 实例中 el 所指的 DOM 元素全等
   2. 方法 - vm.$watch
      ```js
      // $watch 是一个实例方法
      vm.$watch("a", function (newValue, oldValue) {
        // 这个回调将在 `vm.a` 改变后调用
      })
      ```

### 实例生命周期钩子

1. Vue 实例在被创建时要进行初始化，会设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，从而用户可以在不同阶段添加自己的代码。
2. created 钩子可以用来在一个实例被创建之后执行代码；也有一些其它的钩子，在实例生命周期的不同阶段被调用，如 mounted、updated 和 destroyed。生命周期钩子的 this 上下文指向调用它的 Vue 实例。
3. 实例的生命周期：![Alt text](./images/image-4.png)

## 模板语法

1. Vue 基于 HTML 的模板语法，讲 DOM 绑定至底层 Vue 实例。底层 Vue 讲模板编译成虚拟 DOM 渲染函数。不用模板可以直接写渲染函数，使用 JSX 语法替代。
2. 带锚点的标题
   - 锚点：HTML 中的一种特殊元素或链接，用于在页面内部进行导航或定位到特定的位置；通过使用锚点，用户可以快速跳转到页面上的不同部分，而不需要滚动页面或手动查找内容。
   - 在 HTML 中，可以通过给目标元素添加 id 属性来创建一个锚点。然后，可以在页面中的其他位置使用锚点链接来引用该锚点。锚点链接使用<a>标签，并使用 href 属性指定目标锚点的 id 值，通常以#开头。
   ```html
   <h1 id="section1">标题</h1>
   <a href="#section1"></a>
   ```
   - 带锚点的标题是指在标题文本中包含一个链接，点击链接可以跳转到页面的特定位置（锚点）。这通常在文档的目录或导航栏中使用，以便用户可以快速导航到页面的不同部分。

### 插值

1.  v-once 指令
    - 能执行一次性地插值，当数据改变时，插值处的内容不会更新
    - 但是可能影响该节点上的其他数据绑定

#### 原始 HTML

1. 双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，需要使用 v-html 指令
   ```html
   <p id="hh">Using mustaches: {{ rawHtml }}</p>
   <p id="hh">Using v-html directive: <b v-html="rawHtml"></b></p>
   <!-- 这样会解析成 b标签里面嵌套span标签 -->
   ```
   ```js
   const vm = new Vue({
     el: "#hh",
     data: {
       // rawHtml是Vue实例中data中的property，格式是一个html标签
       rawHtml: '<span style="color: red;">This should be red</span>',
     },
   })
   ```
2. 不能使用 v-html 来复合局部模板，因为 Vue 不是基于字符串的模板引擎。反之，对于用户界面 (UI)，组件更适合作为可重用和可组合的基本单位。
   - 意思是：v-html 通常用于渲染静态的、不涉及交互的 HTML 内容。对于复杂的 UI 结构和交互逻辑，Vue 更推荐使用组件来构建，因为组件具有更好的可重用性和可组合性。
3. 使用 v-html 指令时要注意潜在的安全问题，因为它可以导致跨站脚本攻击（XSS）漏洞。请确保只将可信任的 HTML 内容用于 v-html 指令，**不要将用户输入的内容直接插入到 HTML 中**。

#### 组件相关

1. **组件不要手动挂载**当使用组件方式创建 Vue 实例时，可以直接在组件内部使用 <template> 标签作为根元素，而不需要指定一个具体的元素来挂载。这种方式下，Vue 实例将会在组件中自动创建和挂载，并通过组件的方式渲染到 DOM 中。
2. 在 Vue 应用中，<template> 标签应该位于 Vue 实例的外部，而不是包含在 <body> 标签内部。应该将 <template> 标签移动到 <body> 标签之外

#### Attibute

1. Mustache 语法不能作用在 HTML attribute 上，遇到这种情况应该使用 v-bind 指令
   - html 属性
2. 布尔 attribute，只要存在就意味着值为 true
   ```html
   <button v-bind:disabled="isButtonDisabled">Button</button>
   ```
   - 如果 isButtonDisabled 的值是 null、undefined 或 false，则 disabled
     attribute 甚至不会被包含在渲染出来的 <button>元素中
   - 当 isButtonDisabled 的值为 true 时，按钮会被禁用，当值为 false 时，按钮可用

#### 使用 JavaScript 表达式

1. 模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量。

### 指令

1. 指令 (Directives) 是带有 v- 前缀的特殊 attribute
2. 指令 attribute 的值预期是单个 JavaScript 表达式 (v-for 是例外情况)
3. 指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM

#### 参数

1. 一些指令能够接收一个“参数”，在指令名称之后以冒号表示
2. v-bind 指令可以用于响应式地更新 HTML attribute
3. v-on 指令，它用于监听 DOM 事件

#### 动态参数

1. **从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数**
   ```html
   <a v-bind:[attributeName]="url"> ... </a>
   ```
   - 这里的 attributeName 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用
   - 如果 Vue 实例有一个 data property attributeName，其值为 "href"，那么这个绑定将等价于 v-bind:href
2. 同样，可以使用动态参数为一个动态的事件名绑定处理函数
   ```html
   <a v-on:[eventName]="doSomething"> ... </a>
   ```
   - 当 eventName 的值为 "focus" 时，v-on:[eventName] 将等价于 v-on:focus
3. 动态参数预期会求出一个字符串，异常情况下值为 null。这个特殊的 null 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。
4. 动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在 HTML attribute 名里是无效的
   - 建议：使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式。
5. 在动态参数里面不写大写字母。在 DOM 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部强制转为小写

#### 修饰符

1. 修饰符 (modifier) 是以半角句号 . 指明的特殊后缀
   - 用于指出一个指令应该以特殊方式绑定
2. 例如
   - .prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()

### 缩写

1. Vue 为 v-bind 和 v-on 这两个最常用的指令，提供了特定简写。特别是在构建 Vue 管理所有模板的单页面应用程序 SPA 时，v-前缀没那么重要。
2. : 与 @ 对于 attribute 名来说都是合法字符，在所有支持 Vue 的浏览器都能被正确地解析。不会出现在最终渲染的标记中。
   - v-bind 简写为:
   - v-on 简写为@

## 计算属性和侦听器

### 计算属性

1. 简化模板中的逻辑，复杂逻辑使用计算属性

#### 基础例子

1. computed 里面声明的函数可以直接通过 Vue 实例调用，getter 函数
   - 计算属性的 getter 函数是没有副作用 (side effect) 的
2. property 发生变化时，计算属性依赖于 property，自动更新

#### 计算属性缓存 vs 方法

1. 明明可以将同一函数定义为一个方法而不是一个计算属性，为什么还是要用计算属性？
   - 两种方式的最终结果确实是完全相同的
   - 然而，不同的是计算属性是基于它们的响应式依赖进行缓存的
   - 响应式依赖也就是所依赖的 property 只要没有发生改变，访问对应的计算属性，可以直接得出结果，而不需要再次执行函数，也就是会缓存
   - 但是如果没有基于原有的 property，就不是响应式依赖，比如
   ```js
   const vm = new Vue({
     el:""
     data:{}
     computed: {
       now: function () {
         return Date.now();
       },
     },
   });
   ```
2. 每当触发重新渲染时，调用方法将总会再次执行函数

#### 计算属性 vs 侦听属性

1. Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性
2. 当有数据需要随着其他数据而变动时，更好的方法是使用 computed 而非命令式的 watch 回调
3. 什么叫做代码是命令式的？
4. 比较两种代码 computed 和 watch
   ```js
   var vm = new Vue({
     el: "#demo",
     data: {
       firstName: "Foo",
       lastName: "Bar",
       fullName: "Foo Bar", // 必须要定义
     },
     watch: {
       firstName: function (val) {
         this.fullName = val + " " + this.lastName;// 更新firstName
       },
       lastName: function (val) {
         this.fullName = this.firstName + " " + val;？// 更新lastName
       },
     },
   });
   ```
   - 以上为使用 watch，以下为使用 computed
   - computed 能实现的 watch 都能实现
   - 但是有时候，computed 更简洁清晰，property 更新了，computed 自然就更新了
   - watch 只能一个个的侦听单个 property
   ```js
   var vm = new Vue({
     el: "#demo",
     data: {
       firstName: "Foo",
       lastName: "Bar",
     },
     computed: {
       fullName: function () {
         return this.firstName + " " + this.lastName
       },
     },
   })
   ```

#### 计算属性的 setter

1. **计算属性默认只有 getter**，在需要时也可以提供一个 setter
   - getter 就是函数 return 一个值
   - setter 就是根据新的计算属性值，更新 data 里面的 property
     - 用 this 调用

### 侦听器

1. 当需要在数据变化时**执行异步或开销较大的操作**时，需要自定义侦听器来响应数据的变化。
2. watch 是 watch 对象所指的发生变化，就会执行 handler 操作
3. Vue 在内部会将 watch 的处理函数绑定到 Vue 实例上，确保在调用处理函数时，this 指向正确的上下文。
4. created 和 immediate:true 冲突吗
   1. created 是 Vue 实例的生命周期钩子函数，在 Vue 实例被创建后立即调用。它可以用来进行初始化操作，例如设置初始数据、订阅事件等。
   2. immediate 是用于 watch 配置的一个选项，用于指定在 Vue 实例创建时是否立即触发该 watch。

## Class 与 Style 绑定

### 绑定 HTML Class

#### 对象语法

1. 传给 v-bind:class 一个对象，以动态地切换 class
   - :class=**"**{类名:property}**"**
   - 类名可以是？也可以是字符串
   - 这个对象可以有多个字段来动态切换多个 class
   - :class 和 class 可以共存
2. 对象可以直接写在 Vue 实例中，不必显示的写在内敛定义中
   - v-bind:class="property"
   - property 是 data 中的 Object 类型 property
   - 甚至可以是 computed 中的 function 类型

#### 数组语法

1. 把一个数组传给 v-bind:class，以应用一个 class 列表
   - v-bind:class=**"**[activeClass, errorClass]**"**
   - 注意都要以双引号的形式，无论是对象还是数组
2. 甚至还可以是数组中的三原表达式
   - v-bind:class="[isActive ? activeClass : '', errorClass]"
   - 这是两个数组元素哦
3. 甚至可以是数组中的对象
   - v-bind:class="[{ active: isActive }, errorClass]"

#### 用在组件上

1.
