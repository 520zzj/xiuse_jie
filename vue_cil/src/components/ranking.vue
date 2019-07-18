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
                                        <img src="//127.0.0.1:7000/img/room_pk_count_down_1.png" alt="">
                                        <img src="//127.0.0.1:7000/img/yinguan.png" alt="">
                                    </p>
                                 <div class="sign">
                                     <img src="//127.0.0.1:7000/img/anchor_rank_top2_name.png" alt="">
                                    <span>冷凝烟_贺</span>
                                </div>
                            </a>
                            <p class="roomId">7039677</p>
                   </li>
                    <li class="champ">
                            <a href="" class="link">
                                    <div class="picFraCir">
                                        <img src="//127.0.0.1:7000/img/69ded6a598_250_350.jpg" alt="">
                                           
                                    </div>
                                     <div class="picFra"></div>
                                    <p class="score">
                                    <img src="//127.0.0.1:7000/img/room_pk_count_down_1.png" alt="">
                                    <img src="//127.0.0.1:7000/img/huaban.png" alt="">
                                   <!-- <i class="iconfont icon-huaban"></i>
                                   <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-huaban"></use>
                                    </svg> -->
                                </p>
                                 <div class="sign">
                                     <img src="//127.0.0.1:7000/img/anchor_rank_top1_name.png" alt="">
                                    <span>冷凝烟_贺</span>
                                </div>
                            </a>
                            <p class="roomId">7039677</p>
                   </li>
                    <li>
                            <a href="" class="link">
                                    <div class="picFraCir">
                                        <img src="//127.0.0.1:7000/img/69ded6a598_250_350.jpg" alt="">
                                            
                                    </div>
                                    <div class="picFra"></div>
                                    <p class="score">
                                    <img src="//127.0.0.1:7000/img/room_pk_count_down_1.png" alt="">
                                    <img src="//127.0.0.1:7000/img/paihangbangicon_tongguan.png" alt="">
                                </p>
                                <div class="sign">
                                    <img src="//127.0.0.1:7000/img/anchor_rank_top3_name.png" alt="">
                                    <span>冷凝烟_贺</span>
                                </div>
                            </a>
                            <p class="roomId">7039677</p>
                   </li>
               </ul>
           </div>
           <div class="AnchorList">
               <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" >
                    <van-cell v-for="item in list" :key="item" :title="item" />
                </van-list> -->
                 <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                        <a class="mui-navigate-right">
                            <div class="listBox">
                                  <span class="listNum">1</span>
                                    <div class="lisPic">
                                        <img src="//127.0.0.1:7000/img/f283fbb284_250_350.jpg" alt="">
                                    </div>
                                    <div class="textInfo">
                                        <p class="sign">新人三七在等你</p>
                                        <div class="achivRoom">
                                            <div class="achiv">
                                                <img src="//127.0.0.1:7000/img/room_pk_count_down_1.png" alt=""><img src="//127.0.0.1:7000/img/tongguan.png" alt="">
                                            </div>
                                            <div class="roomId">房间号：<span>1234567</span></div>
                                        </div>
                                    </div>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="tip">没有更多...</div>  
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
        },
        onLoad() {
      // 异步更新数据
          
        }
    },
    created(){
        this.onLoad()
    }
}
</script>
<style>
/* 阿里iconfont库 */
/* .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    } */
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
    transform: translateY(-8px);
}
.ranking .section .wall .champ .picFra{
    width:86px;
    height:88px; 
    left:8px;
     top:-17px;
}
.ranking .section .wall .score{
    position: absolute;
    top:38px;
    right:8px;
    z-index: 999;
    height:18px;
    width:28px;
}
.ranking .section .wall .score img{
    width:10px;
    height:12px;
}
.ranking .section .wall .score img:last-child{
    width:18px;
    height:18px;
}
.ranking .section .wall .score img:first-child{
    position:relative;
    top:3px;
}
.ranking .section .wall .sign{
   position: absolute;
   width:84px;
   height:16px;
   left:6px;
   bottom:-5px;
}
.ranking .section .wall .sign img{
    width:100%;
    height:auto;
}
.ranking .section .wall .sign span{
    display:block;
    position:absolute;
    top:1px;
    width:62px;
    font-size: 12px;
    left:50%;
    transform: translatex(-50%);
    color:#fff;
    text-align: center;
    height: 14px;
    line-height: 14px;
}
.ranking .section .wall li:nth-child(2) .sign{
    bottom:1px;
}
.ranking .section .wall .roomId{
    text-align: center;
    padding-top:20px;
    color:#fff;
}
.ranking .section .wall li:nth-child(2) .roomId{
    padding-top:10px;
}
.ranking .section .AnchorList .listBox{
    display: flex;
    align-items: center;
}
.ranking .section .AnchorList .listBox .lisPic{
    width:50px;
    height:50px;
    overflow: hidden;
    border-radius: 50%;
    border:1px solid #FF8F9B;
    margin-left:30px;
}
.ranking .section .AnchorList .listBox .lisPic img{
    width:100%;
    height:auto;
}
.ranking .section .AnchorList .listBox .achiv{
    width:30px;
    height:21px;
    display: flex;
    align-items:center;
}
.ranking .section .AnchorList .listBox .achiv img:last-child{
    width:16px;
    height: 14px;
}
.ranking .section .AnchorList .listBox .achiv img:first-child{
    width:14px;
    height:14px;
}
.ranking .section .AnchorList .listBox .achivRoom{
    display: flex;
    align-items: center;
}
.ranking .section .AnchorList .listBox .listNum{
    color:#555;
    font-size: 12px;
}
.ranking .section .AnchorList .listBox .sign{
    color:black;
    font-size: 14px;
}
.ranking .section .AnchorList .listBox .roomId{
    font-size: 12px;
    color:#555;
    margin-left:22px;
}
.ranking .section .AnchorList .listBox .roomId span{
    color:red;
    font-size: 13px;
}
.ranking .section .AnchorList .listBox .textInfo{
    margin-left:20px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
}
.ranking .section .AnchorList .mui-table-view-cell > a:not(.mui-btn){
    margin:-16px -15px;
}
.ranking .section .AnchorList .tip{
    text-align: center;
    padding:25px 0;
    font-size: 14px;
    color:#555;
}
</style>


