<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="title"/>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name:"",
        props:['addToDo'],
        data(){
            return {
                title:''
            }
        },
        methods:{
            add(){
                // console.log(e.target.value)
                if(this.title.trim()==='') return
                const todoObj = {id:nanoid(),thing:this.title,complete:false}
                this.addToDo(todoObj)
                // e.target.value = '' // 为了不直接操作dom，添加data属性title，双向绑定
                this.title = ''
            }
        }
    }
</script>

<style scoped lang="css">
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
            0 0 8px rgba(82, 168, 236, 0.6);
    }

</style>