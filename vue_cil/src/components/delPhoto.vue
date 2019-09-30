<template>
    <div class="delPhoto" @click="changeNavbar">
        <div class="header" v-show="navTop">
            <van-nav-bar title="标题" left-arrow @click-left="onClickLeft">
                <span slot="title">{{curIndex+1}}/{{srcList.length}}</span>
                </van-nav-bar>
        </div>
        <div class="banner">
            <mt-swipe :auto="0" @change="handleChange" :show-indicators="false" :default-index="$route.query.defaultIndex">
                <mt-swipe-item v-for="(item,index) in srcList" :key="index"><img :src="item.img_src" alt="" :style="{width:$store.state.width_s+'px'}"></mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="bottom" v-show="navBot">
            <ul class="icon_list">
                <li><img src="//127.0.0.1:7000/img/guanzhu.png" alt=""></li>
                <li><img src="//127.0.0.1:7000/img/liaotian.png" alt=""></li>
                <li><img src="//127.0.0.1:7000/img/xiazai.png" alt="" @click="sigPicDown"></li>
                <li><img src="//127.0.0.1:7000/img/fenxiang-.png" alt=""></li>
                <li><img src="//127.0.0.1:7000/img/iconfontshanchu1.png" alt="" @click="delPhoto"></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"delPhoto",
    data(){
        return{
            srcList:[],//保存照片地址和id
            curIndex:"",//当前的swiper的下标
            navTop:true,//navbar
            navBot:true//navbar
        }
    },
    methods:{
        handleChange(index){//切换轮播时触发
            // index为切换后的下标
            this.curIndex=index
        },
        onClickLeft(){//头部返回事件
            this.$router.push({path:'/me'})
        },
        delPhoto(){//发送ajax删除当前的照片
            var id=this.srcList[this.curIndex].id//获取当前图片的id
            // console.log(id)
            this.axios.get("http://127.0.0.1:7000/me/delPhoto",{
                params:{
                    id:id,
                    uid:this.$store.getters.getUid
                }
            }).then(res=>{
              
                // console.log(res)
                //刷新照片
                this.getPhotoList()
                this.navTop=true
                this.navBot=true
            })
        },
        getPhotoList(){//发送ajax获取图片列表
            this.axios.get("http://127.0.0.1:7000/me/down").then(res=>{
                // console.log(res)
                this.srcList=res.data
            })
        },
        sigPicDown(){//下载当前的图片
            var a=document.createElement("a")//创建a元素
            var src=this.srcList[this.curIndex].img_src//当前图片地址
            var arr=src.split("/")
            var picName=arr[arr.length-1] //截取图片名称
            a.href=src//链接到图片地址
            a.download=picName//利用download属性下载图片picname为图片新名称
            a.click()
        },
        changeNavbar(){//显示和隐藏navbar
            this.navTop=!this.navTop
            this.navBot=!this.navBot
        }
    },
    mounted(){
        //获取me组件传递过来的地址和默认下标
        this.srcList=this.$route.query.srcList
        this.curIndex=this.$route.query.defaultIndex
    }
}
</script>
<style>
.delPhoto{
    width:100%;
    height:100%;
    position: relative;
    background:black;
}
.delPhoto .banner{
    width:100%;
    height:60%;
    /* background: red; */
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    overflow: hidden;
}
.delPhoto .banner img{
    height:100%;
}
.delPhoto .header .van-nav-bar .van-icon{
    color:red;
    height:36px;
}
.delPhoto .header .van-nav-bar__arrow{
    font-size: 24px;
}
.delPhoto .bottom .icon_list{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:10px 0 10px 0;
}
.delPhoto .bottom{
    background:linear-gradient(to top,#1D2124,#121619);
    position: absolute;
    z-index: 2;
    bottom:0;
    left:0;
    right:0;
}
.delPhoto .bottom img{
    width:25px;
    height:25px;
}
</style>


