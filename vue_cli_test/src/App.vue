<template>
    <div>
        <button @click="getStuData">获取学生数据</button>
        <button @click="getCarData">获取汽车数据</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    // [Vue warn]: option "el" can only be used during instance creation with the `new` keyword.
    name:"proxy",
    methods:{
        getStuData(){
            axios.get('http://localhost:8080/api1/students').then((response)=>{
                console.log(response.data)
                console.log(response.url)
            }).catch((error)=>{
                console.log(error.message)
            })
        },
        getCarData(){
            axios.get('http://localhost:8080/api2/cars').then((response)=>{
                console.log(response.data)
            }).catch((error)=>{
                console.log(error.message)
            })
        },
    }
}

</script>

<style scoped>

</style>