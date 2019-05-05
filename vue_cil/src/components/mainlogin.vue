<template>
    <div class="mainlogin">
        <div class="bg_box">
        </div>
        <div class="over">
            <div class="showself"></div>
            <div class="once_login_box">
                    <a href="" class="once_login">一键登录</a>
            </div>
            <div class="login_methods">
                  <ul class="login_list">
                      <li class="login_item">
                            <a class="login_link" href=""><span class="mui-icon mui-icon-weibo icon"></span></a>
                      </li>
                      <li class="login_item">
                            <a class="login_link" href=""><span class="mui-icon mui-icon-weixin icon"></span></a>
                      </li>
                      <li class="login_item">
                            <a class="login_link" href=""><span class="mui-icon mui-icon-qq icon"></span></a>
                      </li>
                      <li class="login_item">
                            <a class="login_link" href=""><span class="mui-icon-extra mui-icon-extra-phone icon"></span></a>
                      </li>
                  </ul>
            </div>
            <div class="reg_log">
                    <a href="" class="reg">快速注册</a><a href="" class="log">账号登录</a>
            </div>
            <div class="contract">
                <span>登录即代表你同意</span>
                <a href="">秀色直播服务和条款</a>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return {

        }
    }
}
</script>
<style>

.mainlogin{
    position: absolute;
    overflow-x: hidden;
    bottom:0;
    top:0;
    width:100%;
    height:100%;
   z-index: -1;
}
.mainlogin .bg_box{
    position: absolute;
    z-index: -10;
    bottom:0;
    top:0;
    left:-100px;
    right:-100px;
    height:100%;
    background-image: url("//127.0.0.1:7000/img/login_bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
}
.mainlogin .over{
    /* background: gray; */
    position: absolute;
    top:0;
    bottom:0;
    width:100%;
    height:100%;
}

.mainlogin .once_login_box{
    position: absolute;
    bottom: 28%;
    right:0;
    left:0;
    width:100%;
}
.mainlogin .once_login_box .once_login{
   display: block;
   height:42px;
   width:60%;
   margin:0 auto;
   text-align: center;
   line-height: 42px;
   color:white;
   border-radius: 20px;
   border:1px solid white;
}
.mainlogin .login_methods{
    position: absolute;
    width:100%;
    bottom:23%;
}

.mainlogin .login_methods .login_list{
   position: absolute;
   width:75%;
   display: flex;
   margin: 0;
   padding:0;
   justify-content:space-between;
   left:50%;
   transform: translatex(-50%)
}
.mainlogin .login_methods .login_item{
    background-color: transparent;
    list-style: none;
    /* border-color:transparent; */
    text-align: center;
   
}
.mainlogin .login_link{
    display: block;
    width:40px;
    height:40px;
    padding:5px;
    border:1px solid white;
    border-radius: 50%;
}
.mainlogin .login_link span.icon{
    position: relative;
    top:2px;
    color:white;    
}
.mainlogin .contract{
    position: absolute;
    bottom:2%;
    width:100%;
    text-align: center;
    font-size: 12px;    
}
.mainlogin .contract span{
    color:white;
}
.mainlogin .contract a{
    color:red;
    text-decoration:underline;
}
.mainlogin .reg_log{
    position: absolute;
    bottom: 10%;
    left:50%;
    transform: translatex(-50%);
    font-size: 12px;
}
.mainlogin .reg_log .reg{
    padding-right:15px;
    color:white;
}
.mainlogin .reg_log .log{
    padding-left:15px;
    color:white;
}

</style>