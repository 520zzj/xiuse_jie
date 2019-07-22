<template>
    <div class="pageOne">
         <v-touch  v-on:swipeleft="menuTwo">
             <div class="page">页面1</div>
         </v-touch>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        menuTwo(){
            this.$router.push({"path":"/pageTwo"})
        }
    }
}
</script>
<style>
.pageOne .page{
    width:100%;
    height: 400px;
    background:green;
}
</style>


