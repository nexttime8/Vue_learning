<template>
  <div class="todo-footer" v-show="all">
        <label>
          <input type="checkbox" v-model="isAll"/>
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
        props:['todos','deleteToDo','checkAllToDo'],
        computed:{
            done(){
                // return this.todos.filter((todo)=>todo.complete).length
                return this.todos.reduce((pre,cur)=>pre+(cur.complete?1:0),0)
            },
            all(){// 也可以直接插值语法写{{todos.length}}
                return this.todos.length
            },
            isAll:{
                get(){
                    return this.done === this.all && this.all > 0
                },
                set(value){
                    this.checkAllToDo(value)
                }
            }
        },
        methods:{
            // changeAll:function(){ // 可以直接写成计算函数，可以通过其他计算函数计算得到
            //     if(this.done === this.all){
            //         return true
            //     }else{
            //         return false
            //     }
            // },
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