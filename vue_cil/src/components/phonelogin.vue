<template>
    <div class="phonelogin">
            <mt-header title="快速登录">
                    <router-link to="/mainlogin" slot="left">
                        <mt-button icon="back"></mt-button>
                    </router-link>
            </mt-header>
            <div class="mui-table-view-cell">
                    <router-link to="/indexlist" class="mui-navigate-right">+86 中国</router-link>
            </div>
            <div class="iptsec">
                <div class="phoneNum inputBox">      
                <input placeholder="请输入你的手机号码" class="ipt"><button type="button" class="mui-btn mui-btn-primary getNum">获取验证码</button>
                </div>
                <div class="inputBox">
                <input placeholder="请输入验证码"  class="ipt">
                </div>
            </div>
                <div class="server">
                    <span class="checkbox" :class="{checked:choice[0].clearScan}" @click="changeChecked(`clearScan`)"></span> 
                    无痕浏览
                </div>
                <div class="login-box">
                    <mt-button type="primary"  size="large" v-if="isLogin" class="login">登录</mt-button>
                     <mt-button type="primary"  size="large" v-else disabled class="login">登录</mt-button>
                </div>
                <div  class="server">
                    <span class="checkbox"  :class="{checked:choice[1].agreement}" @click="changeChecked(`agreement`)"></span>
                  登录即表示阅读并同意<a>秀色服务条款</a>
                </div>
           
           
            
    </div>
</template>
<script>
//登录按钮禁用时<mt-button disabled>disabled</mt-button>
export default{
    data(){
        return{
            isLogin:false,//记录登录的状态，后面用vuex来做
            choice:[//记录选择状态
                {clearScan:false},
                {agreement:false}
            ]
        }
    },
    methods:{
        changeChecked(param){//用参数把选中框状态的改变区分开
            if(param=="clearScan"){
            this.choice[0].clearScan=!this.choice[0].clearScan
            }else if(param=="agreement"){
             this.choice[1].agreement=!this.choice[1].agreement
            }
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
 .phonelogin .iptsec{
     background: #ffffff;
 }
 .phonelogin .inputBox{
     border-top:1px solid gray;
     padding:10px 0px 10px 5px;
     margin-left:5px;
     display:flex;
     justify-content:space-between;
     background:#ffffff;
 }
 .phonelogin .inputBox .getNum{
     margin-right:10px;
     border-radius:20px;
 }
  .phonelogin .inputBox .ipt{
      border:none;
      outline:none;
       font-size:14px;
  }
  .phonelogin .server{
      padding:8px 10px;
      font-size:14px;
  }
   .phonelogin .server .checkbox{
       display:inline-block;
       width:18px;
       height:18px;
       border-radius:50%;
       border:1px solid gray;
   }
   .phonelogin .server .checked{
       background-image: url("//127.0.0.1:7000/img/checked.PNG");
       background-size: 100%;
       background-position: center;
       border:none;
   }
   .phonelogin .login-box{
       padding:8px 10px;
   }
   .phonelogin .login-box .login{
       border-radius:20px;
     
   }
</style>