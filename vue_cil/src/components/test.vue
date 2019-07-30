<template>
    <div class="test">
        <div class="header">
            <ul class="navBar">
            <li v-for="(item,index) in tabs" :key="index" @click="changeContent(index)" :class="{active:isActive==index}">
                <a>{{item}}</a>
            </li>
        </ul>
        </div>
        
        <div class="swipe">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(item,index) in list" :key="index">
                    <div class="content">
                        <ul class="proList">
                            <li>{{item.id}}</li>
                            <li>{{item.pdImg}}</li>
                            <li>{{item.pdPrice}}</li>
                            <li>{{item.pdSold}}</li>
                            <li>{{item.pdName}}</li>
                        </ul>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
import mockData from '../mock/pdlist'
export default {
    data(){
        return{
          list:["页面1","页面2","页面3"],
          tabs:["衣服","鞋子","化妆品"],
          isActive:0,
          swiperOption:{
              on:{
                  //注册页面滑动触发的事件
                  transitionEnd:()=>{
                      console.log(this.swiper.activeIndex)
                      this.isActive=this.swiper.activeIndex
                  }
              }
          }
        }
    },
    computed:{
        swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods:{
        changeContent(index){
            this.swiper.slideTo(index)
            this.isActive=index
        },
        loadDate(){
            this.list=mockData.slice(0,3)
        }
    },
    mounted(){
        this.loadDate()
        console.log(mockData)
    }
  
}
  
</script>
<style scoped>

.test .content{
    background:green;
    /* height:200px; */
}


/* 头部样式 */
.test .navBar{
    display:flex;
    justify-content:center;
}
.test .header{
    position: fixed;
    z-index: 10;
    left:0;
    right:0;
    top:0;
}
.test .navBar li{
    padding:10px 15px;
}
.test .navBar li.active{
    background:red;
}
.test .proList li{
    height: 200px;
}
.test .swipe{
    margin-top:41px;
}
</style>


