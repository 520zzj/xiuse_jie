<template>
    <div class="speedReg">
        <mt-header title="快速注册">
            <router-link to="/mainlogin" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <form class="mui-input-group">
            <div class="mui-input-row">
                <label>用户名</label>
                <input type="text" placeholder="3-10位数字、字母或下划线" v-model="uname" v-focus>
            </div>
           <div class="mui-input-row">
                <label>密码</label>
                <input type="password" placeholder="6位数字" v-model="upwd">
            </div>
             <div class="mui-input-row">
                <label>确认密码</label>
                <input type="password" placeholder="请输入验证密码" class="iptCode" v-model="comfUpwd">
                <!-- <span class="getcode">获取验证码</span> -->
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
            <button type="button" class="mui-btn mui-btn-success mui-btn-block" @click="sendAjax">下一步</button>
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
            n:0,
            uname:"",
            upwd:"",
            comfUpwd:""
        }
    },
    methods:{
        //单选按钮点击当前按钮，当前按钮的i值赋值给n，当前按钮必定n==i，：两个元素上都用到同一个方法，当前的n值却只有一个。所以另一个元素n必定不等于i
        clickCheckbox(i){
            this.n=i
        },
        sendAjax(){
            if(!this.testUname){
                this.$toast("用户名格式不正确")
                return;
            }else if(!this.testUpwd){
                this.$toast("密码格式不正确")
                return;
            }else if(!this.testComfUpwd){
                this.$toast("输入密码不一致")
                return;
            }else{
                //先发送ajax验证是否占用用户名，如果占用了，则提示占用，没有，则发送ajax注册
                this.axios.post("http://127.0.0.1:7000/mainlogin/regUname",
                    this.qs.stringify({
                        uname:this.uname
                    })
                    ).then(res=>{
                        console.log(res)
                        if(res.data.code==1){
                            this.$toast("用户名已占用")
                        }else{
                            this.axios.post("http://127.0.0.1:7000/mainlogin/register",
                            this.qs.stringify({
                                uname:this.uname,
                                upwd:this.upwd,
                                sex:this.getSex
                            })
                            ).then(res=>{
                                if(res.data.code===1){
                                    this.$router.push({path:"/accountLog"})
                                }
                            })
                        }
                    })
                
            }
        },
      
        
    },
    computed:{
        testUname(){//验证用户名
        //3-10位数字,字母，下划线
            // var reg=new RegExp("^[a-zA-Z0-9_-]{3,10}$","ig")
            var reg=new RegExp("^\\w{3,10}$")
            return reg.test(this.uname)
        },
        testUpwd(){//验证密码,6位数字
            var reg=new RegExp("^\\d{6}$")
            return reg.test(this.upwd)
        },
        testComfUpwd(){//验证确认密码
            return this.upwd===this.comfUpwd?true:false
        },
        getSex(){//获取性别，后台接收0表示女的，1表示男的
            if(this.n==0){return 1}
            if(this.n==1){return 0}
        }
    }
}
</script>
<style>
.speedReg .mui-input-group{
    font-size: 14px;
    margin-top:12px;
}
.speedReg .mintui-back:before{
    color:red;
}
.speedReg .mint-header{
    color:black;
    background: #ffffff;
    border-bottom: 1px solid gray;
}
.speedReg .mui-input-row label ~ input{
    font-size: 14px;
    float: none;
}
.speedReg .mui-input-row label{
    width:25%;
}
.speedReg .mui-input-row .iptCode{
    width:40%;
}
/* .phoneReg .mui-input-row .getcode{
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
} */
.speedReg .gender .item{
    padding:5px 23px;
    border:1px solid gray;
    border-radius: 20px;
    top:50%;
    position: absolute;
    transform: translateY(-50%);
}
.speedReg .gender .item:first-child{
    left:25%;
}
.speedReg .gender .item:last-child{
    left:50%;
}
/* 性别选中时的样式 */
.speedReg .gender span.checked{
    background: #FD526F;
    color:#ffffff;
    border:none;
}
.speedReg .mui-input-group .sexTip{
    height:30px;
    line-height: 30px;
    background-color: #EFEFF4;
    padding-left:15px;
}
.speedReg .mui-input-row .server{
    width: 100%;
    font-size: 14px;
}
.speedReg .next{
    padding:0px 15px;
}
.speedReg .next .mui-btn-success{
    border-radius: 40px;
}
.speedReg .codeTip{
    padding-left:15px;
}
</style>

