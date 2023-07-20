## 学习路径

1. vue 基础
2. vue-cli
3. vue-router
4. vuex
5. element-ui
6. vue3

# Vue 核心

## vue 简介

1. 构建用户界面+渐进式+JavaScript 框架
2. 自底向上+轻量小巧+插件库
3. Angular+尤雨溪+vue 2.0 Ghost in the Shell+vue 3.0 One Piece
4. 特点
   1. 组件化+复用率高+好维护
      - 封装成.vue 文件格式，包括 html+css+js
   2. 声明式编码，与命令式编码相反
      - 无需直接操作 DOM
   3. 虚拟 dom+diff 算法，复用 dom 节点
      - 数据=》虚拟 dom=》页面真实 dom
5. 前置知识
   1. ES6 语法规范（解构赋值、模板字符串、箭头函数）
   2. ES6 模块化（默认暴露、分别暴露、统一暴露、import?、sport?）
   3. 包管理器（npm、yarn、cnpm）
   4. 原型、原型链（重点）
   5. 数组常用方法（过滤、加工、筛选最值）
   6. axios
   7. promise
6. vue 官网
   1. vue.js 互动教程（直接上手尝试）+示例+演练场
   2. vue2 教程+API（字典）+风格指南+cookbook（技巧）
   3. vue2 工具
      1. Devtools
      2. Vue CLI 脚手架
      3. Vue Loader
   4. vue2 核心插件
      1. Vue Router
      2. VueX
      3. Vue 服务端渲染
   5. Awesome vue+浏览和 vue 相关的包（官方整理的比较好的 Vue 周边库
      1. element-ui 饿了么团队出的
      2. 同样 react 相关有 redux+react-router
7. 安装 Vue
   1. script-src-CDN 加速更快
   2. 开发版本-包含警告，生产版-压缩
8. Vue.config 配置文件
   1. productionTip：设置为 false 以阻止 vue 在启动时生成生产提示。
9. shift+f5 强制刷新
10. live server 插件
    1. 打开页面+本机 5500 端口内置服务器+文件夹下内容作为根资源
11. script 引入 Vue 会默认请求 ico
    1. 必须要有 ico，没有就会报错，直接在根路径下即可
    2. 强制刷新 shift+f5，才会重复请求 favicon.ico
12. new Vue()只传一个参数，而且这个参数是配置对象
    1. 配置对象里面的 key 是不能随意修改的
    2. key 有哪些
       - el+当前 Vue 实例为哪个容器服务+通常为 css 选择器字符串+可以是 document.getElementById('idname')+选择器找到多个容器只能正常解析第一个+多个选择器找到同一个容器后者报错+即选择器与 Vue 实例一一对应+Vue 实例的手下时组件？
       - data+是对象+Vue 实例中 el 所指定容器保存的动态变化的量+html 里面插**值**语法{{}}分隔符+不是对象不是解构赋值+暂时写成对象+组件时写成函数+{{}}里面只能是 js 表达式不能是 js 代码/语句
    3. 真是开发中只有一个 Vue 实例，并配合组件使用
13. js 表达式：一个表达式对应一个值，可以放在任何需要值的地方
14. Vue 的开发者工具
    1. Console 和 Sources 栏的 Vue
    2. 创建了 Vue 实例之后，点击靶标，之后就会有<Root>和 data
    3. root 代表的就是 Vue 实例，根，与 html 里面的无关
    4. 可以直接在里面更新并保存

## vue 版本语法

1. 用开发版本，会有更详细的解析
   - 不用 new，就不是 vue 的实例
2. 插值语法？指令语法
   1. 指令语法
      - 让跳转地址变成动态 href="网址"=》v-bind:href="url"
      - 引号里面的内容 url 变成 js 变成表达式执行
      - v-bind 可以指定任何属性
      - v-bind:**简写**成:
   2. 插值语法和指令语法使用场景
      - 插值语法通常用于指定标签体内容
      - 指令语法通常用于指定标签内容，标签属性\标签体内容\绑定事件
   3. vue 的实例 data 用层级，从而有同样的属性名

## 数据绑定

1. 单向数据绑定和双向数据绑定
   - input 输入框变了，但是 vue 里面的 data 没有同步改变？
   - v-bind 是单向数据绑定,只能 vue 的 data 绑 input 的 value
   - v-model 是双向数据绑定，vue 的 data 绑 input 的 value 同时 input 的 value 绑 vue 的 data；同一个 data 属性对应多个 dom 元素
   - 不是所有属性都有 v-model 属性；只能应用在表单类元素\输入类元素；input|select|checkbox|radio；**v-model 是对 value 绑定**；v-model:value **简写**为 v-model

## el 和 data 的两种写法

1. 将 vue 实例赋值给 const 变量，输出的是 vue 实例而不是这个构造函数
2. 带$符的属性和方法是给程序员用的，v.**proto**或者 vue.prototype 里面
3. 用 v.$mount('#root')的方法设置 el，可以实现过一段时间再关联 vue 实例和容器
   - mount 挂载
4. data 有两种写法，对象式和函数式，函数式必须有返回值
   - **用组件时，必须要用函数式**
   - data 函数里面的 this 是 vue 实例
   - data 函数不能是箭头函数
   - data:function(){}或者 data(){}

## MVVM 模型

1. M-model-对应 data 中的数据，V-view-模板/页面/dom，VM-view model-Vue 实例对象/dom 事件监听/数据绑定
2. 数据代理？**就是会隐藏**

   - 插值表达式可以写 Vue 实例的所有属性，直接写$options 即可，不用写 vm.
   - Object.defineProperty 方法，给对象添加/定义属性；传三个参数对象+属性名+配置项对象$options；生成的是浅色的属性不可以被枚举+不参与遍历；不能用 Objects.kes(对象名)+for...in；在$options 中加一个属性 enumerabl 为 true；不能修改；在$options中添加 writable 为 true；不能被删掉；在$options 中添加 configurable 为 true；对象的属性值是变量，变量更改，但是属性值并不随之改变；在$options 中添加 get 函数，get:function(){return xx}或者 get(){}，每次访问这个对象，都会触发 get 函数的调用，返回这个变量值，也就是随着变量的改变属性值改变；同样的 set(){number = value
     }类似，修改对象里面的属性值，变量随之改变
   - 通过一个对象，代理对另一个对象中属性的读写操作
   - ```js
     let obj = { x: 100 }
     let obj2 = { y: 200 }

     Object.defineProperty(obj2, "x", {
       get() {
         return obj.x
       },
       set(value) {
         obj.x = value
       },
     })
     ```

     如果进行 obj2.x = 300，则 value 就是 300，就会将 obj 的 x 属性赋值为 300

   - 数据代理为了双向绑定一致性，动态输出到 html
   - 数据代理就是写到 data 里面的属性，都可以通过 Vue 实例 vm 获取，vm 里面的数据来自\_data，\_data 里面的数据来自 data

3. \_data 与 data？
   - 数据劫持？
     - 用于在访问或修改对象的属性时进行拦截和控制
     - 与响应式编程和观察者模式结合使用，用于实现数据的自动更新和事件的触发
     - 当对象的属性被访问时，getter 方法会被调用，并可以在这里进行一些额外的处理，比如触发事件、进行依赖追踪等。当属性被修改时，setter 方法会被调用，并可以在这里进行验证、数据转换、更新其他相关属性等操作
     - 通过下划线\_来调用属性，约定该属性为私有属性
     - 把原本的 data 变成有 getter 和 setter 格式
   - https://www.bilibili.com/video/BV1Zy4y1K7SH/?p=13&spm_id_from=pageDriver&vd_source=6ff58b8d064ba5e47281f9dd5e6cb253 这个视频看不懂，什么 vm.\_data.name 和 vm.name
   - 把文件复制到根目录？把 vm.\_data 里面的数据，复制到 vm 里面一份
4. v-on:click=""
   - v-on 表示当什么时候，click 是点击
   - ""是回调函数，这个回调函数的定义必须写到 Vue 实例里面，看不到外面定义的
   - Vue 实例里面这么写：methods:{functionName(只能一个参数事件对象){}}
     - 这个 function 里面的 this 还是 Vue 实例
   - v-on:click="functionName(aa)"这样传参数，传参就加小括号，不传参就不加
   - 传了参也不会没有 event，通过 v-on:click="functionName(aa,$event)占位
   - v-on:click**简写**为@click，也就是任何事件都用@来指定函数
5. 只有配置在 data 里面的东西，才会做数据劫持和数据代理
6. data 是定义组件中的响应式数据的方法，而\_data 是包含这些数据的实际对象。我们应该使用 data 来定义数据，并通过 this 访问它们；\_data 是 Vue 内部使用的属性，一般情况下我们不需要直接使用它。

## 事件修饰符

1. @事件.prevent，来组织默认事件，如表单提交时阻止页面刷新
2. @事件.stop，来组织事件冒泡，不在父元素传播
3. @事件.once，使事件只触发一次
4. @事件.capture, 使用事件的捕获模式+由外往内
5. @事件.self，只有 event.target 是当前操作的元素时才触发事件，不包括子元素
6. @事件.passive，时间的默认行为立即执行，无需等待事件回调函数执行完毕；移动端用的多；**指示事件监听器永远不会调用？**
7. 滚动事件：scroll+wheel
8. **简写形式**事件修饰符可以连写，但是按照顺序
9. 指定事件的回调函数@事件名="函数名()"
   - 必须要加括号调用！

