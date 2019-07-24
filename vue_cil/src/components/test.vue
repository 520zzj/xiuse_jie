<template>
    <div class="test">
        <ul>
            <li>
                <router-link to="/pageOne">页面1</router-link>
                <router-link to="/pageTwo">页面2</router-link>
               <router-link to="/pageThree">页面3</router-link>
            </li>
        </ul>
        <div class="swipe">
            <transition name="left">
                <router-view></router-view>        
            </transition>
        </div>
     
    </div>
</template>
<script>
import vueOne from "./pages/pageOne.vue"
import vueTwo from "./pages/pageTwo.vue"
import vueThree from "./pages/pageThree.vue"
export default {
    data(){
        return{
            active:0,
            arr:["页面","页面","页面","页面","页面","页面"]
        }
    },
    components:{
        vueOne,
        vueTwo,
        vueThree
    }
}   
</script>
<style>
.swipe{
    width:100%;
    height: 300px;
}
.v-enter{opacity: 0;}
  .v-enter-to{opacity: 1;}
  .v-enter-active{transition: 1s;} /*定义过渡时间*/
  .v-leave{opacity: 1;}
  .v-leave-to{opacity: 0;}
  .v-leave-active{transition: 2s;} 
  .left-enter{transform: translateX(100%)}/*100%代表在屏幕外*/
  .left-enter-to{transform: translateX(0)}
  .left-enter-active{transition:1s}
  .left-leave{transform: translateX(0)}
  .left-leave-to{transform: translateX(-100%)}
  .left-leave-active{transition:.5s}

  .right-enter{transform: translateX(-100%)}/*-100%代表在屏幕外,屏幕的左边*/
  /* .right-enter-to{transform: translateX(0)}; */
  /* .right-leave{transform: translateX(0)} */
  .right-leave-to{transform: translateX(100%)}/*屏幕的右边*/
  .right-enter-active{transition:1s}
  .right-leave-active{transition:1s}
</style>


