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
       <div class="content">
           <div class="wall">
               <ul>
                   <li>
                       <a href="">
                           <div>
                               <img src="" alt="">
                           </div>
                           <img src="" alt="">
                           <span>7039677</span>
                           <p>
                               <img src="" alt="">
                               <img src="" alt="">
                           </p>
                       </a>
                       <p></p>
                   </li>
                   <li></li>
                   <li></li>
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
    /* float:left;
    margin:0 auto; */
    border-radius: 20px;
    background: rgba(250, 250, 250, 0.3);
}
.ranking .header .sort li{
    /* padding:5px 20px; */
    width:74px;
    padding:5px 0;
    text-align: center;
}
</style>


