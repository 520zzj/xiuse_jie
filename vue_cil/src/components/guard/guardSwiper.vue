<template>
    <div class="guardSwiper">
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            <!-- slides -->
            <swiper-slide>
                
                    <div class="section">   
                        <!-- 刷新静态背景
                        <div class="freBgSta"></div>
                        刷新动态背景 
                        <div class="freMovBox">
                            <div class="freBgMovOne bg freBgMov"></div>
                        </div> -->  
                        <div class="befThree">
                            <ul class="threeBox">
                                <li v-for="(item,index) in befThree" :key="index">
                                        <a href="" class="link">
                                            <div class="Medal">
                                                <div class="circle"><img :src="item.proPic" alt=""></div>
                                            </div>
                                            <div class="details">
                                                <p class="style">{{item.name}}</p>
                                                <div class="rankBgBox">
                                                    <img :src="item.nameBg" alt="" class="rankBg">
                                                        <span class="rankText">{{item.name}}</span>
                                                    <div class="num">
                                                        <img :src="item.numOne" alt="">
                                                        <img :src="item.numTwo" alt="">
                                                    </div>
                                                </div>
                                                <div class="fight">战力值：<span>{{item.fight}}</span></div>
                                            </div>
                                        </a>
                                    </li>
                            </ul>
                        </div>
                        <div class="aftThree">
                            <ul class="mui-table-view">
                                    <li class="mui-table-view-cell"  v-for="(item,index) in befThree" :key="index">
                                        <a class="mui-navigate-right">
                                        <div class="listItem">
                                                    <span class="ranking">4</span>
                                                <div class="picFra"><img :src="item.proPic" alt=""></div>
                                                <span class="name">{{item.name}}</span>
                                                <div class="rankBgBox">
                                                    <img :src="item.nameBg" alt="" class="rankBg">
                                                        <span class="rankText">{{item.name}}</span>
                                                    <div class="num">
                                                        <img :src="item.numOne" alt="">
                                                        <img :src="item.numTwo" alt="">
                                                    </div>
                                                </div>
                                                <div class="fight">战力值：<span>{{item.fight}}</span></div>
                                        </div>
                                        </a>
                                    </li>
                                </ul>
                        </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                    <div class="section">     
                        <div class="befThree">
                            <ul class="threeBox">
                                <li v-for="(item,index) in befThree" :key="index">
                                        <a href="" class="link">
                                            <div class="Medal">
                                                <div class="circle"><img :src="item.proPic" alt=""></div>
                                            </div>
                                            <div class="details">
                                                <p class="style">{{item.name}}</p>
                                                <div class="rankBgBox">
                                                    <img :src="item.nameBg" alt="" class="rankBg">
                                                        <span class="rankText">{{item.name}}</span>
                                                    <div class="num">
                                                        <img :src="item.numOne" alt="">
                                                        <img :src="item.numTwo" alt="">
                                                    </div>
                                                </div>
                                                <div class="fight">战力值：<span>{{item.fight}}</span></div>
                                            </div>
                                        </a>
                                    </li>
                            </ul>
                        </div>
                        <div class="aftThree">
                            <ul class="mui-table-view">
                                    <li class="mui-table-view-cell"  v-for="(item,index) in befThree" :key="index">
                                        <a class="mui-navigate-right">
                                        <div class="listItem">
                                                    <span class="ranking">4</span>
                                                <div class="picFra"><img :src="item.proPic" alt=""></div>
                                                <span class="name">{{item.name}}</span>
                                                <div class="rankBgBox">
                                                    <img :src="item.nameBg" alt="" class="rankBg">
                                                        <span class="rankText">{{item.name}}</span>
                                                    <div class="num">
                                                        <img :src="item.numOne" alt="">
                                                        <img :src="item.numTwo" alt="">
                                                    </div>
                                                </div>
                                                <div class="fight">战力值：<span>{{item.fight}}</span></div>
                                        </div>
                                        </a>
                                    </li>
                                </ul>
                        </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="section">     
                        <div class="befThree">
                            <ul class="threeBox">
                                <li v-for="(item,index) in befThree" :key="index">
                                        <a href="" class="link">
                                            <div class="Medal">
                                                <div class="circle"><img :src="item.proPic" alt=""></div>
                                            </div>
                                            <div class="details">
                                                <p class="style">{{item.name}}</p>
                                                <div class="rankBgBox">
                                                    <img :src="item.nameBg" alt="" class="rankBg">
                                                        <span class="rankText">{{item.name}}</span>
                                                    <div class="num">
                                                        <img :src="item.numOne" alt="">
                                                        <img :src="item.numTwo" alt="">
                                                    </div>
                                                </div>
                                                <div class="fight">战力值：<span>{{item.fight}}</span></div>
                                            </div>
                                        </a>
                                    </li>
                            </ul>
                        </div>
                        <div class="aftThree">
                            <ul class="mui-table-view">
                                    <li class="mui-table-view-cell"  v-for="(item,index) in befThree" :key="index">
                                        <a class="mui-navigate-right">
                                        <div class="listItem">
                                                    <span class="ranking">4</span>
                                                <div class="picFra"><img :src="item.proPic" alt=""></div>
                                                <span class="name">{{item.name}}</span>
                                                <div class="rankBgBox">
                                                    <img :src="item.nameBg" alt="" class="rankBg">
                                                        <span class="rankText">{{item.name}}</span>
                                                    <div class="num">
                                                        <img :src="item.numOne" alt="">
                                                        <img :src="item.numTwo" alt="">
                                                    </div>
                                                </div>
                                                <div class="fight">战力值：<span>{{item.fight}}</span></div>
                                        </div>
                                        </a>
                                    </li>
                                </ul>
                        </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="section">     
                        <div class="befThree">
                            <ul class="threeBox">
                                <li v-for="(item,index) in befThree" :key="index">
                                        <a href="" class="link">
                                            <div class="Medal">
                                                <div class="circle"><img :src="item.proPic" alt=""></div>
                                            </div>
                                            <div class="details">
                                                <p class="style">{{item.name}}</p>
                                                <div class="rankBgBox">
                                                    <img :src="item.nameBg" alt="" class="rankBg">
                                                        <span class="rankText">{{item.name}}</span>
                                                    <div class="num">
                                                        <img :src="item.numOne" alt="">
                                                        <img :src="item.numTwo" alt="">
                                                    </div>
                                                </div>
                                                <div class="fight">战力值：<span>{{item.fight}}</span></div>
                                            </div>
                                        </a>
                                    </li>
                            </ul>
                        </div>
                        <div class="aftThree">
                            <ul class="mui-table-view">
                                    <li class="mui-table-view-cell"  v-for="(item,index) in befThree" :key="index">
                                        <a class="mui-navigate-right">
                                        <div class="listItem">
                                                    <span class="ranking">4</span>
                                                <div class="picFra"><img :src="item.proPic" alt=""></div>
                                                <span class="name">{{item.name}}</span>
                                                <div class="rankBgBox">
                                                    <img :src="item.nameBg" alt="" class="rankBg">
                                                        <span class="rankText">{{item.name}}</span>
                                                    <div class="num">
                                                        <img :src="item.numOne" alt="">
                                                        <img :src="item.numTwo" alt="">
                                                    </div>
                                                </div>
                                                <div class="fight">战力值：<span>{{item.fight}}</span></div>
                                        </div>
                                        </a>
                                    </li>
                                </ul>
                        </div>
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <!-- <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
    </div>
