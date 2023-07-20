<template>
  <div class="todo-main">
     <ToDoItem 
        v-for="todoObj in todos" 
        :key="todoObj.id" 
        :todo="todoObj" 
     />
     <!-- :checkToggle="checkToggle"
    :deleteToDo="deleteToDo" -->
  </div>
</template>

<script>
    import ToDoItem from '../ToDoItem'
    export default {
        name:"",
        components:{
            ToDoItem,
        },
        props:['todos']
        // ,'checkToggle','deleteToDo'
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