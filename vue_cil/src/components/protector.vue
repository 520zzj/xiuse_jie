<template>
    <div class="protector">
       <div class="header">
           <div class="titleBox">
                <div class="title"> 护卫队</div>
                <span class="inGuard guard"></span>
           </div>
           <div class="sortListBox">
               <ul class="sortList">
                   <li class="active">护卫日榜</li>
                   <li>护卫总榜</li>
                   <li>本周女神</li>
                   <li>上周女神</li>
               </ul>
               <div class="slider"></div>
           </div>
       </div>
       <div class="section"> 
           <!-- 刷新静态背景 -->
           <div class="freBgSta"></div>
           <!-- 刷新动态背景 -->
           <div class="freMovBox">
               <div class="freBgMovOne bg freBgMov"></div>
           </div>
           <div class="befThree">
               <ul class="threeBox">
                   <li>
                       <a href="" class="link">
                           <div class="Medal">
                               <div class="circle"><img src="//127.0.0.1:7000/img/69ded6a598_250_350.jpg" alt=""></div>
                           </div>
                           <div class="details">
                               <p class="style"></p>
                               <div class="rank">
                                   <img src="" alt="">
                                   <div class="num">
                                       <img src="" alt="">
                                   </div>
                               </div>
                               <div class="fight">战力值：<span>86247</span></div>
                           </div>
                       </a>
                    </li>
                   <li><a href=""></a></li>
                   <li><a href=""></a></li>
               </ul>
           </div>
           <div class="aftThree">
               <ul>
                   <li><a href=""></a></li>
                   <li><a href=""></a></li>
                   <li><a href=""></a></li>
               </ul>
           </div>
       </div>
       <!-- 遮罩层 -->
        <div class="guaConBox disappear">
                <ul class="guaCon">
                    <li><a href=""><img src="//127.0.0.1:7000/img/icon_army_create.png" alt=""><p>创建护卫队</p></a></li>
                    <li><a href=""><img src="//127.0.0.1:7000/img/icon_army_add.png" alt=""><p>加入护卫队</p></a></li>
                    <li><a href=""><img src="//127.0.0.1:7000/img/icon_army_dialog_search.png" alt=""><p>搜索护卫队</p></a></li>
                </ul>
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
.protector .header{
    position: fixed;
    width:100%;
    top:0px;
    left: 0px;
    right:0px;
}
.protector .header .titleBox{
    position: relative;
    font-size: 18px;
    padding-bottom: 10px;
    padding-top:10px;
    border-bottom: 1px solid gray;
}
/* 遮罩层按钮的切换 */
.protector .header .titleBox .inGuard{
    background-image: url("//127.0.0.1:7000/img/icon_army_title_open.png");
}
.protector .header .titleBox .outGuard{
    background-image: url("//127.0.0.1:7000/img/icon_army_title_close.png")
}
.protector .header .titleBox .title{
    text-align: center;
}
.protector .header .titleBox .guard{
    position: absolute;
    right:0px;
    top:8px;
    width:25px;
    height:25px;
    display: block;
    background-size:100%;
    background-repeat: no-repeat;
    background-position: center;
    margin-right:20px;
}
.protector .header .sortList{
    display: flex;
    justify-content: space-around;
    font-size: 13px;

}
.protector .header .sortList li{
    padding:8px 0;
    width:25%;
    text-align: center;
    /* border:1px solid gray; */
}
.protector .header .slider{
    width:25%;
    border-bottom:1px solid red;
    height:37px;
    position: absolute;
    top:0px;
    left:0px;
}
.protector .header .sortListBox{
    position: relative;
}
.protector .header .sortListBox .sortList .active{
    font-size: 15px;
    color:red;
}
.protector .guaCon{
    display: flex;
    justify-content: space-around;
    margin-top:87px;
}
.protector .guaCon img{
    width:50px;
    height:50px;
}
.protector .guaCon a{
    display: block;
    text-align: center;
}
.protector .guaCon p{
    color:black;
    font-size: 13px;
    padding-top:15px;
}
.protector .guaConBox{
    position: fixed;
    transition: all .3s linear;
    background:rgba(248,248,248,0.3);
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index: 999;
}
.protector .disappear{
    transform: rotateX(90deg);
    transform-origin: center 72px;
}   
.protector .section .freBgSta{
    background:#f8f8f8;
    height:80px;
    width:100%;
}
.protector .section .bg{
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
}
.protector .section .freBgMov{
    width:17px;
    height:25px;
    margin:0 auto;
}

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
.protector .section .befThree a{
    display:block;
}
.protector .section .befThree .threeBox{
    display:flex;
    justify-content: center;
}
.protector .section .befThree .threeBox li{
    width:32%;
}
.protector .section .befThree .threeBox li:first-child{
    background:#FEEBEF;
}
.protector .section .befThree .threeBox li:nth-child(2){
    background:#FEE4D9;
}
.protector .section .befThree .threeBox li:last-child{
    background:#DEF6FB;
}
.protector .section .befThree li:first-child .Medal{
    background-image:url("//127.0.0.1:7000/img/showself_team_icon_ranking_2.png");
}
.protector .section .befThree li:nth-child(2) .Medal{
    background-image:url("//127.0.0.1:7000/img/showself_team_icon_ranking_1.png");
}
.protector .section .befThree li:last-child .Medal{
    background-image:url("//127.0.0.1:7000/img/showself_team_icon_ranking_3.png");
}
.protector .section .befThree .Medal{
    background:center;
    background-repeat: no-repeat;
    height:100px;
    width:70px;
    background-size: 100%;
    margin:0 auto;
    position: relative;
    background-position:top center;
}   
.protector .section .befThree .circle{
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
.protector .section .befThree .circle img{
    width:100%;
    height:auto;
}
</style>