## 键盘事件

1. Vue 常见事件别名，@keyup.enter，enter+delete+esc+space+tab+up+down+left+right
2. key：Enter（更推荐使用）对应 keyCode：13
3. 按下大小写触发事件，@keyup.capslock=""
4. tab 键配合 keydown 使用，因为切换走了焦点，还有 control alt shift win 这四个系统修时间，这四个配合 keyup 按下的同时按下其他键随后释放其他才会触发，这四个配合 keydown 正常触发
5. 使用案件名称而不是用 keyCode 指定案件
   - 可以自定义别名案件 Vue.config.keyCodes.huiche = 13
6. 通过连写，设置键盘连按才能触发事件，@keyup.ctrl.y=""

## 计算属性

1. 联动效果
   1. 用插值语法
   2. 用 methods
   3. 用计算属性:data 里面*不要*这个声明计算属性，computed 里面写新的计算属性
   4. 用 watch：data 里面*要*这个声明计算属性，watch 里面写已有属性函数并更新新属性
2. 想要 methods 里面的函数的返回值，必须要调用也就是用小括号，没有小括号展示整个函数，每个属性都属于 data
3. 计算属性，在已有的属性上进行加工计算生成新的属性
   - 属性和计算属性分开放，属性在 data 里面，计算属性在 computed 里面，也是对象的形式
   - 计算属性里面定义 get 函数，点击获取这个计算属性之后，get 里面的操作才会执行、
   - get 函数里面的 this 就是 Vue 实例
   - 计算属性有缓存，get 会在初次读取时调用，或者在所依赖的数据发生变化时
   - data 和 methods 里面写啥 Vue 实例里面就是啥，computed 自动找到 get 自动调用 get，拿到返回值放到这个属性里
   - set 函数响应计算属性的修改，且 set 中要引起计算时依赖的数据发生变化
4. **简写方式**
   - 计算属性名:{get(){get 函数内容},set(){set 函数内容}}=》计算属性名:function(){get 函数内容}=》计算属性名(){get 函数内容}

## 监视属性-侦听属性

1. methods 里面的方法如果简单，可以直接在事件中写，但是必须在 Vue 实例中，或者 Vue 原型中，但是 window 的一些方法，都没有
2. 实例里面写 watch:{被监视的属性:{immediate:true,handler(newValue,oldValue){处理语句}}}
   - immediate:true 表示还没有改变的时候，初始就调用一次这个 handler
   - 只能在写 handler 的时候同时配置 immediate
3. Vue 实例.$watch('属性名',{如上配置对象})
4. 监视属性变化时，回调函数 handler 自动调用
5. 在 Vue 实例中，和 data 平级
6. 被监视的属性{handler(xx,yy){}}**简写**为被监视的属性(xx,yy){}
7. 如果只有一个形参，就是 newValue

### 深度监视

1. 监视多级结构中某个属性的变化：在 watch 中指定'numbers.a'，监视 data 里面的对象的属性
2. 监视多级结构中所有属性的变化：在 watch 中指定 deep:true
3. **简写形式**（只有 handler 时）
   - watch:{属性(newValue,oldValue){}}
   - vm.$watch('属性',function(newValue,oldValue){}) + 不能箭头函数
4. 所有 Vue 所管理的函数都用普通函数
5. watch 可以延迟执行实现异步任务，而 computed 不行
6. 定时器的回调函数+ajax 的回调函数+Promise 的回调函数不是被 Vue 所管理的函数，使用箭头函数指向 Vue 实例

## class 和 style 绑定

0. 两种情形
   1. 样式类名不确定
   2. 样式个数不确定
   3. 样式类名和个数均不确定
   4. 样式类名和个数均确定，但需要动态确定是否使用
1. 通过在标签内写@事件="事件的回调函数名"，绑定事件
2. Vue 实例中不再使用原生 JS 的 document.xxx 来获取 DOM 元素
3. :class="表达式" 表达式对应写在 Vue 实例的 data 里面
   - 变化的样式用绑定的形式写
   - :是 v-bind:的简写
4. 绑定 class 样式的字符串写法，适用于类名不确定，需要动态指定的情形
5. 数组写法
   - 把所有的样式写在数组里面，数组作为 Vue 实例中 data 对象的属性值
   - 可以是用随机函数选择，也可以是随机添加样式
   - shift 是移除数组里面的第一个元素，pop 是移除数组中最后一个元素
6. 内联样式
   1. 对象写法
      - 写成对象的形式，键值对{}，:style="data 对象的属性名"
      - data 对象的属性名:{fontSize:fsize+'px'}
      - 驼峰命名法
   2. 数组写法
      - 写成数组的形式，[]，:style="[data 对象的属性名 1,data 对象的属性名 2]"
      - data 对象的属性:{data 对象的属性 1,data 对象的属性 2}
      - 数组中必须是样式对象，样式对象中的键必须是存在的样式 ming

## 条件渲染

1. 条件渲染指令
   1. v-if|if-else|v-else-if
      - 不显示是 html 结构会去除
      - v-else 不要写条件
      - 相互元素之间不能打断，只能是连续
      - 低切换频率推荐使用
   2. v-show
      - 底层实现就是设置 display::none;
      - 本身 html 结构不会去除
      - 高切换频率推荐使用
2. template 模板双标签不影响结构
   - template 包裹需要同步渲染的结构
   - 只能配合 v-if 使用
3. v-if，元素可能无法获取到，v-show 一定可以获取到

## 列表渲染

1. JS 里面一旦有顺序，就用数组
2. 主动给数组对象添加唯一标识
3. v-for="person in persons"
   - 类似于 for...in 遍历
   - 写在 li 标签里面，从而 li 只需要写一个
   - person 是 li 标签体中可以使用的形参
4. v-for="(p,index) in persons"
   - ()可以没有
   - 可以有两个形参
   - 可以:key="index"，因为 index 唯一
5. key 唯一标识
   - 格式为 :key="唯一标识"
   - 使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素
   - 有相同父元素的子元素必须有独特的 key，重复的 key 会造成渲染
   - 替换而不是修改
   - 应用
     - 完整地触发组件的生命周期钩子
     - 触发过渡
6. in 和 of 都可以；可以遍历数组也可以遍历对象和字符串
   - of 对象的话，获取两个形参，分别值和键，key 不要冲突
   - 字符串的话，获取两个形参，分别是字符串的字符和索引
7. (a,b) of 5 指定循环次数
   - a 是从 1 开始的数，b 是 0 开始的索引值

### key

1. unshift 在数组开头添加元素
   - 此时将 index 作为 key 出问题了
2. 所有元素的 key 都被 Vue 征用了，不会显示
3. 虚拟 dom 对比算法 diff
4. 遍历列表时 key 的作用
5. 流程
   1. Vue 将初始数据生成虚拟 DOM，虚拟 DOM 必须要有 key
   2. 虚拟 DOM 也叫 Vnode
   3. 再将虚拟 DOM 转换成真实 DOM
   4. 用户操作真实 DOM
   5. 根据新数据生成虚拟 DOM
   6. 如果在数组开头插入，那么新插入的数据的 key 就是 index 值，即 0
   7. **依赖 key，将两次虚拟 DOM 使用对比算法进行对比**
      - 首先新的虚拟 DOM，按顺序取出第一个，找 key，找原来虚拟 DOM 中同样的 key 的项
      - 对比里面的内容，文本节点对比，元素属性对比（不是真实 dom 对比，不考虑 input 输入的 value 值）
        - 如果不一致，就不能复用，新虚拟 DOM 生成新的真实 DOM
        - 如果一直，就复用，直接复用之前生成的真实 DOM
      - 如果没有相同的 key 的项，直接由新虚拟 DOM 生成新真实 DOM
6. index 作为 key 有问题
   - 对数据进行逆序操作，会产生没必要的真实 DOM 更新，效率低
   - 还包括输入类 DOM，会导致界面出错
   - 只用于渲染，可以用 index

## 列表过滤（模糊搜索）

1. 流程
2. 收集用户输入数据，随着输入收集，用 v-model，双向绑定
3. 拿着关键词去列表里面过滤，在用户输入关键词改变时就要进行过滤，用 watch？用计算属性写？
   - computed 能实现的 watch 都能实现
   - watch 和 data 是平级的
4. 判断字符串里面是否有指定的字符？
   - indexOf 方法
   - 不包含返回-1，包含返回索引值
   - **任何字符串判断空字符串的 index，总返回 0**
5. filter 方法不更改原数组，返回全新的数组
6. 应该在原数组的基础上过滤，保留并返回过滤后的新数组
   - 在 Vue 实例中添加一个数组，初始值为原数组
7. //#region 和//#endregion 折叠中间区域
   - 这只针对 html 代码
8. 计算属性中的函数要有一个返回值
   - 计算属性依赖于 Vue 实例中的 keyWord
   - 计算属性本身就会在两个时候调用，初始以及改变时
9. computed 和 watch 都能实现的时候，优先 computed

### 列表排序

1. 设定排序的标志，sortType 初始为 0，注释 0 原顺序|1 降序|2 升序
2. 在 computed 的 filPersons 函数里面先暂存过滤后的数组，再判断是否需要排序
3. sort 方法，返回值为正交换位置，(a,b)=>a-b 表示升序，(a,b)=>b-a 表示降序
4. 原顺序怎么回去的？因为原数据没有更改

## Vue 监测数据改变的原理

