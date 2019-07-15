<template>
    <div class="square">
        <div class="header-box">
            <div class="header">
                <div class="moving navIcon searchIcon">
                    <!-- <img src="//127.0.0.1:7000/img/hall_new_trends_black.png" alt=""> -->
                </div>
                <div class="headnav">
                    <div @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend()" :style="{left:left+'px'}"  class="slipeBox">
                        <mt-navbar v-model="selected">
                        <mt-tab-item id="大厅">大厅</mt-tab-item>
                        <mt-tab-item id="关注">关注</mt-tab-item>
                        <mt-tab-item id="最近观看">最近观看</mt-tab-item>
                        <mt-tab-item id="pk">pk</mt-tab-item>
                        <mt-tab-item id="新秀">新秀</mt-tab-item>
                        <mt-tab-item id="好声音">好声音</mt-tab-item>
                        <mt-tab-item id="萌妹子">萌妹子</mt-tab-item>
                    </mt-navbar>
                    </div>
                   
                </div>
                <div class="search navIcon movingIcon">
                    <!-- <img src="//127.0.0.1:7000/img/hall_search_black.png" alt=""> -->
                </div>
            </div>
        </div>
   

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="大厅">
                <hall-vue></hall-vue>
            </mt-tab-container-item>
            <mt-tab-container-item id="关注">
                <focus-vue></focus-vue>
            </mt-tab-container-item>
            <mt-tab-container-item id="最近观看">
                
            </mt-tab-container-item>
            <mt-tab-container-item id="pk">
              
            </mt-tab-container-item>
            <mt-tab-container-item id="新秀">
               
            </mt-tab-container-item>
            <mt-tab-container-item id="好声音">
                
            </mt-tab-container-item>
            <mt-tab-container-item id="萌妹子">
            
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
import hallVue from "./squareHead/hall"
import focusVue from "./squareHead/focus"
export default {
    data(){
        return{
            selected:"大厅",
            start:0,//touch时的位置
            end:0,//移动时当前位置
            len:0,//当前这次move的距离
            endLen:0,//之前所有次数的移动距离的累加和
            left:0//要改变的元素的left属性
        }
    },
    components:{
        hallVue,
        focusVue
    },
    methods:{
        touchstart(e){         
            this.start=e.touches[0].clientX
        },
         touchmove(e){      
             this.end=e.touches[0].clientX
                this.len=this.end-this.start
                //当滑动的范围不满足left的取值范围，不给left赋值
                if(this.endLen+this.len>0||this.endLen+this.len<-220){
                    //如果不在范围内，将本次的移动距离重置为0.
                      this.len=0;
                }else{
                     this.left=this.endLen+this.len
                }          
        },
        touchend(){         
            this.endLen+=this.len
        }
    }
}
</script>
<style>
.square .header-box{
    position: fixed;
   z-index: 999;
   right:0;
   left:0;
}
.square .header-box .header{
    display: flex;
    justify-content: space-between;
    align-items:center;
    width:100%;
}
.square .headnav{
   overflow: hidden;
   width:70%;
   position: relative;
}
.square .headnav .slipeBox{
    position: relative;
    left:0px;
}
.square .navIcon{
    width:15%;
    height:40px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 24px 24px;
}
.square .searchIcon{
     background-image:url("//127.0.0.1:7000/img/hall_search_black.png");
}
.square .movingIcon{
     background-image:url("//127.0.0.1:7000/img/hall_new_trends_black.png");
}
.square .mint-navbar{
    background-color: transparent;
}
.square .mint-tab-item-label{
    white-space:nowrap;
    font-size: 18px;
    margin-right: 10px;
    margin-left:10px;
}
.square .mint-navbar .mint-tab-item{
    padding:4px 0;
}
.square .mint-navbar .mint-tab-item.is-selected{
    margin-bottom: -1px;
    color:#fff;
    border-bottom-color: #F12C71;
}
.square .header-box a{
    color:#fff;
}
</style>


