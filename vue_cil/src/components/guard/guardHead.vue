<template>
    <div class="guardHead">
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
.guardHead .header{
    position: fixed;
    width:100%;
    top:0px;
    left: 0px;
    right:0px;
    z-index: 10;
    background:#F8F8F8;
}
.guardHead .header .titleBox{
    position: relative;
    font-size: 18px;
    padding-bottom: 10px;
    padding-top:10px;
    border-bottom: 1px solid gray;
}
/* 遮罩层按钮的切换 */
.guardHead .header .titleBox .inGuard{
    background-image: url("//127.0.0.1:7000/img/icon_army_title_open.png");
}
.guardHead .header .titleBox .outGuard{
    background-image: url("//127.0.0.1:7000/img/icon_army_title_close.png")
}
.guardHead .header .titleBox .title{
    text-align: center;
}
.guardHead .header .titleBox .guard{
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
.guardHead .header .sortList{
    display: flex;
    justify-content: space-around;
    font-size: 13px;

}
.guardHead .header .sortList li{
    padding:8px 0;
    width:25%;
    text-align: center;
    /* border:1px solid gray; */
}
.guardHead .header .slider{
    width:25%;
    border-bottom:1px solid red;
    height:37px;
    position: absolute;
    top:0px;
    left:0px;
}
.guardHead .header .sortListBox{
    position: relative;
}
.guardHead .header .sortListBox .sortList .active{
    font-size: 15px;
    color:red;
}
.guardHead .guaCon{
    display: flex;
    justify-content: space-around;
    margin-top:87px;
}
.guardHead .guaCon img{
    width:50px;
    height:50px;
}
.guardHead .guaCon a{
    display: block;
    text-align: center;
}
.guardHead .guaCon p{
    color:black;
    font-size: 13px;
    padding-top:15px;
}
.guardHead .guaConBox{
    position: fixed;
    transition: all .3s linear;
    background:rgba(248,248,248,0.3);
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index: 999;
}
.guardHead .disappear{
    transform: rotateX(90deg);
    transform-origin: center 72px;
}   
</style>