1. Vue 默认就有一个监视，不是 watch，watch 是给程序员用的监视
2. 两种修改方法？直接将对象赋值进去|一个个属性赋值进去
   - 第一种方式，先点开 Vue 开发工具，Vue 检测不到信息改变
   - 但是先修改，再点开 Vue 开发工具，会呈现信息改变
3. 通过 getter 和 setter 监测属性的改变
4. 底层有构造函数 Observer，不直接写 get 和 set，避免内存溢出
   1. 汇总对象中所有属性，形成一个数组，通过 Object.keys(obj)
   2. 遍历
      - keys.forEach()
      - 在里面对每一个属性名，调用 Object.defineProperty(this,属性名,{get(){},set(val){}})
5. Vue 的考虑
   1. 对象内嵌套对象，数组内嵌套对象，内层属性也有 getter 和 setter
   2. 可以直接 vm.属性名而不是 vm.\_data.属性名
6. Vue 不展示 undefined 的值
   - a.b 中 a 不存在，会报错
   - a.b 中 a 存在，b 不存在，显示为空
7. 后面添加的属性，如何实现响应式功能
   1. Vue.set(target,key,val)，分别是向那个对象上添加属性，键，值
   2. 或者 vm.$set(target,key,val)或者this.$set(target,key,val)
   3. 不能直接 vm.\_data.xx = yy 或者 vm.data.xx = yy
   4. 只能给 data 里面的某一个对象追加属性，不能给 data 本身追加属性，也就是 Vue 实例本身，即 target 不能是 vm 本身，或者 Vue 实例的跟数据对象\_data
   5. 对象里面的可以生成 setter 和 getter，可以动态更新
   6. **数组通过索引的方式修改，不会动态更新**，用那七个数组方法，会更新
      - 通过索引的方式获取的是一个对象，要更新这个对象的属性，那么正常更新
      - 通过索引的方式获取的是一个数组，更新数组元素，不能正常更新
        - 用七个数组方法中的方法进行所需操作
        - 用 set（三种）
      - push|pop|splice|shift|unshift|sort|reverse
        - filter 会生成新的数组，往往用新的数组替换
      - 用到了包装技术
      - 数组实例的 push 是原型对象的 push，arr.push === Array.prototype.push(true)
      - vm.data 里面属性名.push === Array.prototype.push(false)
        - 有 push
        - 也会解析并视图更新
8. **所有不是由 Vue 控制的回调，尽量写成箭头函数的形式**

## vm.\_data

1. 先加工 data
   - 加工了 data，就能做响应式了，就是数据和页面同步改变
   - 就能实现对象里面属性的监视
2. 后 vm.\_data=data
3. 响应式 setter 就会重新解析模板

## 收集表单数据

1. 一般不用 form 的 action 属性，而用 ajax，可以页面不刷新跳转
2. 在 form 表单中，button 自带提交
   - 给 button 绑定提交事件，阻止默认行为
   - 给 form 绑定提交时间，阻止默认行为@submit.prevent=""
3. 单选框 radio 如何在 Vue 实例中获取值
   - 给标签设置 value 值，对应选项，v-model 获取 value 值
4. 复选框 checkbox 如何在 Vue 实例中获取值
   - 本身获取的是 checked 值，true 或 false 是否勾选
   - 同时将 v-model 的值写成数组（空），并设定 value 值，首选的就是 value 组成的数组
   - 是否勾选，单个按钮，完全可以只获取 boolean 值
5. select 框
   - 给 option 标签设置 value 值
6. 不建议直接访问\_data，把所有信息放到一个对象里面更好
7. v-model 的修饰符
   1. number 修饰符
      - v-model.number 直接将收集的以数字的形式保存
      - input 的 number 类别是只能输入数字
   2. lazy 修饰符
      - 输入结束失去焦点才会收集
   3. trim 修饰符
      - 去除前后空格

## 过滤器

1. filters 配置项，里面写函数，在插值表达式部分写 property | 过滤器名称
   - vm 里面的配置项 filters，`filters:{过滤器名称(value){return }}`
   - 这个 value 就是这个 property
   - 可以过滤器名称(参数)传参数，property 总会默认传入，给这个传入的参数直接设定初始值，初始值就是没有参数传入的时候的返回值，传入了参数自然按照参数的格式
2. 多个过滤器之间可以串联
   - property | 过滤器名称 1 | 过滤器名称 2
   - 按顺序传
3. 局部过滤器——写在 Vue 实例中
4. 全局过滤器
   - `Vue.filter('过滤器名称'，function(value){return})`
   - 必须写在 Vue 实例创建之间写好
   - 全局过滤器是 filter，局部过滤器是 filters
5. 组件是微型的 Vue 实例？✔
6. 除了插值语法中使用，还可以在哪里使用？✔
   - 插值语法是文本节点内
   - 还可以在标签的 attribute 上使用，:x="property | 过滤器名称"
   - 只能是 v-bind，v-model 不能使用
7. 应用
   - 过滤器适合简单处理
   - 如电商网站的价格 1999 写成 1,999
8. 过滤器不改变原始数据

## 内置指令-不常见

0. 常见指令
   - v-bind 单向绑定解析表达式，简写:
   - v-model 双向数据绑定
   - v-for 遍历数组/对象/字符串
   - v-on 绑定事件监听，简写@
   - v-if 条件渲染，动态控制节点是否存在
   - v-else 条件渲染，动态控制节点是否存在
   - v-show 条件渲染，动态控制节点是否显示
1. v-text
   - 向其所在标签插入文本
   - 不如插值语法更灵活
   - 文本节点内容只会直接被替换
   - 不会解析 html
2. v-html
   - 涉及 Node.js 里面的 cookie 原理
     - cookie 本质是 json 字符串
     - cookie 由浏览器保存
     - cookie 不能跨浏览器读取
     - chrome 里面是 application-cookie，firefox 里面是存储-cookie
     - 可以在 console 里面获取 cookie
       - document.cookie
     - a 标签中 `href=javascript:location.href="网址?"+document.cookie`
     - 勾选 HttpOnly，除了 http 协议，都不能获取，也就是 js 无法获取
   - xss 安全性问题-冒充用户之手
   - 只能在可信的内容上使用 v-html，不要再用户提交的内容上使用 v-html
3. v-cloak
   - 写服务器？:server.js，命令 启动服务器`node server`，延时获取 Vue.js
   - js 阻塞？讲 html 结构的时候讲过
   - 不能出现闪现效果，script 写在 body 最后面容易出现
   - v-cloak 没有取值，Vue.js 导入之后，这个属性就会消失
   - 属性选择器
     ```css
     [v-cloak] {
       display: none;
     }
     ```
   - 解决的问题：网速慢时，让未经解析的模板不会跑到页面上去
4. v-once
   - v-once 没有取值
   - 只执行一次
   - 初次动态渲染，后续就是静态内容
   - 作用：性能优化
   - 不要和事件修饰符弄混：prevent|stop|once|capture|self|passive
5. v-pre
   - 跳过其所在节点的编译过程，插值语法、指令语法无效
   - 作用：给不需要这些语法的语句加快编译

## 自定义指令

1. Vue 实例中，和 data 同级的 directives 对象，里面是指令名
   - 格式一：key 和 value 对的形式，`指令名:{k1:v1,k2:v2}`，可以处理细节问题
   ```js
   new Vue(
      directives:{
         '指令名':{k1:v1,k2:v2}
      }
   )
   ```
   - 格式二：直接写成函数指令名:function(){}，简写为`指令名(element,binding){}`
   ```js
   new Vue(
      directives:{
         '指令名'(element,binding){}
      }
   )
   ```
   - 格式三：直接通过
   ```js
   Vue.directive('指令名',
      bind(element,binding){},// 与元素绑定时操作
      inserted(element,binding){},// 元素插入页面时
      update(element,binding){}// 模板被重新解析时
   )
   ```
2. 函数形式，传入参数，第一个 element 是真实 dom，第二个 binding 是对象`{expression,value,name,rawName}`
   - expression 是赋值给指令的 data 里面的 property 名
   - value 是赋值给指令的 data 里面 property 值
   - name 是指定的指令名
   - rawName 是使用时要写的指令名
3. 自定义指令（写成函数时）什么时候被调用？
   1. 指令与元素建立联系时/绑定时
   2. 指令所在的模板被重新解析时，哪怕指令内用到的数据没有被修改
      - 模板就是 Vue 实例所指的 DOM 元素
      - 只要这个 Vue 实例里面的 data 数据改变，就会被重新解析，里面的指令就会被调用
4. 指令语法的功能
   1. 解析标签属性
   2. 解析标签体内容
   3. 解析绑定事件
   4. ......
5. 直接把自定义指令写成函数的形式，想要一上来就获取 input 的焦点有问题
   - 需要分三个步骤写三个函数
     1. 先指令与元素绑定 bind
        - property 值赋值给元素
     2. 后指令所在元素插入页面 inserted
        - 获取焦点
     3. 最后指令所在模板被重新解析 update
        - property 值赋值给元素
   - bind 和 update 函数内容往往重复，其实就要加 inserted
   - 生命周期钩子，Vue 会在不同的时候，调用不同的函数
6. 除了动态参数里面不能写大写字母，避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部强制转为小写；还要避免自定义指令里面用大写字母，可以写成 v-big-number，然后 directives 里面写成`'big-number'(element,binding):{}`
7. 所有指令函数里面的 this 都是 window，不是 vm
   - 任何一个指令的函数内部的 this 都是 window
