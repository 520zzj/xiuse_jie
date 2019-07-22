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
</style>


