<template>
    <div>
        <li>
            <label>
              <input type="checkbox" :checked="todo.complete" @change="checkToDo(todo.id)"/>
              <!-- 可以实现控制complete值 -->
              <!-- <input type="checkbox" :checked="todo.complete"/> -->
              <span>{{ todo.thing }}</span>
            </label>
            <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
            <!-- 不要行内样式，通过css控制显示 -->
            <!-- <button class="btn btn-danger" style="display:none">删除</button> -->
          </li>
    </div>
</template>

<script>
    export default {
        name:"",
        props:['todo','checkToggle','deleteToDo'],
        methods:{
            checkToDo(id){
                this.checkToggle(id) // 只会在组件实例上
            },
            handleDelete(id){
                if(confirm('确定要删除吗？')){
                    this.deleteToDo(id)
                }
            }
        }
    }
</script>

<style scoped lang="css">
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    li:hover {
        background-color:#e4dfdf;
    }

    li:hover button {
        display: block;
    }

</style>