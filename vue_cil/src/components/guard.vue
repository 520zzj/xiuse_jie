<template>
    <div class="guard">
        <guard-head></guard-head>
         <van-tabs v-model="active"  swipeable animated line-width="25%" line-height="2px">
            <van-tab :title="item.navName" v-for="(item,index) in list" :key="index">
              <keep-alive>
               <component :is="item.component"></component>
              </keep-alive>
            </van-tab>
        </van-tabs>
    
    </div>
      
</template>
<script>
import guardHead from "./guard/guardHead.vue"
import guardOne from "./guard/guardOne.vue"
import guardTwo from "./guard/guardTwo.vue"
import guardThree from "./guard/guardThree.vue"
import guardFour from "./guard/guardFour.vue"
export default {
    data(){
        return{
          active:0,
          list:[
              {path:"/guardOne",component:guardOne,navName:"守卫日榜"},
               {path:"/guardTwo",component:guardTwo,navName:"守卫周榜"},
                {path:"/guardThree",component:guardThree,navName:"本周女神"},
                 {path:"/guardFour",component:guardFour,navName:"上周女神"},
          ]
        }
    },
    components:{
        guardHead,
        guardOne,
        guardTwo,
        guardThree,
        guardFour
    }
}
</script>
<style>
.guard .van-tabs__wrap{
    position: fixed;
    top:45px;
}
.guard .van-tabs--line{
    padding-top:92px;
}
.guard .van-tabs__nav{
    background: #f8f8f8;
}
.guard .van-tab{
    padding:0;
}
/* .protector .relBox{
    width:100%;
}
.protector .pageBox{
    display: flex;
    width:400%;
    position: relative;
   
    overflow:hidden;
}
.protector .pageBox .page-item{
    width:25%;
}
 */


/* .protector .section .freBgSta{
    background:#f8f8f8;
    height:80px;
    width:100%;
}
.protector .section .bg{
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
}
.protector .section .freMovBox{
    background:#fff;
}
.protector .section .freBgMov{
    width:17px;
    height:25px;
    margin:0 auto;
} */

/* 6张动态刷新的图片，默认选第一张*/
.guard .section .freBgMovOne{
    background-image: url("//127.0.0.1:7000/img/showself_loading_1.png");
}
.guard .section .freBgMovOne{
    background-image: url("//127.0.0.1:7000/img/showself_loading_2.png");
}
.guard .section .freBgMovOne{
    background-image: url("//127.0.0.1:7000/img/showself_loading_3.png");
}
.guard .section .freBgMovOne{
    background-image: url("//127.0.0.1:7000/img/showself_loading_4.png");
}
.guard .section .freBgMovOne{
    background-image: url("//127.0.0.1:7000/img/showself_loading_5.png");
}
.guard .section .freBgMovOne{
    background-image: url("//127.0.0.1:7000/img/showself_loading_6.png");
}

</style>