8. 写在 directives 里面的指令，都是局部指令，只能给所绑定的 dom 元素及其子代使用
9. 全局指令，Vue.directive，用两个参数传入，分别是指令名称和一对象的方式传入的三个函数
   - 没有 s
10. 总有两种写法

- 局部指令：指令名:配置对象| 指令名:回调函数
- 全局指令：(指令名,配置对象)|(指令名,回调函数)

## 生命周期

### 生命周期 chapter one

1. 内联样式，动态绑定要:，一组组的样式要写成对象的格式，opacity:opacity 可以写成这样，两个 opacity 含义不同，前者是 css 属性名，后者是 Vue 实例的 property，但是因为重名，所以可以写成对象的简写形式，也就是只要一个 opacity
2. window.onload(()=>{})这里面写的操作，就是页面加载完后自动执行的操作
3. 定时器写在 methods 里面无法实现透明度渐减的功能
4. mounted 函数，与 data 同级
   - Vue 完成模板的解析，并把真实的 DOM 元素放入页面之后，也就是**挂载**完毕之后，就会调用 mounted，也就是 mounted 只会调用一次
   - mounted 可以实现透明度渐减这一功能
   - 关键时刻调用关键函数
5. 生命周期就是各个特殊事件点调用的各个特殊函数
   - 各个特殊函数的里面的 this 就是 vm
   - 所以在各个特殊函数里面调用 setInterval 等函数的时候，要用箭头函数
6. 生命周期=生命周期回调函数=生命周期函数=生命周期钩子
7. 生命周期函数的名字不可更改，但是函数内容由我们自己定义
8. 生命周期中的 this 指向 vm 或者组件实例对象
9. 透明度渐渐实现
   1. 引入 vue.min.js 文件`<script type="text/javascript" src="./vue/js/vue.min.js"></script>`
      - 使用 script 标签的方式引入
   2. 设置动态绑定的 opacity 样式<h1 id="opaci" :style="{opacity}">透明度渐减的效果</h1>
      - 注意一：v-bind:style，赋值给 style 的是字符串的形式
      - 注意二：里面写成对象的形式，opacity:opacity 简写为 opacity
      - 注意三：opacity 后者为 data 中的 key
   3. 在 mouted 中使用 setInterval 函数让 opacity 渐减，并在<=0 时恢复为 1
      ```js
      mounted() {
                setInterval(() => {
                    this.opacity -= 0.01
                    if (this.opacity <= 0) {
                        this.opacity = 1
                    }
                }, 10)
            },
      ```

### 生命周期 chapter two

1. 理解生命周期解析图
2. template 的作用；vm.$el()的影响；
   - 两种 template 的区别，替换？
   - 一种是直接在 body 里面写完，挂载在一个标签上，里面写满
   - 另一种里面为空，在 Vue 实例中写 template:''或者``
     - template 里面注意里面只能有一个根节点，不能是 template
     - 而且是将``或者''里面直接替换掉挂载的那个标签
3. 顺序是-直接在 Vue 实例里面，和 data 同级
   - beforeCreate()
   - created()
   - beforeMount()
   - **mounted()**
     - 开启定时器，消息订阅
   - beforeUpdate()
   - updated()
   - **beforeDestroy()**
     - 对数据的操作不会再触发更新
     - 进入了 beforeDestroy 不会再回到 beforeUpdate 了
   - destroyed()——React 没有这个
     - 如果没有在销毁之前打开 Vue 开发者工具，直接看不到 vm
     - 之前打开过，vm 还看得到
4. 学会用 debugger
5. 组件实例对象 = 微型 vm
6. 自定义事件是什么？
   - vm.$destory 销毁一个实例之后
   - 会清理它与其它实例的连接，同时解绑全部指令和自定义事件监听器（原生事件监听还存在）
7. 梳理
   1. Vue 里的生命周期钩子之间共用属性
      - 不同作用域，通过 this.xxx 实现
   2. 控制透明度渐减的实现发现问题
      1. 为什么只能帮顶外层的标签，绑定当前标签并改变透明度时，没有效果？
         1. 有错误的效果
            ```html
            <!-- Vue实例挂载在h1上 -->
            <h1 id="opaci" :style="{opacity}">透明度渐减的效果</h1>
            <button @click="stop">带你我停止变化</button>
            <button v-on:click="opacity = 1">透明度设置为1</button>
            ```
         2. 正确实现的效果
            ```html
            <div id="opaci">
              <h1 :style="{opacity}">透明度渐减的效果</h1>
              <button @click="stop">带你我停止变化</button>
              <button v-on:click="opacity = 1">透明度设置为1</button>
            </div>
            ```
      2. 理解 Vue 实例挂载到的就是模板或者组件定义的自定义元素
         - 挂载的 DOM 元素实际上是 Vue 实例的根元素，该元素及其子元素将成为 Vue 实例所管理的视图。
         - 但是只能根元素下的 dom 元素动态更新
      3. **尝试**发现 chrome 无法打开 Devtools？
         - 报错：Devtools inspection is not available because it's in production mode or explicitly disabled by the author.
         1. 在创建 Vue 应用程序时，确保将 process.env.NODE_ENV 设置为 development，而不是 production。这将使 Vue 应用程序以开发模式而不是生产模式运行
         2. 确保在构建 Vue 应用程序时，没有设置 production 模式。这通常在构建脚本或配置文件中进行设置。
            - 如果使用 Vue CLI 构建项目，检查 vue.config.js 或 webpack.config.js 中的配置选项，确保没有设置 mode 为 production。
            - 如果使用其他构建工具或自定义配置，请查看相应的构建配置文件，确保没有设置 production 模式。
         3. 经过尝试发现
            - <script type="text/javascript" src="./vue/js/vue.min.js"></script>没有devtools
            - <script src="./vue/js/vue.js"></script>有devtools
            - 所以是因为 vue.min.js 是生产者模式的 js 文件，应该用 vue.js 开发者模式的 js 文件
      4. 又发现正常引入之后，仍然没有显示 Vue devtols
         - 解决：尝试关闭开发工具窗格，刷新页面并再次打开开发工具窗格。

# Vue 组件化编程

## 模块与组件、模块化与组件化

1. 什么是组件？组件化变成和传统编程有什么优势？
   1. 传统变成缺点：依赖关系混乱，不好维护；代码复用率不高
      - 模块化解决 js 的混乱问题，一个模块就是一个 js 文件
   2. 组件：css + html 片段+ js + [静态资源：字体、图片、mp4 等]
      - 便于维护
      - 复用
   3. 组件听 vm 的，是实现应用中局部功能代码和资源的集合
2. 模块化和组件化
3. 组件两种形式
   1. 非单文件组件
      - 一个文件中多个组件
   2. 单文件组件【大项目一般用这个】
      - 一个文件中只包含一个组件

## 非单文件组件创建与使用

1. 组件创建【局部】
   1. 组件名语义化
   2. 创建组件
      - 类似于 Vue 实例的创建
      ```js
      const school = Vue.extend({
        el: "",
        data: {},
      })
      ```
      1. option "el" can only be used during instance creation with the `new` keyword.
         - 只有 new Vue 中才写 el
         - 组件不指定专门为谁服务
      2. The "data" option should be a function that returns a per-instance value in component definitions.
         - data 要写成函数，组件中要写成函数式
         - 写成对象有引用关系，不是独立的而是同一个
         - 函数式是独立的，新的对象
         - data 必须写成普通函数
      ```js
      const a = Vue.extend({
        data() {
          return {}
        },
      })
      ```
   3. 注册组件【局部注册】
      - 在 vm 中使用 components 对象注册，里面都是 k:v 的组合
      - k 才是组件名，a 是`const a = Vue.extend({})`这里的变量名
      - 推荐两个地方都写同样的名称， 直接就是组件名，k:v 简写成 k
      ```js
      new Vue({
        el: "#root",
        components: {
          school: a,
        },
      })
      ```
   4. 使用组件
      - 在`const a = Vue.extend({})`里面添加
        ```js
        template: `
        <div>
           <div>学校名称：{{schoolName}}</div>
           <div>学校地址{{address}}</div>
        <div/>
        `
        ```
      - tips：template 里面只能有一个根元素
      - 在 html 结构里面用组件名作为标签名创建标签
        ```html
        <school></school>
        ```
2. 创建局部组件**尝试**
   - 报错：Unknown custom element: <shool> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
   - school 写错成 shool 了
3. 创建的组件什么时候是双标签？什么时候是单标签？
   - 这里创建的无论是局部组件还是全局组件都是双标签
4. 之后所有要加到页面上的都直接加到组件上
   - 样式结构直接加到 template 上，事件处理函数直接写到 methods 里面
   - 先在 html 里面写，再写到 template 里面，否则只是``格式，没有代码补齐
5. 全局注册？
   - 不同 vm 之间的组件不能复用
   - Vue.component('组件名称',组件在哪也就是变量)
6. 创建全局组件**尝试**
   - 写的都没问题，因为顺序导致报错：Unknown custom element: <hello> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
   - **全局组件的注册要写在 Vue 实例创建的前面**

## 非单文件组件注意点

1. 组件名多个单词组成的，如何命名
   - 写在 components 里面的时候，应该用引号
   - 第一种，用-连接，在 Vue devtools 里面`my-school`会呈现为`MySchool`
   - 第二种，每个单词都首字母大写，也就是在 Vue devtools 中呈现的那样
     - 这种需要在脚手架环境中用
     - webpack 中用
   - 组件名肯定不能是内置的 HTML 元素名
