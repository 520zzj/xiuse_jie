<template>
    <div class="test">
        <mt-button type="primary" @click="mytoast">primary</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{ }
       
    }, 
    methods:{
            mytoast(){
                console.log(this)
              this.$toast({
                message: '提示',
                position: 'bottom',
                duration: 2000,
                className:'fisttoast',
                iconClass:"iconfont icon--2"
                });
            }
        }
}
</script>
<style>
    .fisttoast{
        background-color:#fff !important;
        color:blue !important;
        font-size:36px !important;
        border:1px solid green;
    }
</style>