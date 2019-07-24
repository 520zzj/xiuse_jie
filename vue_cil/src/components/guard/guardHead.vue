<template>
    <div class="guardHead">
        <div class="titleBox">
                <div class="title"> 护卫队</div>
                <span class="inGuard guard"></span>
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

/* 遮罩层按钮的切换 */
.guardHead  .titleBox .inGuard{
    background-image: url("//127.0.0.1:7000/img/icon_army_title_open.png");
}
.guardHead  .titleBox .outGuard{
    background-image: url("//127.0.0.1:7000/img/icon_army_title_close.png")
}
/* 护卫队，遮罩层按钮 */
.guardHead .titleBox{
    position: fixed;
    left:0;
    right:0;
    top:0;
    padding:12px 0;
    border-bottom: 1px solid #555;
    background: #f8f8f8;
    z-index: 10;
}
.guardHead .titleBox .title{
    text-align: center;
}
.guardHead .titleBox .guard{
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


