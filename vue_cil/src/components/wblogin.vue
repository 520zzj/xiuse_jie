<template>
    <div class="wblogin">
            <header class="mui-bar mui-bar-nav">
                    <span class="off">关闭</span>
                    <h1 class="mui-title">微博登录</h1>
                </header>
                <div class="mui-content">
                    <div class="logo">
                        <img src="//127.0.0.1:7000/img/share_sina.png" alt="">
                    </div>
                    <form id='login-form' class="mui-input-group">
                        <div class="mui-input-row">
                            <label class="info_icon"><img src="//127.0.0.1:7000/img/login_account_img.png" alt=""></label>
                            <input id='account' type="text" class="mui-input-clear mui-input" placeholder="邮箱/手机号">
                        </div>
                        <div class="mui-input-row">
                            <label class="info_icon"><img src="//127.0.0.1:7000/img/login_password_img.png" alt=""></label>
                            <input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
                        </div>
                    </form>
                    <div class="mui-content-padded">
                        <button id='login' type="button" class="mui-btn mui-btn-block mui-btn-primary">登录</button>
                    </div>
                   
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
.wblogin .mui-bar .off{
    display: inline-block;
    height:100%;
    line-height: 44px;
    color:#FF8200;
}
.wblogin .mui-content .logo{
    height: 150px;
    background: white;
    padding-top: 60px;
    text-align: center;
}
.wblogin .logo img{
    width:57px;
    height:57px;
}
.wblogin .mui-input-row .info_icon{
    padding: 0;
    width:15%;
    text-align: center;
    padding-top:8px;
}
.wblogin .mui-input-row .info_icon img{
    width:18px;
    height:22px;
}
.wblogin .mui-input-row label ~ input{
    width:85%;
    font-size: 12px;
    color:#aab2bd;
}
.wblogin .mui-btn-block{
    padding:10px;
    background:#FF8200;
    font-size: 14px;
}
.wblogin .mui-btn-primary{
    border-color:#FF8200;
}
</style>