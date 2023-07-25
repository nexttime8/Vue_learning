<template>
    <!-- <transition name="todo" appear> -->
        <li>
            <label>
              <input type="checkbox" :checked="todo.complete" @change="checkToDo(todo.id)"/>
              <!-- 可以实现控制complete值 -->
              <!-- <input type="checkbox" :checked="todo.complete"/> -->
              <span v-show="!todo.isEdit">{{ todo.thing }}</span>
              <input class="clear" type="text" v-show="todo.isEdit" @blur="updateToDo(todo,$event)" ref="getFocus">
            </label>
            <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
            <button class="btn btn-common" @click="handleUpdate(todo)">编辑</button>
            <!-- 不要行内样式，通过css控制显示 -->
            <!-- <button class="btn btn-danger" style="display:none">删除</button> -->
          </li>
    <!-- </transition> -->
</template>

<script>
    export default {
        name:"",
        props:['todo'],
        // ,'checkToggle','deleteToDo'
        methods:{
            checkToDo(id){
                // this.checkToggle(id) // 只会在组件实例上
                this.$bus.$emit('checkToggle',id)
            },
            handleDelete(id){
                if(confirm('确定要删除吗？')){
                    // this.deleteToDo(id)
                    this.$bus.$emit('deleteToDo',id)
                    this.$bus.$emit('deleteNotification',"error")
                }
            },
            handleUpdate(todo){
                if(todo.hasOwnProperty('isEdit')){
                    todo.isEdit = true
                }else{
                    this.$set(todo,'isEdit',true)
                }
                this.$nextTick(function(){
                    this.$refs.getFocus.focus()
                    this.$refs.getFocus.value = todo.thing
                })
            },
            updateToDo(todo,e){
                todo.isEdit = false
                if(e.target.value.trim()==='') {
                    alert('请勿输入空字符')
                    return 
                }
                this.$bus.$emit('updateToDoThing',todo.id,e.target.value)
            }
        },
    }
</script>

<style scoped lang="css">
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
        background-color: #fff;
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

    li > label > input[type=text]:nth-child(3) {
        position: relative;
        outline: none;
        border: none;
        line-height: 21px;
        width: 400px;
        height: 21px;
        font-size: 16px;
        /* background-color: #d8e8f8; */
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

    /* .todo-enter-active{
        animation:todoAnimation 0.5s linear;
    }

    .todo-leave-active{
        animation:todoAnimation 0.5s linear reverse;
    }

    @keyframes todoAnimation {
        from{
            transform: translateX(200%);
        }
        to{
            transform: translateX(0);
        }
    } */

</style>