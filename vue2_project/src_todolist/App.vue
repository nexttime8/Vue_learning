<template>
    <div>
        <div class="todo-container">
        <div class="todo-wrap">
            <ToDoHeader @addToDo="receive"/>
            <ToDoMain 
                :todos="todos" 
            />
            <!-- :checkToggle="checkToggle" -->
            <!-- :deleteToDo="deleteToDo" -->
            <ToDoFooter
                :todos="todos" 
                @deleteToDo="deleteToDo"
                @checkAllToDo="checkAllToDo"
            />
            <FootNotification/>
        </div>
    </div>
    </div>
</template>

<script>
import ToDoHeader from './components/ToDoHeader'
import ToDoFooter from './components/ToDoFooter'
import ToDoMain from './components/ToDoMain'
import FootNotification from './components/FootNotification'

export default {
    // [Vue warn]: option "el" can only be used during instance creation with the `new` keyword.
    name:"ToDo-List",
    components:{
        ToDoHeader,
        ToDoFooter,
        ToDoMain,
        FootNotification,
    },
    data(){
        return {
            todos:JSON.parse(localStorage.getItem('todos'))?JSON.parse(localStorage.getItem('todos')):[]
        }
    },
    methods:{
        receive(data){
            this.todos.unshift(data)
        },
        checkToggle(id){
            this.todos.forEach((todo)=>{
                if(todo.id === id) todo.complete = !todo.complete                                
            })
        },
        deleteToDo(id){
            this.todos = this.todos.filter(todo=>todo.id!==id)
        },
        updateToDoThing(id,value){
            this.todos.forEach((todo)=>{
                if(todo.id===id){
                    todo.thing = value
                }
            })
        },
        checkAllToDo(check){
            this.todos.forEach((todo)=>todo.complete=check)
        }
    },
    mounted(){
        this.$bus.$on('checkToggle',this.checkToggle)
        this.$bus.$on('deleteToDo',this.deleteToDo)
        this.$bus.$on('updateToDoThing',this.updateToDoThing)
    },
    beforeDestroy(){
        this.$bus.$off('checkToggle')
        this.$bus.$off('deleteToDo')
        this.$bus.$off('updateToDoThing')
    },
    watch:{
        todos:{
            deep:true,
            handler(value){
                return localStorage.setItem('todos',JSON.stringify(value))
            }
        }
    }
}

</script>

<style lang="css">
    body {
        background: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-common{
        color: #fff;
        background-color: #c1d4ec;
        border: 1px solid #8db5e6;
        margin-right: 5px;
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus {
        outline: none;
    }

    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>