<template>
    <div class="phonelogin">
            <mt-header title="选择分区号">
                    <router-link to="/" slot="left">
                        <mt-button icon="back"></mt-button>
                    </router-link>
            </mt-header>
            <div class="mui-table-view-cell">
                    <a href="" class="mui-navigate-right">+86 中国</a>
            </div>
    </div>
</template>
<script>
export default{
    data(){
        return{

        }
    }
}
</script>
<style>
.phonelogin .mintui-back:before{
     color:#D8244B;
 }
 .phonelogin .mint-header-title{
     color:black;
 }
 .phonelogin .mint-header{
     background: #ffffff;
 }
 .phonelogin .mui-table-view-cell > a:not(.mui-btn){
     text-align: center;
     margin-top: 5px;
     height: 40px;
 }
 .phonelogin .mui-navigate-right:after, .mui-push-left:after, .mui-push-right:after{
     font-size: 22px;
     color:#D8244B; 
 }
 .phonelogin .mui-navigate-right{
     background: #ffffff;
     font-size: 14px;
 }
</style>