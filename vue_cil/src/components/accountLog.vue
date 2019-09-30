<template>
    <div class="accountLog">
        <mt-header title="登录">
            <router-link to="/mainlogin" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
         <form id='login-form' class="mui-input-group">
            <div class="mui-input-row">
                <label class="info_icon"><img src="//127.0.0.1:7000/img/login_account_img.png" alt=""></label>
                <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入用户名/手机号" v-focus v-model="uname">
            </div>
            <div class="mui-input-row">
                <label class="info_icon"><img src="//127.0.0.1:7000/img/login_password_img.png" alt=""></label>
                <input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码" v-model="upwd">
            </div>
        </form>
        <p class="findCode">找回密码</p>
        <div class="login-box">
            <button :disabled="btnState==false" class="mint-button login mint-button--primary mint-button--large is-disabled" :class="{btnBg:btnState}" @click="sendAjax"><!----> <label class="mint-button-text">登录</label></button>
        </div>
        <div class="ideCode">
            <a href="">通过短信验证码登录</a>
        </div>
        <div class="line">
          <hr class="hrLeft"><span>一键登录</span><hr class="hrRight">
        </div>
        <div class="login_methods">
            <ul class="login_list">
                <li class="login_item"><a href="#/wblogin" class="login_link"><img src="//127.0.0.1:7000/img/login_list_sina_icon.png" alt="" class="icon"></a></li>
                <li class="login_item"><a href="" class="login_link"><img src="//127.0.0.1:7000/img/login_list_wx_icon.png" alt=""  class="icon"></a></li>
                <li class="login_item"><a href="" class="login_link"><img src="//127.0.0.1:7000/img/login_list_tecent_icon.png" alt=""  class="icon"></a></li>
                <li class="login_item"><a href="" class="login_link"><img src="//127.0.0.1:7000/img/login_list_phone_icon.png" alt=""  class="icon"></a></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:"",
            upwd:"",
        }
    },
    methods:{
        sendAjax(){
           this.axios.post("http://127.0.0.1:7000/mainlogin/login",this.qs.stringify({
                    uname:this.uname,
                    upwd:this.upwd
                })).then(res=>{
                   if(res.data.code===1){
                       //登录成功，用返回的uid修改vuex中的uid，并跳转到广场页面
                       this.$store.commit("mutUid",res.data.uid)
                       this.$store.commit("mutSex",res.data.sex)
                       this.$store.commit("mutUname",res.data.uname)
                       this.$store.commit("mutAvatar",res.data.avatar)
                    //    console.log(res.data.avatar)
                    // console.log(res.data.uid)
                       this.$router.push({path:"/square"})
                   }else{
                       //错误的话，提示错误信息
                       this.$toast("用户名或密码错误")
                   }
                })
        }
    },
   computed:{
       btnState(){//当用户名和密码框都不为空时btnState==true,利用这个计算属性来动态控制按钮的禁用和颜色
           return this.uname!==""&&this.upwd!==""
       }
   }

}
</script>
<style>
.accountLog .login-box button.btnBg{
    background:green;
}
.accountLog .mui-input-group{
    margin:12px 0px;
}
.accountLog .mintui-back:before{
     color:#D8244B;
}
.accountLog .mint-header-title{
    color:black;
}
.accountLog .mint-header{
    background: #ffffff;
}
.accountLog .login-box{
    padding:8px 10px;
}
.accountLog .login-box .mint-button--primary{
    background: #9ECB9A;
}
.accountLog .login-box .login{
    border-radius:20px;
}
.accountLog .mui-input-row .info_icon{
     padding: 0;
    width:15%;
    text-align: center;
    padding-top:8px;
}
.accountLog .mui-input-row .info_icon img{
     width:18px;
    height:22px;
}
.accountLog .mui-input-row label ~ input{
     width:85%;
    font-size: 14px;
    color:#aab2bd;
}
.accountLog .findCode{
    text-align: right;
    padding-right:15px;
}
.accountLog .ideCode{
    text-align: center;
    margin-top:20px;
    margin-bottom: 20px;
}
.accountLog .ideCode a{
    font-size: 12px;
}
.accountLog .line{
    text-align: center;
    padding:0 10px;
}
.accountLog .line hr{
    display: inline-block;
    vertical-align: middle;
    width:30%;
}
.accountLog .line span{
    width: 30%;
    display: inline-block;
}
.accountLog .line .hrLeft{
   float: left;
}
.accountLog .line .hrRight{
    float: right;
}
.accountLog .login_methods{
    margin-top:25px;
}

.accountLog .login_methods .login_list{
   position: absolute;
   width:75%;
   display: flex;
   margin: 0;
   padding:0;
   justify-content:space-between;
   left:50%;
   transform: translatex(-50%)
}
.accountLog .login_methods .login_item{
    background-color: transparent;
    list-style: none;
    text-align: center;
}
.accountLog .login_link{
    display: block;
    width:40px;
    height:40px;
    border-radius: 50%;
    overflow: hidden;
}
.accountLog .login_link img.icon{
    width:100%;
    height:100%;
}
</style>
