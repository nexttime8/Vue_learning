<template>
    <div>

    </div>
</template>

<script>
import Noty from 'noty'
import 'noty/lib/noty.css'
export default {
    name:"",
    methods:{
        showNotification(type,text){
            new Noty({
                type,
                text: `${text}`,
                layout: "bottomRight",
                timeout: 2000,
                progressBar: true,
                closeWith: ["click"],
                theme: "metroui",
            }).show()// show要加上括号！
        },
        deleteNotification(type){
            this.showNotification(type,"Task was successfully deleted")
        },
        addNotification(type){
            this.showNotification(type,"Task was successfully updated")
        }
    },
    mounted(){
        this.$bus.$on('deleteNotification',this.deleteNotification)
        this.$bus.$on('addNotification',this.addNotification)
    }
}
</script>

<style scoped>

</style>