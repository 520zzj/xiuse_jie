<template>
    <div class="hall">
        <div class="banner">
            <mt-swipe :auto="5000" :continuous="true">
                <mt-swipe-item>
                    <img src="//127.0.0.1:7000/img/01ed6558f5c863a8012049efb6f345.jpg@2o.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                     <img src="//127.0.0.1:7000/img/01356d554337fd0000019ae9ceb332.jpg@2o.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                     <img src="//127.0.0.1:7000/img/01f7a95543380c0000019ae9819de6.jpg@2o.jpg" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="imgList">
            <div class="recommend">
                <div class="reLeftBox">
                    <div class="inCon">
                        <a href="" class="link">
                             <img src="//127.0.0.1:7000/img/b127f14ce1_250_350.jpg" alt="">
                            <p class="perInfo">zuo</p>
                        </a>  
                    </div>    
                </div>
                <div class="reRightBox">
                    <div class="imgbox">
                         <a href="" class="link">
                                   <img src="//127.0.0.1:7000/img/f283fbb284_250_350.jpg" alt="">
                                <p class="perInfo">you</p>
                            </a>
                    </div>
                    <div class="imgbox">
                         <a href="" class="link">
                                   <img src="//127.0.0.1:7000/img/69ded6a598_250_350.jpg" alt="">
                                <p class="perInfo">you</p>
                            </a>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
          
        }
    }
}
</script>
<style>
.hall .banner{
    width:100%;
    height:150px;
}
.hall .banner img{
    width:100%;
    height:100%;
}
.hall .imgList .recommend{
    width:100%;
    display: flex;
    flex-wrap: wrap;
}
.hall .imgList .recommend .inCon{
   position: absolute;
   width:100%;
   height:100%;
   top:0;
   left:0;
}
.hall .imgList .recommend .inCon .reRight{
    width:100%;
    height:50%;
    position: relative;
}
.hall .imgList .recommend .link{
    width:100%;
    height:100%;
    display: block;
    position: absolute;
    padding: 5px;
}
.hall .imgList .recommend .reLeftBox{
    width:60%;
    padding-top:60%;
    position: relative;
}
.hall .imgList .recommend .reRightBox{
    width:40%;
    position: relative;
}
.hall .imgList img{
    width:100%;
    height:auto;
    
}
.hall .imgList .recommend .perInfo{
    position: absolute;
    bottom:0;
}
.hall .imgList .recommend .imgbox{
    height:50%;
    overflow: hidden;
    position: relative;
}
</style>


