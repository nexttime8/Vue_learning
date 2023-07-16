<template>
  <div class="todo-footer">
        <label>
          <input type="checkbox" :checked="changeAll()" @change="othersChange"/>
        </label>
        <span>
          <span>已完成{{ done }}</span> / 全部{{ all }}
        </span>
        <button class="btn btn-danger" @click="deleteDone">清除已完成任务</button>
      </div>
</template>

<script>
    export default {
        name:"",
        props:['todos','deleteToDo'],
        computed:{
            done:function(){
                return this.todos.filter((todo)=>todo.complete).length
            },
            all:function(){
                return this.todos.length
            },
            
        },
        methods:{
            changeAll:function(){
                if(this.done === this.all){
                    return true
                }else{
                    return false
                }
            },
            othersChange:function(e){
                if(this.todos.length===0){
                    e.target.checked = false
                    return
                }
                if(e.target.checked === true){
                    this.todos.forEach((todo)=>todo.complete=true)
                } else {
                    this.todos.forEach((todo)=>todo.complete=false)
                }
            },
            deleteDone:function(){
                // this.todos = this.todos.filter((todo)=>!todo.complete)
                if(this.todos.filter((todo)=>todo.complete).length===0){
                    alert('没有已完成的任务')
                    return
                }
                if(confirm('确定要删除已完成的任务吗？')){
                    this.todos.forEach((todo)=>{
                    if(todo.complete)this.deleteToDo(todo.id)
                })
                }
            }
        }
    }
</script>

<style scoped lang="css">
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }

</style>