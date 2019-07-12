<template>
    <div class="home">
    <mt-tab-container v-model="active">
        <mt-tab-container-item id="广场">
            <!-- <mt-cell v-for="(elem,i) in arr" :key="i" title="第一页"></mt-cell> -->
            <square-vue></square-vue>
        </mt-tab-container-item>
        <mt-tab-container-item id="排行">
            <!-- <mt-cell  v-for="(elem,i) in arr" :key="i" title="第二页"></mt-cell> -->
            <ranking-vue></ranking-vue>
        </mt-tab-container-item>
        <mt-tab-container-item id="护卫队">
            <!-- <mt-cell  v-for="(elem,i) in arr" :key="i" title="第三页"></mt-cell> -->
            <protector-vue></protector-vue>
        </mt-tab-container-item>
        <mt-tab-container-item id="发现">
            <!-- <mt-cell  v-for="(elem,i) in arr" :key="i" title="第四页"></mt-cell> -->
            <find-vue></find-vue>
        </mt-tab-container-item>
          <mt-tab-container-item id="我">
            <!-- <mt-cell  v-for="(elem,i) in arr" :key="i" title="第四页"></mt-cell> -->
           <me-vue></me-vue>
        </mt-tab-container-item>
</mt-tab-container>


        <mt-tabbar v-model="selected">
        <mt-tab-item :id="elem.fun" v-for="(elem,i) of arrtab" :key="i">
            <img slot="icon" :src="selected==elem.fun?elem.selsrc:elem.befsrc">
           {{elem.fun}}
        </mt-tab-item>
        </mt-tabbar>

    </div>
</template>
<script>
import squareVue from "./square"
import rankingVue from "./ranking"
import protectorVue from "./protector"
import findVue from "./find"
import meVue from "./me"
export default {
    data(){
        return{
            active:"广场",
            selected:"广场",
            arrtab:[
                {fun:"广场",befsrc:"//127.0.0.1:7000/img/home_show_unselected.png",selsrc:"//127.0.0.1:7000/img/home_show_selected.png"},
                {fun:"排行",befsrc:"//127.0.0.1:7000/img/home_board_unselected.png",selsrc:"//127.0.0.1:7000/img/home_board_selected.png"},
                 {fun:"护卫队",befsrc:"//127.0.0.1:7000/img/home_game_unselected.png",selsrc:"//127.0.0.1:7000/img/home_game_selected.png"},
                {fun:"发现",befsrc:"//127.0.0.1:7000/img/home_find_unselected.png",selsrc:"//127.0.0.1:7000/img/home_find_selected.png"},
                {fun:"我",befsrc:"//127.0.0.1:7000/img/home_me_unselected.png",selsrc:"//127.0.0.1:7000/img/home_me_selected.png"}
            ]
        }
    },
    watch:{
        selected(){
            this.active=this.selected 
        }
    },
    components:{
        squareVue,
        rankingVue,
        protectorVue,
        findVue,
        meVue
    }
 
}
</script>
<style>
.home .mint-tabbar > .mint-tab-item.is-selected{
    color:red;
}
.home .mint-tabbar .mint-tab-item{
    color:gray;
}
</style>

