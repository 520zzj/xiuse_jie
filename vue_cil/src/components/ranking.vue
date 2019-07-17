<template>
    <div class="ranking">
       <div class="header">
           <div class="rankChoice">
                <div class="starRank">周星榜</div>
                <div class="dropDown">
                      <ul class="dropMenu">
                        <li><a href="" class="active">明星榜</a></li>
                        <li><a href="">富豪榜</a></li>
                        <li><a href="">人气榜</a></li>
                        <li><a href="">周星榜</a></li>
                        <li><a href="">星星榜</a></li>
                    </ul>
                </div>
           </div>
           <div class="sort">
               <div class="sortBox">
                    <ul ref="ul1">
                        <li  @click="getLiLeft($event)">日榜</li>
                        <li  @click="getLiLeft($event)">周榜</li>
                        <li  @click="getLiLeft($event)">月榜</li>
                        <li  @click="getLiLeft($event)">超级榜</li>
                    </ul>
               <div class="slider" :style="{left:sliderLeft+'px'}">{{nowRank}}</div>
               </div>
           </div>
       </div>
       <div class="section clearMarTop">
           <div class="wallBox">
               <ul class="wall">
                    <li>
                            <a href="" class="link">
                                    <div class="picFraCir">
                                        <img src="//127.0.0.1:7000/img/69ded6a598_250_350.jpg" alt="">
                                    </div>
                                     <div class="picFra"></div>
                                    <p class="score">
                                        <img src="" alt="">
                                        <img src="" alt="">
                                    </p>
                                <span class="sign">冷凝烟_贺</span>
                            </a>
                            <p>7039677</p>
                   </li>
                    <li class="champ">
                            <a href="" class="link">
                                    <div class="picFraCir">
                                        <img src="//127.0.0.1:7000/img/69ded6a598_250_350.jpg" alt="">
                                           
                                    </div>
                                     <div class="picFra"></div>
                                    <p class="score">
                                    <img src="" alt="">
                                   <i class="iconfont icon-huaban"></i>
                                </p>
                                <span class="sign">冷凝烟_贺</span>
                            </a>
                            <p>7039677</p>
                   </li>
                    <li>
                            <a href="" class="link">
                                    <div class="picFraCir">
                                        <img src="//127.0.0.1:7000/img/69ded6a598_250_350.jpg" alt="">
                                            
                                    </div>
                                    <div class="picFra"></div>
                                    <p class="score">
                                    <img src="" alt="">
                                    <img src="" alt="">
                                </p>
                                <span class="sign">冷凝烟_贺</span>
                            </a>
                            <p>7039677</p>
                   </li>
               </ul>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            ulLeft:"",//ul到视图左边的距离
            liLeft:"",//当前li到视图左边的距离
            sliderLeft:0,//滑块绝对定位的left值
            nowRank:"日榜"
        }
    },
    methods:{
        //定义获取当前li到视图左边的距离的方法
        getLiLeft($event){
            //元素帮你ref="ul1"，用this.$refs.ul1获取绑定元素
             this.ulLeft=this.$refs.ul1.getBoundingClientRect().left
            this.liLeft=$event.target.getBoundingClientRect().left
            this.sliderLeft=this.liLeft-this.ulLeft
            this.nowRank=$event.target.innerHTML
        }
    }
}
</script>
<style>
*{
    margin:0;
    padding:0;
}
ul{list-style: none;}
.ranking .header{
    position:fixed;
    top:0px;
    left:0px;
    right:0;
    width:100%;
    background-image: url("//127.0.0.1:7000/img/anchor_rank_tab_bg.png");
    color:#fff;
}
.ranking .header .rankChoice{
    display: flex;
    justify-content: center;
    align-items:center;
    margin-bottom:15px;
}
.ranking .header .rankChoice .starRank{
    color:#fff;
}
.ranking .header .rankChoice  .dropDown{
    width:14px;
    height:14px;
    margin-left:4px;
    position: relative;
    background-image:url("//127.0.0.1:7000/img/rank_down_arrow.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
}
.ranking .header .rankChoice .dropMenu{
    position:absolute;
    top:14px;
    left:-74px;
    background-image: url("//127.0.0.1:7000/img/pop_rank_bg.png");
    padding: 15px 5px; 
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;   
    display:none;
}
.ranking .header .rankChoice .dropMenu a{
    display: block;
    color:gray;
    text-align: center;
    padding:2px 25px;
    font-size: 14px;
    white-space: nowrap;
}
.ranking .header .rankChoice .dropMenu a.active{
     background:#FF6261;
}
.ranking .header .sort{
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
}
.ranking .header .sort .sortBox{
    position: relative;
}
.ranking .header .sort .sortBox .slider{
    position: absolute;
    width:74px;
    height:31px;
    background:#fff;
    border-radius: 20px;
    top:0px;
    left:0px;
    transition: all .5s ease;
    color:#FF6261;
    text-align: center;
    line-height: 31px;
}

.ranking .header .sort ul{
    display: flex;
    justify-content: center;
    border-radius: 20px;
    background: rgba(250, 250, 250, 0.3);
}
.ranking .header .sort li{
    width:74px;
    padding:5px 0;
    text-align: center;
}
.ranking .clearMarTop:before{
    width:100%;
    content:"";
    display:table;
}
.ranking .section .wallBox{
    background-image: url("//127.0.0.1:7000/img/anchor_rank_top_sub_rank3.png");
    height:200px;
    /* padding-top:79px; */
    margin-top:50px;
    background-repeat: no-repeat;
    background-size:100%;
    background-position: center;
}
.ranking .section .wall{
    display:flex;
    justify-content: center;
    padding-top:58px;
}
.ranking .section .wall .link{
    display:block;
    position: relative;
    padding:0 15px;
}
.ranking .section .wall .picFra{
    background-image:url("//127.0.0.1:7000/img/anchor_rank_top2.png");
    background-repeat: no-repeat;
    background-size:100%;
    background-position: center;
    width:76px;
    height:84px;
    position: absolute;
    top:-11px;
    z-index: 999;
    left:10px;
}
.ranking .section .wall  .picFraCir{
    overflow:hidden;
    width:66px;
    height:66px;
    /* border:1px solid green; */
    border-radius: 50%;
}
.ranking .section .wall .picFraCir img{
    width:100%;
    height:auto;
}
.ranking .section .wall .score{
    position:absolute;
}
.ranking .section .wall .sign{
    position: absolute;
}
/* 对冠军头像处理 */
.ranking .section .wall .champ .picFraCir{
    width:74px;
    height:74px;
    /* position:absolute;*/
    /* top:-8px;  */
    transform: translateY(-8px);
}
.ranking .section .wall .champ .picFra{
    width:86px;
    height:88px; 
    left:8px;
     top:-17px;
}
</style>


