<template>
  <div class="todo-main">
     <ToDoItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"/>
  </div>
</template>

<script>
    import ToDoItem from '../ToDoItem'
    export default {
        name:"",
        data(){
            return {
                todos:[
                    {id:'001',thing:'学习VueSGG',complete:true},
                    {id:'002',thing:'学习ES6',complete:false},
                    {id:'003',thing:'学习尚品汇',complete:false},
                ]
            }
        },
        components:{
            ToDoItem,
        },
    }
</script>

<style scoped lang="css">
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }

</style>