2. 定义组件的时候如果变量 `const s = Vue.extend({})`里面用了 `name=''` 定义名称，那么标签名就必须和这个 name 一致，而不是 components 里面定义的组件名称
3. 可以双标签的形式，也可以单标签的形式
   - 但是单标签的形式需要在脚手架环境中用
4. 单文件组件的时候根本不写 Vue.extend？
5. 组件中的 data 需要写成函数式的，而且是普通函数

## 非单文件组件的嵌套

1. 组件里面定义 components，实现组建的嵌套
   ```js
   const school = Vue.extend({
     name,
     template: ``, // 同样student标签也应该写在这里面
     data() {},
     components: {
       student, // student的定义需要在school前面
     },
   })
   ```
2. 容器什么都不写
   - vm 绑定容器，直接在 vm 里面定义 template

## 非单文件组件总结

1. 组件就是构造函数？
   - 名为 VueComponent，Vue.extend 生成的
   - 为什么会自动调用？
     - 执行创建标签，Vue 解析的时候，就会创建组件的实例对象
     - 也就是通过 new VueComponent(options)创建
2. 每次调用 Vue.extend，返回的都是全新的 VueComponent
   - 判断两个组件是否相同
   - school === hello
   - shool.a = 99 判断 hello.a
3. this 指向
   1. 组件配置中
      - data 函数，methods 中的函数，watch 中的函数，computed 中的函数
      - 均指向 VueComponent 实例对象
   2. Vue 实例对象配置中-简称 vc
      - data 函数，methods 中的函数，watch 中的函数，computed 中的函数
      - 均指向 Vue 实例对象
4. 如何体现 vm 管理 vc？
   - vm 有$children 项，都是 VueComponent 实例对象
5. vm 和 vc？
   - 组件是可复用的 Vue 实例
   - el 是 vm 所特有的
6. 内置关系
   1. 构造函数.prototype（显式原型属性），`构造函数的实例对象.__proto__`（隐式原型属性）
      - 都指向原型对象，程序员从前者放东西，程序本身从后者获取东西
   2. 组件和 Vue 的内置关系
      - `VueComponent.prototype.__proto__ === Vue.prototype`
      - VueComponent 并不是直接就有的，Vue.extend 返回的就是 VueComponent 构造函数
   3. Vue 和 VueComponent 的关系
      1. vm 自身是没有$watch 的，顺着原型链找就有
   4. 实例的原型属性，永远指向自己缔造者的原型对象？
      1. `vm.__proto__ = Vue.prototype.__proto__ = Object.prototype` ✔
      2. `vm.__proto__.__proto__ = Object.prototype`❓
      3. `vc.__proto__ = VueComponent.prototype.__proto__ = Vue.protoype = Object`
         - 目的是让 vc 可以访问 Vue.prototype 上的属性方法
      4. `vc.__proto__.__proto__ = VueComponent.prototype.__proto__-.__proto__ = Vue.protoype.__proto__ = Object.prototype`
7. console.dir()是什么？

## 单文件组件

1. .vue 文件格式
   - 浏览器无法运行
     1. webpack
     2. vue-cli 脚手架
   - 命名-开发者工具
     1. 单词
        - 推荐首字母大写
     2. 多词
        - 推荐首字母大写
        - 可以短线连接小写
2. .vue 文件结构
   1. template 标签|组件结构
   2. script 标签|组件交互-数据、方法（computed、methods、watch）
   3. style 标签|组件样式
3. vscode 不认可.vue 文件格式，需要安装插件
   - Vetur 或者 Vue Language Features
   - 出现高亮等
4. 非单文件组件改单文件组件|单文件组件创建
   - 直接把去除 template 的 VueComponent 粘贴到 script 中
   - template 部分放到 template 标签中
   - 考虑到要用 import 引入，所以要将组件暴露
     - ES6 模块化！
       1. 分别暴露：`export const xx = Vue.extend({})`
       2. 统一暴露：`export {xx}`
       3. 默认暴露：`const xx = Vue.extend({}) 下一行 export default xx`
       - 暴露一个，往往用默认暴露，只要 `import xx fomr xxx`
       - 其他的都要 `import {xx} from xxx`
       - 直接写成： `export default Vue.extend({})`
       - 继续简写：`export defalut {name:xx,}` name 最好和外面的组件文件名保持一致
         - 也是要大写哦
5. App.vue
   - 汇总组件，
     1. script 标签中引入组件
        - `import Xx from './Xx'`
     2. 在 export default{components:{}}里面注册组件
        - `components:{Xx}`
     3. 在 template 标签中使用
        - template 里面必须要有根标签！
        - <template><div id='root'>xxx</div></template>
6. 组件听 vm 的，如何创建 vm？.vue 文件是组件，vm 必然不写在这里面
   - 脚手架开发创建 vm 写在 main.js 文件中
     - 入口文件，其他框架可能命名为 index.js 或 app.js
     - main.js 直接和 App.vue 这个汇总组件对话
       - 在 main.js 中引入
         - `import App from './App.vue'`
           - **浏览器中不能直接解析，需要放在脚手架中**
         - vue 后缀可有可无
     - vm 实例内容
       ```js
       new Vue({
         el: "#root",
         components: { App },
       })
       ```
   - el: "#root"还要容器，创建 index.html 文件
     - html 中先写好"#root"对应的容器
       - 在里面写<App></App>标签
       - 或者在 main.js 的 vm 中写 template:`<App></App`
     - main.js 之前需要引入 vue.js
     - 再引入 main.js 文件
       - 因为先加载模板

# 使用 Vue 脚手架

## 初始化 Vue 脚手架

1.  脚手架建议选择最新版本，不要 Vue 高版本+Vue 脚手架低版本
2.  Vue CLI——command line interface
3.  安装
    1. 配置 npm 淘宝镜像`npm config set registry https://registry.npm.taobao.org`或者 cnpm`npm install -g cnpm --registry=https://registry.npm.taobao.org`
    2. （全局安装）`npm install -g @vue/cli`
    3. 切换到对应目录创建项目`vue create xxx`
    4. 启动项目`npm run serve`
4.  cnpm 安装问题

    1.  //注册模块镜像
        npm set registry https://registry.npm.taobao.org
    2.  // node-gyp 编译依赖的 node 源码镜像  
         npm set disturl https://npm.taobao.org/dist
    3.  // 清空缓存  
         npm cache clean --force
    4.  // 安装 cnpm  
         npm install -g cnpm --registry=https://registry.npm.taobao.org

