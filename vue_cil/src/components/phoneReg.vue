<template>
    <div class="phoneReg">
        <mt-header title="手机号注册">
            <router-link to="/mainlogin" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <form class="mui-input-group">
            <div class="mui-input-row">
                <label>手机号</label>
                <input type="text" placeholder="请输入你的手机号码">
            </div>
           <div class="mui-input-row">
                <label>密码</label>
                <input type="text" placeholder="请输入密码">
            </div>
             <div class="mui-input-row">
                <label>验证密码</label>
                <input type="text" placeholder="请输入验证密码" class="iptCode">
                <span class="getcode">获取验证码</span>
            </div>
            <div class="gender mui-input-row"> 
                <label>性别</label>
                <span class="item" :class="{checked:n==i}" v-for="(elem,i) of sex" :key="i" @click="clickCheckbox(i)">{{elem}}</span>
            </div>
            <div class="sexTip">性别注册后不能修改</div>
             <div class="mui-input-row">
                <label>邀请码</label>
                <input type="text" placeholder="请输入邀请码（可选）">
            </div>
		</form>
        <p class="codeTip">填写邀请码可获得平台赠送的奖励</p>
        <div class="next">
            <button type="button" class="mui-btn mui-btn-success mui-btn-block">下一步</button>
        </div>
        <div class="mui-input-row mui-checkbox mui-left">
            <label class="server">注册即表示阅读并同意<a href="">秀色服务条款</a></label>
            <input name="checkbox" value="Item 2" type="checkbox" checked="">
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            sex:["男","女"],
            n:0
        }
    },
    methods:{
        //单选按钮点击当前按钮，当前按钮的i值赋值给n，当前按钮必定n==i，：两个元素上都用到同一个方法，当前的n值却只有一个。所以另一个元素n必定不等于i
        clickCheckbox(i){
            this.n=i
        }
    }
}
</script>
<style>
.phoneReg .mui-input-group{
    font-size: 14px;
    margin-top:12px;
}
.phoneReg .mintui-back:before{
    color:red;
}
.phoneReg .mint-header{
    color:black;
    background: #ffffff;
    border-bottom: 1px solid gray;
}
.phoneReg .mui-input-row label ~ input{
    font-size: 14px;
    float: none;
}
.phoneReg .mui-input-row label{
    width:25%;
}
.phoneReg .mui-input-row .iptCode{
    width:40%;
}
.phoneReg .mui-input-row .getcode{
    width:22%;
    height: 28px;
    top:50%;
    position: absolute;
    transform: translateY(-50%);
    padding: 2px 4px;
    border-radius: 20px;
    font-size: 12px;
    text-align: center;
    background: #65A3F6;
    color:#ffffff;
    right:10px;
    line-height: 26px;
}
.phoneReg .gender .item{
    padding:5px 23px;
    border:1px solid gray;
    border-radius: 20px;
    top:50%;
    position: absolute;
    transform: translateY(-50%);
}
.phoneReg .gender .item:first-child{
    left:25%;
}
.phoneReg .gender .item:last-child{
    left:50%;
}
/* 性别选中时的样式 */
.phoneReg .gender span.checked{
    background: #FD526F;
    color:#ffffff;
    border:none;
}
.phoneReg .mui-input-group .sexTip{
    height:30px;
    line-height: 30px;
    background-color: #EFEFF4;
    padding-left:15px;
}
.phoneReg .mui-input-row .server{
    width: 100%;
    font-size: 14px;
}
.phoneReg .next{
    padding:0px 15px;
}
.phoneReg .next .mui-btn-success{
    border-radius: 40px;
}
.phoneReg .codeTip{
    padding-left:15px;
}
</style>