</template>
<script> 
export default {
    // name: 'carrousel',
    data() {
      return {
        befThree:[
            {proPic:"//127.0.0.1:7000/img/69ded6a598_250_350.jpg",name:"名牌",nameBg:"//127.0.0.1:7000/img/armybackground80_99.png",numOne:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",numTwo:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",fight:"86247"},
            {proPic:"//127.0.0.1:7000/img/69ded6a598_250_350.jpg",name:"名牌",nameBg:"//127.0.0.1:7000/img/armybackground80_99.png",numOne:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",numTwo:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",fight:"86247"},
            {proPic:"//127.0.0.1:7000/img/69ded6a598_250_350.jpg",name:"名牌",nameBg:"//127.0.0.1:7000/img/armybackground80_99.png",numOne:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",numTwo:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",fight:"86247"}
        ],

        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(0, 1000, false)
    },
    methods:{
        callback(){

        }
    }
  
}
</script>
<style>
.guardSwiper{
    margin-top: 79px;
}
.guardSwiper .section{
    background:#fff;
}
.guardSwiper .section .befThree a{
    display:block;
    text-align: center;
}
.guardSwiper  .section .befThree .threeBox{
    display:flex;
    justify-content: center;
    height:193px;
    align-items:flex-end;
}
.guardSwiper  .section .befThree .threeBox li{
    width:32%;
}
.guardSwiper  .section .befThree .threeBox li:first-child{
    background:#FEEBEF;
}
.guardSwiper .section .befThree .threeBox li:nth-child(2){
    background:#FEE4D9;
}
.guardSwiper .section .befThree .threeBox li:last-child{
    background:#DEF6FB;
}
.guardSwiper  .section .befThree li:first-child .Medal{
    background-image:url("//127.0.0.1:7000/img/showself_team_icon_ranking_2.png");
}
.guardSwiper  .section .befThree li:nth-child(2) .Medal{
    background-image:url("//127.0.0.1:7000/img/showself_team_icon_ranking_1.png");
}
.guardSwiper .section .befThree li:last-child .Medal{
    background-image:url("//127.0.0.1:7000/img/showself_team_icon_ranking_3.png");
}
.guardSwiper  .section .befThree .Medal{
    background:center;
    background-repeat: no-repeat;
    height:82px;
    width:70px;
    background-size: 100%;
    margin:0 auto;
    position: relative;
    background-position:top center;
}   
.guardSwiper  .section .circle{
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
.guardSwiper .section .circle img{
    width:100%;
    height:auto;
}
.guardSwiper .section .befThree .style{
    font-size: 10px;
    margin-bottom:3px;
}
.guardSwiper .section .befThree li:first-child .style{
    color:#D23F72;
}
.guardSwiper  .section .befThree  li:nth-child(2) .style{
    color:#CC7958;
}
.guardSwiper .section .befThree  li:last-child .style{
    color:#57ACAA;
}
.guardSwiper .section .rankBgBox{
    position: relative;
    width:46px;
    height:22px;
    /* text-align: center; */
    margin:0 auto;
}
.guardSwiper .section .rankBgBox .num{
    position: absolute;
    top:14px;
    right:-6px;
}
.guardSwiper .section .num img{
    width:7px;
    height:11px;
}
.guardSwiper .section .rankBg{
    width:100%;
    height:100%;
}
.guardSwiper .section .rankBgBox .rankText{
    position:absolute;
    white-space: nowrap;
    top:0px;
    right: 10px;
    font-size:12px;
    color:#fff;
}
.guardSwiper .section .befThree .fight{
    font-size: 12px;
    color:gray;
    padding:12px 0;
}
.guardSwiper  .section .befThree  li:first-child .fight span{
    color:#D23F72;
}
.guardSwiper .section .befThree  li:nth-child(2) .fight span{
    color:#CC7958;
}
.guardSwiper .section .befThree  li:last-child .fight span{
    color:#57ACAA;
}
.guardSwiper  .section .befThree  li:nth-child(2) .Medal{
    margin-bottom: 10px;
}
.guardSwiper .section .aftThree .listItem{
    display:flex;
    align-items:center;
}
.guardSwiper  .section .aftThree .picFra{
    width:44px;
    height:44px;
    /* border:1px solid green; */
    border-radius: 50%;
    overflow:hidden;
}
.guardSwiper  .section .aftThree .picFra img{
    width:100%;
    height:auto;
}
.guardSwiper .section .aftThree .rankBgBox{
    margin:0px;
}
.guardSwiper  .section .aftThree .ranking{
    padding-right:10px;
    color:gray;
}
.guardSwiper  .section .aftThree .name{
    padding:0 12px;
    color:gray;
    font-size: 12px;

}
.guardSwiper  .section .aftThree .fight{
    font-size:12px;
    color:gray;
    padding-left:60px;
}
.guardSwiper .section .aftThree .fight span{
    color:#D23F72;
}
</style>


