<template>
    <div class="home">
     <div class="tabContent">
         <keep-alive>
         <router-view></router-view>
         </keep-alive>
     </div>
     <!-- 使用vantui的tab组件 -->
        <div class="tabbar">
            <van-tabbar route  active-color="red">
                <van-tabbar-item replace to="/square"> 
                    <span>广场</span>
                    <img slot="icon" slot-scope="props" :src="props.active ? icon[0].active : icon[0].normal">
                </van-tabbar-item>
                <van-tabbar-item replace to="/ranking"> 
                     <span>排行</span>
                    <img slot="icon" slot-scope="props" :src="props.active ? icon[1].active : icon[1].normal">
                </van-tabbar-item>
                <van-tabbar-item replace to="/guard" >
                     <span>护卫队</span>
                    <img slot="icon" slot-scope="props" :src="props.active ? icon[2].active : icon[2].normal">
                </van-tabbar-item>
                <van-tabbar-item replace to="/find"> 
                     <span>发现</span>
                    <img slot="icon" slot-scope="props" :src="props.active ? icon[3].active : icon[3].normal">
                </van-tabbar-item>
                <van-tabbar-item replace to="/me"> 
                     <span>我</span>
                    <img slot="icon" slot-scope="props" :src="props.active ? icon[4].active : icon[4].normal">
                </van-tabbar-item>
                </van-tabbar>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            // active:0,
            icon:[//tabbar的图标
                {normal:"//127.0.0.1:7000/img/home_show_unselected.png",active:"//127.0.0.1:7000/img/home_show_selected.png"},
                {normal:"//127.0.0.1:7000/img/home_board_unselected.png",active:"//127.0.0.1:7000/img/home_board_selected.png"},
                {normal:"//127.0.0.1:7000/img/home_game_unselected.png",active:"//127.0.0.1:7000/img/home_game_selected.png"},
                {normal:"//127.0.0.1:7000/img/home_find_unselected.png",active:"//127.0.0.1:7000/img/home_find_selected.png"},
                {normal:"//127.0.0.1:7000/img/home_me_unselected.png",active:"//127.0.0.1:7000/img/home_me_selected.png"}
            ],
        }
    }
}
</script>
<style scoped>

</style>

