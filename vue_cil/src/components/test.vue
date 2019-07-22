<template>
    <div class="test">
       <div class="header">
           <ul>
               <li><a href="">菜单1</a></li>
               <li><a href="">菜单2</a></li>
               <li><a href="">菜单3</a></li>
               <!-- <li><a href="">菜单4</a></li> -->
           </ul>
       </div>
       <div class="section">
          <vue-one></vue-one>
       </div>
    </div>
</template>
<script>
import vueOne from "./pages/pageOne.vue"
import vueTwo from "./pages/pageTwo.vue"
import vueThree from "./pages/pageThree.vue"
export default {
    data(){
        return{}
    },
    components:{
        vueOne,
        vueTwo,
        vueThree
    }
}   
</script>
<style>
.test .header{
    position: fixed;
    left:0;
    right:0;
    top:0;
}
.test .header ul{
    display: flex;
    justify-content: center;
    height:30px;
}
.test .header ul li{
    width:33%;
    border:1px solid red;
}
.test .section{
    margin-top:30px;
}
</style>


