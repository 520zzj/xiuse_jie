<template>
    <div class="protector">
       <guard-head></guard-head>
       <guard-swiper></guard-swiper>
    </div>
      
</template>
<script>
import guardHead from "./guard/guardHead.vue"
import guardSwiper from "./guard/guardSwiper.vue"
export default {
    data(){
        return{
          
        }
    },
    components:{
        guardHead,
        guardSwiper
    }
}
</script>
<style>
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
.protector .section .freBgMovOne{
    background-image: url("//127.0.0.1:7000/img/showself_loading_1.png");
}
.protector .section .freBgMovOne{
    background-image: url("//127.0.0.1:7000/img/showself_loading_2.png");
}
.protector .section .freBgMovOne{
    background-image: url("//127.0.0.1:7000/img/showself_loading_3.png");
}
.protector .section .freBgMovOne{
    background-image: url("//127.0.0.1:7000/img/showself_loading_4.png");
}
.protector .section .freBgMovOne{
    background-image: url("//127.0.0.1:7000/img/showself_loading_5.png");
}
.protector .section .freBgMovOne{
    background-image: url("//127.0.0.1:7000/img/showself_loading_6.png");
}

</style>


