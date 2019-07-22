<template>
    <div class="test">
        <van-tabs v-model="active" swipeable animated>
            <van-tab v-for="(elem,index) in navList" :title="elem" :key="index">
                内容 {{ index }}
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    data(){
        return{
            navList:["菜单1","菜单2","菜单3","菜单4"]
        }
    }
}   
</script>
<style>

</style>