5.  vue-cli 项目结构
    - 直接在 vscode 下的 powershell 执行`vue create xxx`报错， PowerShell 的执行策略默认不允许运行脚本
      - 改成 cmd！
      - ctrl+`快捷键开启 vscode 终端，只在 vetur 插件 enable 的情况下有~
    - package.json 文件中配置`"scripts":{"serve":"vue-cli-service serve --open"}`，启动项目自动在浏览器打开
      - package.json 文件中说明了，我们执行`npm run serve`执行的其实是`npm run vue-cli-service serve`
      - 其他 bulid、lint 类似，built 是将项目构建成 html|css|js 文件，lint 是将代码进行语法检查
6.  启动 vue-cli 项目之后为什么只有本地能运行，显示 Network: unavailable

- allowedHosts，设置想要允许访问 dev server 的主机名列表
  ```js
  devServer: {
  host: "0.0.0.0",
  port: 8080, // 你想要的端口
  allowedHosts: [
  "host.docker.internal", // for docker
  "localhost",
  // 如果你想要其他主机名可以访问，你可以添加到这个列表
  ],
  },
  ```
- 本机 ip 地址通过 cmd 输入 ipconfig 查看，ipv4 后面的就是本机 ip 地址
- 并没有解决问题，`仍然是Network: unavailable`

6. 引入 public 文件夹下的文件，不用./，用`<%=BASE_URL_%>`
7. title 标签中，以 package.json 文件中的项目名称为标题
   - webpack 中的插件——看 webpack 视频
   - <title><%= htmlWebpackPlugin.options.title %></title>
8. noscript 标签？
   - 浏览器不支持 js 的时候显示
   - 可以设置为不支持
9. vm 中的 render 配置项？
   1. render
      - `render(createElement){return createElement('h1','h1标签中的内容')}`
      - 不用 this，写成箭头函数`render:h=>h(App)`
   2. 引入完整版 vue 而不是运行时 vue
      - vue.runtime.esm.js，没有 template complier，无法解析 vm 中的 template 属性
      - `import Vue from 'vue/dist/vue'`
      - vue 文件中的 template 标签，package.json 文件中有指定用于解析的库
   3. vue.runtime.esm.js 文件用到了 export 语法，浏览器不认识，用 vue.runtime.js，在浏览器运行精简版的 vue
10. vue 所有的 webpack 配置文件都不可见

- `vue inspect > output.js`查看
- 必须进入到项目里面
- webpack 基于 node.js，node 采用 common.js 的模块化
- 在 vue.config.js 文件中修改配置

## 补充

1. ref 属性
   1. 在 dom 元素上设置属性 ref，`ref="标记"`，如果是在子组件上加获取到的就是组件实例对象
   2. 通过`this.$refs.标记`获取
   3. 获取到的就是 dom 元素
2. props 配置
   1. 组件复用，动态传数据，组件接收外部传入的数据
   2. 不在 data 里面 return 直接指名需要动态传的数据
   3. 直接指名需要动态传的数据，写在与 data 同级的 props 属性里面【需要用的地方】
      1. 简单接收
         - `props:['数据 1','数据 2']`
         - 在标签的地方传入数据
      2. 对象接收，类型
         - `props:{'数据 1':String,'数据 2':Number}`
      3. 对象对象接收，类型+默认值+必要性
         - `props:{'数据 1':{type:String,required:true},'数据 2':{type:Number,default:22}}`
   4. v-bind 掌握！
      - 动态绑定，:传入的值是""里面的 js 表达式的结果
      - 直接传入的是字符串，数据可能出问题
   5. 在标签里面，直接作为属性进行传递`:数据 1=""`【传过去的地方，这里的 data 传到 props 指定的地方】
   6. props 优先于 data
   7. props 是只读的，需要修改，则将 props 里面的数据复制到 data 中，this
3. mixin 混入
   1. 两个组件共享同样的配置
   2. 局部混合
      1. 在 main.js 文件中定义，就是复用配置，data、methods、mounted 等等都可以
      2. .vue 文件组件里面的配置项，先引入，再配置 `mixins:[混合项]`
   3. mixin 的数据优先级不如原本的，但是 mixin 里面的生命周期钩子优先级高于原本的
   4. 全局混合
      1. main.js 文件中，先引入，再`Vue.mixin(混合项`)
4. 插件-增强 Vue
   1. 插件的本质是对象{}，里面必须要有 install(Vue,options){}，建议创建为 src/plugins.js
      - Vue 是第一个参数，后面的参数是插件使用者传递的数据
   2. 在 main.js 文件中，先引入`import plugins from './plugins'`，后使用 `Vue.use(plugins)`
   3. 插件里面可以写 全局过滤器、自定义全局指令、定义混入、给 Vue 原型上添加方法
5. 回忆全局过滤器？全局自定义指令？——全忘了
6. scoped 属性
   1. 和样式有关系
   2. 多个不同组件的样式，最终会汇总到一起，也就是会产生样式类名的冲突，后者覆盖前者
      - 不是看使用的顺序，看的是引入的顺序
   3. scoped，样式只属于当前组件
      - App.vue 不使用这个 scoped
      - App.vue 写样式，一帮都是多个组件公用的
7. lang 属性
   1. 样式指定样式语言，默认 css
   2. lang="less"，需要安装 less-loader
      - `npm i less less-loader`
      - 直接安装 less-loader 会是最新版本，会对照 webpack 的最新版本
      - 建议安装 7
   3. 查看版本` npm view less-loader versions``npm view webpack versions `

# Todo-list 案例

1. 习惯组件化编码流程
   1. 实现静态组件：抽取组件，使用组件实现静态页面效果
      - 按照功能点划分，组件名称：语义化，一般是多 个单词组合，每个单词首字母大写
      - 对于可复用的功能模块，建议拆分成组件
   2. 展示动态数据
      1. 数据的类型、名称是什么
      2. 数据保存在那个组件中
   3. 交互，从绑定事件监听开始
2. 静态页面组件化尝试
   1. 组件的 export default 里面不需要 name 具体命名，直接""
   2. src 文件夹不能改名，但是可以直接删除，删除之后将其他文件夹命名为 src
   3. 页面的整体样式放在那里？
      - 放在 App.vue 文件中
   4. 注意：很多个 item 用 v-for 写，而不是直接重复写多个
      - 涉及 todos 要用数组的形式存储
      - v-for = "todoObj in todos"，这个 todos 要和 data 里面的 property 名一致
      - 设置 key，动态绑定为 todoObj.id
3. 展示动态数据尝试
   1. 要存一堆要做的事，用数组存多个事，每个要做的事用对象表示
      - id,name,complete
      - id 用字符串，title 是字符串，complete 是 boolean 值
      - 数据写在 data 里面
   2. ToDoMain 展示这一堆要做的事情，所以在 ToDoMain 里面写
   3. ToDoMain 组件里面的数据如何传到 ToDoItem 里面？
      1. 用 props
   4. 通过 data 里面的 todos 里面的数据，控制勾选
      1. 用 v-bind
      2. 用 checked
   5. ToDoHeader 中获取输入，回车添加到 ToDoMain 里面
      1. 获取输入 TodoHeader 的 input 框
         1. 用 v-model 双向数据绑定，data 配置，初始为空
         2. 绑定事件@keyup.enter="add"
         3. 借助事件对象，按下回车的这个事件，event.target.value
            - 只有一个输入框，可以用这个
      2. add 事件处理，把输入文本，包装成对象
         1. 不能只是文本，需要有 id、thing、complete
         2. id？
            1. 服务器，数据库生成
            2. 单机，uuid->nanoid，生成唯一字符串
               - 安装`npm i nanoid`
               - 分别暴露，用{}导入，是一个函数，直接 nanoid()调用就会返回，要用的是其返回值！
                 - 在 script 里面引入`import {nanoid} from 'nanoid'`
         3. 最终包装成
            - `{id:nanoid,thing:e.target.value,complete:false}`
      3. ToDoHeader 里面添加的数据，怎么放到 ToDoMain
         1. 父子之间容易传递，兄弟之间如何传递数据？
         2. 三种高级方法，一种初级方法
            1. 初级：将数据放到父亲，兄弟都可以访问了
               1. 把 ToDoMain 的数据写到 App 上，就要把`:todos="todos"` 写到 App 的 template 里面（原本 ToDoMain 里面的属性都不要删改）
               2. 之后还要再 ToDoMain 里面通过`props:['todos']`接收
               3. App 和 ToDoMain 中都有数据，一个是 data，一个是 props
               4. 子组件向父组件传递数据
                  1. 父组件定义函数，并绑定给子组件，
                     - `methods:{receive(data){}}`一定要有数据传入
                     - `:receive="函数名"`
                     - 这个 receive 可以随意取名，只要不冲突就行了
                  2. 在子组件中用 props 接收，之后子组件实例上有，可以直接调用该函数
                     - `props:['receive']`
                  3. 就传递数据给父了
            2. 高级
      4. 清空输入框【在 ToDoHeader 组件的 add 中实现，而不是 receive】
         - 尽量不直接操作 dom
         - 需要在 data 中添加数据
           - data 只能是`data(){return {title:''}}`格式
           - 一是要写成函数形式，二是要 return 对象
         - 所以可以用 v-model 双向绑定
      5. 继续完善
         1. 输入为空的情况，不新增 todo【在 ToDoHeader 组件的 add 中实现，而不是 receive】
            - `if(this.title.trim()==='') return`
            - 什么也不返回
         2. props、data、methods、computed 等内容不能重名
         3. 冲突时的优先级顺序：props>data>computed
4. 启动项目浏览器自动打开网页
   1. 在 package.json 文件中添加配置项
   2. `script:{"serve":"vue-cli-service serve --open"}`
   3. 其实只要添加--open 即可
5. v-bind 可以绑定不存在的属性？
   1. 处理 JavaScript 对象或 Vue 组件的数据时，你需要确保你正在绑定的属性已经存在。
   2. 当尝试使用 v-bind 绑定一个不存在的属性时，Vue 会创建并添加这个新的属性到相应的 HTML 元素上
6. 勾选操作引起数据变化——组件间通信
   1. 获取 id，将 complete 取反
      - input 框，添加 `change` 事件监听，函数可以传入 `todo.id`
      - 以及原本就有的 `checked` v-bind 绑定为 `todo.complete`
   2. 数据写在 App 里面，更改 complete 属性的函数写在 App 里面
      - 数据在哪里，操作数据的方法就在哪里
      - `methods:{函数名(data){}}`
      - !!在 App 里面写函数，但是在 ToDoItem 里面要调用函数！所以要再 methods 里面写函数，来调用那个 App 里面的函数
        - ToDoItem 里面通过 this.函数名调用，因为函数都是在组件实例上的
      - 在属性的事件处理函数中，不能写 props 里面的函数？props 里面的函数需要用 this 调用，methods 定义的函数可以直接调用
   3. 因为要对 ToDoMain 里面的 ToDoItem 操作，要将爷爷的数据传递给孙子，要一层层传，先给父，父再给孙
      - App 里面给 ToDoMain 绑定，传递函数
      - 再在 ToDoMain 里面给 ToDoItem 绑定，传递函数
   4. 分别都要用 props 接收
      - 逐层传递
7. 勾选操作引起数据变化
   1. 直接去掉:checked 和@change，也不需要对应的所有实现
   2. 因为 input 的 type 是 checkbox，直接双向绑定，设置`v-model="todo.complete"`就可以实现这个功能
   3. 解释
      1. v-model 是双向数据绑定，可以初始化勾选状态
      2. 每次更新，都会
      3. 因为 ToDoItem 里面双向绑定的 todo.complete 中 todo 是 props 传入的，props 是只读的，不能修改。但是这个不能修改指的是深层次的，浅层次的可以。不建议使用。
8. 删除 todo 项
   1. 功能描述：(1)悬浮高亮效果，(2)悬浮显示编辑和删除按钮，(3)删除按钮删除本项
   2. (2)当 li:hover 时给 button 设定样式为显示
   3. (3)事件绑定
      1. 在 App 里面写数据项的删除
      2. 在 ToDoItem 里面写一些其他的判断操作，如 confirm ，类似于 alert
         - 点击确定，返回值为真，取消为假
      3. !!!永远记得，在接收的地方，要写一个新的函数！便于一些特殊的操作；之后再用 this 调用 App 传过来的函数
9. （这下面都是自己做的）底部计数完成个数和总数
   1. computed 中的属性必须写成函数的形式，而且如果要使用 this，只能是普通函数不能是箭头函数
   2. 直接用计算属性，设置 done 和 all，直接根据 todos 来更新，只需要传递 todos，不需要传递 deleteToDo
   3. SGG：done 可以用 filter 函数也可以用 reduce 函数实现
   4. 数组有哪些方法
      - forEach filter reduce slice splice unshift shift reverse
      - concat every fill find copyWithin entries findIndex findLastIndex flat flatMap group groupToMap cludes indexOf lastIndexOf join keys map pop push reduceRight some sort toLocaleString toReversed tosorted toSpliced toString values with
10. 全选按钮
    1. 根据前面的计算属性 done 和 all 实现，其他开关来控制总的开关，写在函数里面，要()调用获取返回值
    2. 通过监听 change 事件，来控制其他开关
       - 写 if 语句，监听 change 事件的 e.target.checked，对 todos 每一项，修改 complete 值
    3. 完善
       1. 当任务列表为空时，将全选按钮为 false
       2. 好像有点难实现！？因为要监听的不只是一个按钮
       3. 应该把这个全选按钮放到 data 里面？放到 computed 里面？
11. 清除已完成任务
    1. （错误答案）直接在 footer 里面，给这个按钮绑定点击事件，通过 filter 重新给 todos 传值，错了，因为不能修改 props
       - `[Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "todos"`
    2. 重新考虑，因为这是要直接操作 todos 数据，在 App 里面，所以还是那套流程
       - 在 Footer 那边遍历 todos，查看 complete 为 true 的，props 传递过来 deleteToDo，并调用，传入 id
    3. 可以 confirm 一下
    4. 如果根本没有已选的？要使点击无效，或者弹出没有已完成的任务
       - 添加逻辑，统计已完成个数，为 0 则 alert 并 return
       - 而且是在最前面实现
12. 全选按钮待完善
13. 继续完善
    1. all 为 0，footer 直接不展示整个模块，直接通过 v-show 即可绑定，因为 all 为 0 理解为 false，其余 1-n 理解为 true
    2. 应该把全选和取消全选写在 App.vue 中，因为所有对 todos 的操作都应该如此
       - othersChange 函数应该重写?
    3. ！！！`:checked="changeAll()" @change="othersChange"`
       - 这两个可以合并
       - v-model 双向绑定，v-model="isAll"，isAll 是一个计算属性，不能简写
       - 要写 get 和 set
       - 理解为什么将两个合并

# Todo-list 案例总结

1. 组件化编码流程：
   1. 拆分静态组件：组件要按照功能点拆分，命名不要与 html 元素冲突。
   2. 实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用
      - 用：get、set
      1. 一个组件在用：放在组件自身即可。
      2. 一些组件在用：放在他们共同的父组件上（_状态提升_）。
         - header 用到了 main 的 item，向里面插入
   3. 实现交互：从绑定事件开始。
2. props 适用于：
   1. 父组件==>子组件通信
   2. 子组件==>父组件通信（要求父先给子一个函数）
3. 使用 v-model 时要切记：v-model 绑定的值不能是 props 传过来的值，因为 props
   是不可以修改的！
4. props 传过来的若是对象类型的值，修改对象中的属性时 Vue 不会报错，但不推
   荐这样做。

# 浏览器本地存储-原生 js 不需要 vue

1. localStorage
   1. key、value 键值对，都必须是字符串
      - 只要不是都会自动调用 toString 方法
   2. `localStorage.setItem(字符串，字符串)`、`localStorage.getItem(字符串)`、`localStorage.removeItem(字符串)`、`localStorage.clear(不要参数)`
      - `window.localStorage`
      - set 键名存在，则更新其对应的值。
   3. 本地存储对对象怎么处理？
      - 存的时候`JSON.stringify()` 将对象转换成字符串的形式，而且认得出
      - 读的时候`JSON.parse()`
   4. 读一个不存在的是 null
   5. JS0N.parse(null)的结果依然是 nul。
   6. 关闭浏览器不会消失数据
   7. 用户主动清空缓存数据会消失
2. sessionStorage
   1. 方法都和 localStorage 一样
   2. 会话？浏览器关了就没了
3. 以上两个统称 webStorage
   - 存储内容大小一般支 5MB 左右（不同浏览器可能还不一样）

# ToDoList 案例改成本地存储

1. 什么时候存？？
2. watch 监视 todos，App.vue 里面写
   - `watch:{todos(value){}}`
3. 不是直接 setItem 就好，要`JSON.stringify(value)`
4. 初始化的时候 todos 不是[]，而是从 localStorage 读入，要解析`JSON.parse('todos')`
   - 第一次用的时候 todos 是空的，要分情况讨论，有两种写法
     - `todos:JSON.parse(localStorage.getItem('todos'))?[]:JSON.parse(localStorage.getItem('todos'))`
     - `todos:JSON.parse('localStorage.getItem('todos'))||[]`
   - 注意解析和获取的顺序！
5. 还要记录勾选的情况
   1. 应该深度监视！
   ```js
   todos(value){
            return localStorage.setItem('todos',JSON.stringify(value))
        }
   // 改写成完整版形式
   todos:{
      deep:true,
      handler(value){
            return localStorage.setItem('todos',JSON.stringify(value))
      }
   }
   ```

# 组件的自定义事件

## 简单实用-绑定

1. 区别于 js 里面的内置事件（click、keyup、mouseenter 等
   - 内置事件是给 html 元素用的
2. 自定义事件是给组件用的
   1. v-on 是给组件实例对象绑定事件
   2. 组件标签上写`v-on:随便名字=""`
   3. 在组件实例对象中触发事件`this.$emit('随便名字')`
3. 绑定自定义事件，实现子给父传数据
4. 可以在父组件中获取子组件实例对象
   1. `this.$refs.student`
   2. Vue.app 里面调用，mounted 里面写`this.$refs.student.$on('随便名字',this.methods里面的函数)`，灵活性强，可以延迟绑定
      - 不用 methods 里面的函数，又要用到 Vue 组件实例，可以把函数写成箭头函数，这时候的 this 就是 Vue 组件实例
   3. 为什么函数要写在 methods 里面，因为可能用到 this 也就是 Vue 组件实例，如果直接在`this.$refs.student.$on`里面写，this 会是 student 组件实例而不是 Vue
      - 谁触发的事件，this 就是谁
5. 触发一次之后不能再触发了
   - `this.$refs.student.$once('随便名字',this.methods里面的函数)`
   - 再组件标签里面写就是`v-on:随便名字.once=""`

## 解绑自定义事件

1. 解绑一个自定义事件`this.$off('随便名字')`
2. 解绑多个自定义事件`this.$off(['随便名字1','随便名字1'])`
3. 解绑多个自定义事件`this.$off()`
4. 销毁组件实例对象，`this.$destory()`，销毁后所有实例自定义事件都失效，原生的事件不受影响（但是不会再更新绑定）

## 自定义事件注意点

1. 把组件上的事件理解为原生事件`@click.native`
2. 一种组件间通信的方式，适用于：子组件=>父组件
3. 使用场景：A 是父组件，B 是子组件，B 想给 A 传数据，那么就要在 A 中给 B 绑定自定义事件(事件的回调在 A 中)。
   - 事件函数的定义要在父组件中定义
4. 绑定自定义事件：
   1. 第一种方式，在父组件中：<Demo@atguigu="test"/>或<Demo v-on:atguigu="test"/)
   2. 第二种方式，在父组件中：
      <Demo ref="demo"/>
      mounted（）{
      this.Srefs.xxx.Son('atguigu',this.test) 3.若想让自定义事件只能触发一次，可以使用 oce 修饰符，或$once 方法。
5. 触发自定义事件：`this.$emit('atguigu',数据)`
6. 解绑自定义事件 `this.$off('atguigu')`
7. 组件上也可以绑定原生 DOM 事件，需要使用 native 修饰符。
8. 注意：通过 `this.$refs.xxx.on('atguigu',回调)`绑定自定义事件时，回调要么配置在 methods 中，要么用箭头函数，否则 this 指向会出问题！

# todolist 案例中所有子向父传函数全改为自定义事件

1. App.vue 文件中 ToDoHeader 组件的`:addToDo=:receive`改成`@addToDo=:receive`
   - 给 ToDoHeader 组件添加自定义事件，自定义事件的名字叫 addToDo，且事件的回调函数叫 receive
2. 之后 vue 文件中 ToDoHeader.vue 文件中不需要再用 props 接收父组件传过来的数据
   - 不要 props:['addToDo']
3. 添加也不再是调用函数`this.addToDo(todoObj)`，改成`this.$emit('addToDo',todoObj)`
   - $emit()，前面这个是事件的名字，后面那个是传值，所以有没有第二个参数看情况
   - 之后可以在 vue 模块看到事件的情况，再 timeline 里面点击一些时间点，右侧就会显示
   - 或者直接是 component event 组件事件
4. 因为父给子传函数是为了子给父传数据，所以这些都可以改成自定义事件，但是父给子传数据是不可以改成自定义事件的！
   1. 其实就是 App.vue 中写的所有的组件的`:事件="事件"`，都改成@
   2. App 要传到 ToDoItem 怎么传？爷传到父，再父传到孙？
      - 直接传递是传不了的！

# 全局事件总线

1. 可以实现任意组件间的通信，兄弟之间的通信实现了
2. 事件的发布和订阅，实现解耦和灵活的通信方式
3. Vue 中，通过创建一个全局的 Vue 实例来充当事件总线
4. 发布订阅模式，$emit和$on
5. 复习
   1. VueComponent 不是程序员生成的，是 Vue.extend 生成的
   2. `VueComponent.prototype.__proto__ = Vue.prototype`
   3. 也就是只能 VueComponent 实例对象放到 Vue 的原型对象上，VueComponent 放不了，因为每次调用都是生成新的
6. 怎么 new 一个组件实例对象？
   - `const Demo = Vue.extend({})`——返回一个 VueComponent 类
   - `const d = new Demo()`——创建 VueComponent 类实例
7. 复习组件使用步骤
   1. 定义、创建组件
   2. 注册组件
   3. 使用组件-写标签
8. 安装全局事件组件步骤
   1. 在 main.js 中 new 一个组件实例对象，并在 Vue 的原型上添加一个属性，值为这个组件实例对象
      - 总之要让所有的组件都看得见
      - 改写：直接用 Vue 实例对象，在 Vue 实例对象上写 beforeCreate 生命周期函数
   2. 将这个组件实例对象或者 Vue 实例对象(this)，添加到 Vue 原型上。在 main.js 文件中
      - `Vue.prototype.$bus = this`
      - 可以是任意名称，一般用$bus
9. 之后就可以在子组件上使用（这三个都在 Vue 的原型对象上）
   1. `this.$bus.$emit('xx',data)`注册回调，提供数据
   2. `this.$bus.$on('xx',(data)=>{})`调用触发，接收数据
   3. `this.$bus.$off('xx')`关闭
10. 组件销毁之前，结束调用
11. 总结
    1. 一种组件间通信的方式，适用于任意组件间通信。
    2. 安装全局事件总线：
    ```js
    new Vue({
      beforeCreate() {
        Vue.prototype.$bus = this
        //安装全局事件总线，bus就是当前应用的vm
      },
    })
    ```
    3. 使用事件总线：
       1. 接收数据：A 组件想接收数据，则在 A 组件中给$bus 绑定自定义事件，事件的回调留在 A 组件自身。
       ```js
       methods(){
         demo(data){...}
       },
       mounted(){
         this.$bus.on('xxxx',this.demo)
       }
       ```
       2. 提供数据：`this.$bus.$emit('xx',数据)`
    4. 最好在 beforeDestroy 钩子中，用$off 去解绑当前组件所用到的事件。

# todolist 案例-全局事件总线

1. ToDoItem 和 App 之间需要逐层传递数据，所以用全局事件总线
2. 按顺序
   1. main.js 安装全局事件总线，beforeCreate
   2. 收数据的(App.vue)，mounted 里面$bus.$on 绑定事件总线的自定义事件
      1. 第一个参数是事件
      2. 第二个参数是回调函数
   3. 在 ToDoItem 里面触发，调用传数据

# 消息订阅与发布

1. 安装库
   - `cnpm i pubsub-js`
2. 引入
   - `import pubsub from 'pubsub-js'`引入的是一个对象
3. 订阅——对应于 on
   - 接收数据的 vue 文件，mounted 里面`this.pubId = pubsub.subscribe('hello',function(a,b){})`a 是消息名，b 是数据
4. 发布——对应于 emit
   - 提供数据的 vue 文件，在函数里面`pubsub.publish('hello',data)`
5. 解绑
   - 接受数据的 vue 文件，beforeDestroy 里面`pubsub.subscribe(this.pubId)`
6. pubsub.subscribe 回调建议使用箭头函数的形式，使用组件的 this
7. 或者把回调函数写到组建的 methods 里面

# todolis 案例-消息订阅实现

1. App.vue 需要数据，ToDoItem 提供数据
2. 不用的数据用下划线占位
3. pubsub 第三方库，timeline 看不到事件

# todolist 编辑

1. todo 加一个属性，isEdit
2. $set()添加的属性才是响应式的
   - 只在第一次编辑的时候添加属性
   - 属性的存在性判断：`hasOwnProperty('')`
3. 点击编辑按钮，将 input 聚焦，ref 属性
   1. 给 input 添加 ref 属性
   2. 通过`this.$refs.ref属性值.focus()`聚焦
4. 点击的时候页面上还没有 input 框
   - $nextTick，其指定的回调函数，会在 dom 更新之后执行
   - 将上述聚焦操作，放在这里面
   - 等 isEdit 值改变，导致 input 框出现之后，才能聚焦

# 动画效果

1. click 控制显示与否，取反
2. 动画效果，keyframs，from-to，transform
3. transition 标签，来的时候动画类名`v-enter-active`，离开时候的动画类名`v-leave-active`，隐藏和显示动画；标签设置 name 属性则，`name值-enter-active`；apper 属性值设置为 true，`:apper="true"`或者`appear`；Vue 自动加类名；transition 不是真正的标签
4. 前提是控制隐藏于显示
5. CSS 过渡和动画效果通常需要应用在支持动画属性的元素上，例如 block 元素或具有布局的元素
6. `v-enter`，`v-enter-to`，`v-leave`，`v-leave-to`，在标签下设置 transition 属性加时间 linear 实现，或者与`v-enter-active`，`v-leave-active`设置 transition 属性加时间 linear 实现
   - 可以组合选择使用同一个样式
7. 多个元素同样动画效果，`transition-group`标签，一个去一个会
8. animate.css，安装`cnpm install animate.css`，animate.style 网站
9. 有了这个库，直接在 transition 或者 transition-group 标签上添加 enter-active-class 或 leave-active-class 属性指定
10. noty 库，安装`cnpm install noty`，引入`import Noty from 'noty'`和`import 'noty/lib/noty.css'`，使用`new Noty({}).show();`，注意版本
11. 其他库重装，总会引起 nanoid 库出错，需要重装 nanoid

# 配置代理

1. 解决 ajx 请求跨域问题
2. nodejs 写的 js 文件格式的服务器，通过`node 文件名`启动服务器，`http://localhost:5000/students`，和`http://localhost:5001/cars`
   1. nodejs 写的很简单
   2. 第一步 require
      - `const express = require('express')`
      - 为什么 require 里面是 express 字符串？
   3. 第二步调用
      - `const app = express()`
   4. 第三步 use 函数
      - 这写都是在服务器里面写，才能获取的
      - `app.use((request,response,next)=>{console.log(request.url);console.log(request.get('Host'));next()})`
   5. 第四步 get 请求
      - `app.get('路径',(request,response)=>{response.send(数组)})`
   6. 第五步 listen 监听
      - `app.listen(端口号,(err)=>{if(!err) console.log()})`
3. 常用发送 ajax 请求的方式
   1. xhr，new XMLHttpRequest(), xhr.open(), xhr.send()，不常用，一般都封装后使用，如下面两个
   2. jQuery，$.get, $.post，体积大，是专业操作 dom 的
   3. axios，Promise 风格，支持请求响应拦截器，体积小，推荐
   4. fetch，和 xhr 同级的，Promise 风格，致命问题：两层 Promise，兼容性问题 IE 用不了
4. 安装 axios，`cnpm install --save axios`
5. 引入 axios，`import axios fron 'axios'`
6. axios 获取请求，`axios.get('xxx').then((response)=>{}).catch((error)=>{console.log(error.message)})`
7. 跨域：cors、access-control-allow-origin，违背同源策略，协议、域名、端口号
8. CORS、JSONP、
   1. JSONP，script 标签 src 属性，前后端配合，只能解决 get 请求问题
   2. CORS，后端
   3. proxy 代理服务器
      - 和前端所处端口号一样，发给代理服务器，代理服务器转发给其他端口号
      - 服务器和服务器之间，不用 ajax，有浏览器有 window 才有 fetch，nodejs 里面创建不了 xhr，最传统的 HTTP 请求
      1. nginx，学习成本比较高，对后端技术有要求
      2. vue-cli 开启
9. 对 vue-cli 进行配置，写 `vue.config.js` 文件，查看 vue 官网的配置参考，`devServer.proxy`设置，vue-cli 帮本地项目开了一台服务器
   1. 方式一：`devServer{proxy: "http://localhost:5000"}`
      1. public 里面有的 8080 端口都有，8080 有的代理服务器不会转发，无法灵活控制是否请求代理
      2. 不能配置多个代理
      3. ajax 请求的时候直接发给 8080 即可！
   2. 方式二：
      ```js
      devServer:{
         proxy:{
            '/api':{ // 请求前缀，走代理就加/api，不走就不加/api，紧跟端口号！
               target:'http://localhost:5000',// 请求地址，基础路径
               ws:true,// 用于支持websocket
               changeOrigin:true,// 请求头中的Host值，true假端口号和后端一样，false真实端口号，默认true
            },
            '/xxx'{} // 其他，匹配所有以/xxx开头的请求路径
         }
      }
      ```
      - 要在 target 里写服务器端口号
      - 要保证 ajax 请求，写上了基础路径/api 则用的是代理，没加就是直接的前端 public 的
      - ajax 请求，同样是写 8080
      ```js
      proxy:{
         pathRewrite:{'^/api':''}
      }
      ```
      1. 可以配置多个代理，灵活控制请求是否走代理
      2. 配置繁琐，ajax 请求资源的时候必须要加前缀

# 静态组件

1. 组件化编码第一步，拆分静态组件