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
            <div class="recommend container">
                <div class="reLeftBox">
                    <div class="inCon">
                        <a href="" class="link">
                             <img src="//127.0.0.1:7000/img/b127f14ce1_250_350.jpg" alt="">
                            <div class="perInfo">
                                <div class="achievement">
                                    <img src="//127.0.0.1:7000/img/red_packet_gf5.png" alt="">
                                    <img src="//127.0.0.1:7000/img/friend_dp_all.png" alt="">
                                </div>
                                <p class="sign">放开那个女孩</p>
                                <div class="watchNum">
                                    <img src="//127.0.0.1:7000/img/home_me_unselected.png" alt="">
                                    <span>1000</span>
                                </div>
                            </div>
                        </a>  
                    </div>    
                </div>
                <div class="reRightBox">
                    <div class="imgbox">
                         <a href="" class="link noPadLeft">
                                   <img src="//127.0.0.1:7000/img/f283fbb284_250_350.jpg" alt="">
                                <div class="perInfo">
                                    <div class="achievement">
                                        <img src="//127.0.0.1:7000/img/red_packet_gf5.png" alt="">
                                        <img src="//127.0.0.1:7000/img/friend_dp_all.png" alt="">
                                    </div>
                                    <p class="sign">放开那个女孩</p>
                                    <div class="watchNum">
                                        <img src="//127.0.0.1:7000/img/home_me_unselected.png" alt="">
                                        <span>1000</span>
                                    </div>
                                </div>
                            </a>
                    </div>
                    <div class="imgbox">
                         <a href="" class="link noPadLeft">
                                   <img src="//127.0.0.1:7000/img/69ded6a598_250_350.jpg" alt="">
                                <div class="perInfo">
                                    <div class="achievement">
                                        <img src="//127.0.0.1:7000/img/red_packet_gf5.png" alt="">
                                        <img src="//127.0.0.1:7000/img/friend_dp_all.png" alt="">
                                    </div>
                                    <p class="sign">放开那个女孩</p>
                                    <div class="watchNum">
                                        <img src="//127.0.0.1:7000/img/home_me_unselected.png" alt="">
                                        <span>1000</span>
                                    </div>
                                </div>
                            </a>
                    </div>
                </div>
               
            </div>
            <div class="floor">
                 <div class="sort">
                    <img src="//127.0.0.1:7000/img/hall_anchor_classfy_bar.png" alt="">
                    <span>甜美主播</span>
                </div>
                <div class="floorImgList container">
                    <div class="listItem">
                        <div class="inCon">
                            <a href="" class="link">
                                <img src="//127.0.0.1:7000/img/b127f14ce1_250_350.jpg" alt="">
                                <div class="perInfo">
                                    <div class="achievement">
                                        <img src="//127.0.0.1:7000/img/red_packet_gf5.png" alt="">
                                        <img src="//127.0.0.1:7000/img/friend_dp_all.png" alt="">
                                    </div>
                                    <p class="sign">放开那个女孩</p>
                                    <div class="watchNum">
                                        <img src="//127.0.0.1:7000/img/home_me_unselected.png" alt="">
                                        <span>1000</span>
                                    </div>
                                </div>
                            </a>  
                        </div>    
                    </div>
                      <div class="listItem">
                        <div class="inCon">
                            <a href="" class="link">
                                <img src="//127.0.0.1:7000/img/b127f14ce1_250_350.jpg" alt="">
                                <p class="perInfo">zuo</p>
                            </a>  
                        </div>    
                    </div>
                      <div class="listItem">
                        <div class="inCon">
                            <a href="" class="link">
                                <img src="//127.0.0.1:7000/img/b127f14ce1_250_350.jpg" alt="">
                                <p class="perInfo">zuo</p>
                            </a>  
                        </div>    
                    </div>
                       <div class="listItem">
                        <div class="inCon">
                            <a href="" class="link">
                                <img src="//127.0.0.1:7000/img/b127f14ce1_250_350.jpg" alt="">
                                <p class="perInfo">zuo</p>
                            </a>  
                        </div>    
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
          arr:[
              {sort:"甜美主播"}
          ]
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
.hall .imgList .container{
    width:100%;
    display: flex;
    flex-wrap: wrap;
}
.hall .imgList .container .inCon{
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
.hall .imgList .container .link{
    width:100%;
    height:100%;
    display: block;
    position: absolute;
    padding: 5px;
    overflow: hidden;
}
.hall .imgList .recommend a.noPadLeft{
    padding-left:0;
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
.hall .imgList .container .perInfo{
    position: absolute;
    bottom:0;
    display: flex;
    font-size: 12px;
    color:#fff;
    justify-content: space-between;
    width:100%;
    padding:0px 5px 0px 5px;
    align-items: center;
}
.hall .imgList .container .perInfo .achievement{
    width:15%;
    display:flex;
}
.hall .imgList .container .perInfo .achievement img{
    height:14px;
    width:auto;
    vertical-align: middle;
}.hall .imgList .container .perInfo .achievement img:first-child{
    margin-right:2px;
}
.hall .imgList .container .perInfo .watchNum img{
     height:12px;
     width:auto;
    vertical-align: middle;
}
.hall .imgList .container .perInfo .watchNum{
    width:25%;
    display:flex;
    align-items: center;
}
.hall .imgList .container .perInfo .sign{
    color:#fff;
    margin:0;
    width:60%;
    padding-left:10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
}
.hall .imgList .recommend .imgbox{
    height:50%;
    overflow: hidden;
    position: relative;
}
.hall .imgList .floor .listItem{
    width:50%;
    padding-top:50%;
    position: relative;
}
.hall .imgList .floor .container .listItem:nth-of-type(2n+1) .link{
    padding-right: 2.5px;
}
.hall .imgList .floor .container .listItem:nth-of-type(2n) .link{
    padding-left: 2.5px;
}
.hall .floor .sort{
    padding:15px 0 10px 5px;
}
.hall .floor .sort img{
    width:auto;
    height:14px;
    margin-right:8px;
    position: relative;
    top:1px;
}
</style>


