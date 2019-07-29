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
import guardDay from "./guard/guardDay.vue"
import guardWeek  from "./guard/guardWeek.vue"
import lwGd from "./guard/lwGd.vue"
import twGd from "./guard/twGd.vue"
export default {
    data(){
        return{
          active:0,
          list:[
              {path:"/guardDay",component:guardDay,navName:"守卫日榜"},
               {path:"/guardWeek",component:guardWeek,navName:"守卫周榜"},
                {path:"/twGd",component:twGd,navName:"本周女神"},
                {path:"/lwGd",component:lwGd,navName:"上周女神"},
          ]
        }
    },
    components:{
        guardHead,
        guardDay,
        guardWeek,
        twGd,
        lwGd
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
 /* 护卫榜 */
.guard .section{
    background:#fff;
}
.guard .section .befThree a{
    display:block;
    text-align: center;
}
.guard  .section .befThree .threeBox{
    display:flex;
    justify-content: center;
    height:193px;
    align-items:flex-end;
}
.guard  .section .befThree .threeBox li{
    width:32%;
}
.guard  .section .befThree .threeBox li:first-child{
    background:#FEEBEF;
}
.guard .section .befThree .threeBox li:nth-child(2){
    background:#FEE4D9;
}
.guard .section .befThree .threeBox li:last-child{
    background:#DEF6FB;
}
.guard .section .befThree li:first-child .Medal{
    background-image:url("//127.0.0.1:7000/img/showself_team_icon_ranking_2.png");
}
.guard  .section .befThree li:nth-child(2) .Medal{
    background-image:url("//127.0.0.1:7000/img/showself_team_icon_ranking_1.png");
}
.guard .section .befThree li:last-child .Medal{
    background-image:url("//127.0.0.1:7000/img/showself_team_icon_ranking_3.png");
}
.guard  .section .befThree .Medal{
    background:center;
    background-repeat: no-repeat;
    height:82px;
    width:70px;
    background-size: 100%;
    margin:0 auto;
    position: relative;
    background-position:top center;
}   
.guard  .section .circle{
    width:47px;
    height:47px;
    /* border:1px solid #008000; */
    position: absolute;
    top:26px;
    left:12px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 0;
}
.guard .section .circle img{
    width:100%;
    height:auto;
}
.guard .section .befThree .style{
    font-size: 10px;
    margin-bottom:3px;
}
.guard .section .befThree li:first-child .style{
    color:#D23F72;
}
.guard  .section .befThree  li:nth-child(2) .style{
    color:#CC7958;
}
.guard .section .befThree  li:last-child .style{
    color:#57ACAA;
}
.guard .section .rankBgBox{
    position: relative;
    width:46px;
    height:22px;
    /* text-align: center; */
    margin:0 auto;
}
.guard .section .rankBgBox .num{
    position: absolute;
    top:14px;
    right:-6px;
}
.guard .section .num img{
    width:7px;
    height:11px;
}
.guard .section .rankBg{
    width:100%;
    height:100%;
}
.guard .section .rankBgBox .rankText{
    position:absolute;
    white-space: nowrap;
    top:0px;
    right: 10px;
    font-size:12px;
    color:#fff;
}
.guard .section .befThree .fight{
    font-size: 12px;
    color:gray;
    padding:12px 0;
}
.guard  .section .befThree  li:first-child .fight span{
    color:#D23F72;
}
.guard .section .befThree  li:nth-child(2) .fight span{
    color:#CC7958;
}
.guard .section .befThree  li:last-child .fight span{
    color:#57ACAA;
}
.guard .section .befThree  li:nth-child(2) .Medal{
    margin-bottom: 10px;
}
.guard .section .aftThree .listItem{
    display:flex;
    align-items:center;
}
.guard  .section .aftThree .picFra{
    width:44px;
    height:44px;
    /* border:1px solid green; */
    border-radius: 50%;
    overflow:hidden;
}
.guard .section .aftThree .picFra img{
    width:100%;
    height:auto;
}
.guard .section .aftThree .rankBgBox{
    margin:0px;
}
.guard .section .aftThree .ranking{
    padding-right:10px;
    color:gray;
}
.guard .section .aftThree .name{
    padding:0 12px;
    color:gray;
    font-size: 12px;

}
.guard .section .aftThree .fight{
    font-size:12px;
    color:gray;
    padding-left:60px;
}
.guard .section .aftThree .fight span{
    color:#D23F72;
}
/* 女神榜第三名之后的特别样式 */
.guard .section .aftThree .goddess{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left:10px;
}
</style>


