<template>
    <div class="mainlogin">
        <div class="bg_box">
        </div>
        <div class="over">
            <div class="overBox">
                <div class="showself">
                    <img src="//127.0.0.1:7000/img/login_slogan.png" alt="">
                </div>
                <div class="logInfo">
                    <a class="once_login">
                        一键登录
                    </a>
                    <div class="login_methods">
                        <ul class="login_list">
                            <li class="login_item">
                                    <router-link class="login_link" to="/wblogin">
                                        <img src="//127.0.0.1:7000/img/icon_onekey_login_sina.png" alt="">
                                    </router-link>
                            </li>
                            <li class="login_item">
                                    <router-link class="login_link" to="/wblogin">
                                        <img src="//127.0.0.1:7000/img/icon_onekey_login_wx.png" alt="">
                                    </router-link>                                    
                            </li>
                            <li class="login_item">
                                    <router-link class="login_link" to="/wblogin">
                                        <img src="//127.0.0.1:7000/img/icon_onekey_login_qq.png" alt="">
                                    </router-link>                                    
                            </li>
                            <li class="login_item">
                                    <router-link class="login_link" to="/phonelogin">
                                        <img src="//127.0.0.1:7000/img/icon_onekey_login_phone.png" alt="">
                                    </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="reg_log">
                            <router-link to="/speedReg" class="reg">快速注册</router-link><router-link to="/accountLog" class="log">账号登录</router-link>
                    </div>
                    <div class="contract">
                        <span>登录即代表你同意</span>
                        <a href="">秀色直播服务和条款</a>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){//data为函数原因，可以使得产生局部作用域，在当前组件共享数据
        return {

        }
    }
}
</script>
<style scoped>
    .mainlogin{
        width:100%;
        height:100%;
        overflow: hidden;
    }
    /* 定义动画 */
    @keyframes logBg{
      0%{
          transform: translate(0);
      }
      25%{
          transform: translate(100px);
      }
      50%{
          transform: translateX(0px);
      }
      75%{
          transform: translate(-100px);
      }
      100%{
          transform: translate(0);
      }
    }
    /* 兼容浏览器 */
       @-webkit-keyframes logBg{
       0%{
          transform: translate(0);
      }
      25%{
          transform: translate(100px);
      }
      50%{
          transform: translateX(0px);
      }
      75%{
          transform: translate(-100px);
      }
      100%{
          transform: translate(0);
      }
    }
     @-ms-keyframes logBg{
       0%{
          transform: translate(0);
      }
      25%{
          transform: translate(100px);
      }
      50%{
          transform: translateX(0px);
      }
      75%{
          transform: translate(-100px);
      }
      100%{
          transform: translate(0);
      }
    }
    /* 登录背景  调用动画*/
    .bg_box{
        position: fixed;
        left:-100px;
        right:-100px;
        top:0;
        bottom: 0;
        z-index: 5;
        background-image: url("//127.0.0.1:7000/img/login_bg.jpg");
        background-repeat: no-repeat;
        background-position:center;
        background-size: auto 119%;
        animation: logBg 10s linear 0s infinite normal;
    }
    /* 封面 */
    .over{
        position: absolute;
        z-index: 999;
        width:100%;
        height:100%;
        top:0;
        bottom: 0;
        overflow: hidden;
    }
    .overBox{
       display: flex;
       justify-content: space-between;
       flex-direction: column;
       align-items: center;
        width: 100%;
        height: 100%;
    }
    .over .showself{
        width:80%;
        height:auto;
        margin-top:100px;
    }
    .over .showself img{
        width:100%;
        height:auto;
    }
    .logInfo{
        width:75%;
    }
    .logInfo .once_login{
        display: block;
        height:45px;
        text-align: center;
        line-height: 45px;
        border:1px solid #fff;
        border-radius: 35px;
        color:#fff;
        font-size: 16px;
    }
    .login_list{
        display: flex;
        justify-content: space-between;
        margin:30px 0;
    }
    .login_list .login_link{
        display: block;
        width:40px;
        height:40px;
        overflow: hidden;
    }
      .login_list .login_link img{
          width:100%;
          height:100%;
      }
      .reg_log{
          display: flex;
          justify-content: space-around;
          margin-bottom: 50px;
      }
      .reg_log a{
          color:#fff;
      }
    .contract{
        text-align: center;
        margin-bottom: 20px;
        font-size: 12px;
    }
    .contract span{
        color:#fff;
    }
    .contract a{
        color:red;
        text-decoration: underline;
    }
</style>