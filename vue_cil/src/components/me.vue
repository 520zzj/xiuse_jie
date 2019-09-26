<template>
    <div class="me">
        <div class="header">
            <div class="headContent">
                <div class="set_data">
                    <a href=""> <img src="//127.0.0.1:7000/img/user_card_navi_setting_white.png" alt=""></a>
                    <a href=""><img src="//127.0.0.1:7000/img/custom_navi_right_profile_white.png" alt=""></a>
                </div>
                <div class="avatar">
                    <div class="picFra"><img src="//127.0.0.1:7000/img/20160212041257_XcaF5.thumb.700_0.jpg" alt=""></div>
                    <div class="sex"><img src="//127.0.0.1:7000/img/usercard_gender_man.png" alt=""></div>
                </div>
                <p class="name">zzj1y6AvuU</p>
                <div>
                    <ul class="userCard">
                        <li>火星</li>
                        <li>26岁</li>
                        <li>巨蟹座</li>
                    </ul>
                </div>
                <div class="movingLink">
                    <van-row>
                        <van-col span="8">
                            <a href="">
                            <span>1</span>
                            <div class="title">关注</div>
                            </a>
                        </van-col>
                         <van-col span="8">
                            <a href="">
                            <span>1</span>
                            <div class="title">粉丝</div>
                            </a>
                        </van-col>
                         <van-col span="8">
                            <a href="">
                            <span>1</span>
                            <div class="title">访客</div>
                            </a>
                        </van-col>
                    </van-row>
                </div>
            </div>
        </div>
        <div class="tab">
            <van-tabs v-model="active" line-width="25%" line-height="2px" @click="onClick">
                <van-tab title="成就">
                    <div class="tabsCont">  
                        <!-- 引用mint的cell组件        -->
                    <mt-cell is-link to="/mainlogin">
                            <img src="//127.0.0.1:7000/img/usercard_message_hint_bg.png" alt="" class="messIcon">
                            <span class="rightTextColor">3条新消息</span>
                        <img slot="icon" src="//127.0.0.1:7000/img/icon_usercard_mymessage.png" width="24" height="24" ref="mess">
                        <div slot="title" class="messTitle tip">我的消息</div>
                    </mt-cell>
                    <mt-cell title="我的物品" is-link to="/mainlogin">
                        <span>查看</span>
                        <img slot="icon" src="//127.0.0.1:7000/img/icon_usercard_my_gift.png" width="24" height="24">
                    </mt-cell>
                    <mt-cell title="我的护卫队" is-link to="/mainlogin">
                        <span>暂无</span>
                        <img slot="icon" src="//127.0.0.1:7000/img/icon_usercard_myarmy.png" width="24" height="24">
                    </mt-cell>
                    <mt-cell title="我的亲密榜" is-link to="/mainlogin">
                        <img slot="icon" src="//127.0.0.1:7000/img/icon_usercard_myaffinity.png" width="24" height="24">
                    </mt-cell>
                    <mt-cell title="财富等级：" is-link to="/mainlogin">
                        <span>暂无</span>
                        <img slot="icon" src="//127.0.0.1:7000/img/icon_usercard_wealth_level.png" width="24" height="24">
                    </mt-cell>
                    <mt-cell is-link to="/mainlogin">
                        <span  class="rightTextColor">充值</span>
                        <img slot="icon" src="//127.0.0.1:7000/img/icon_usercard_show_money_free.png" width="24" height="24">
                        <div slot="title"><div class="remainSum">秀币余额：<span class="rem_sum_cor">0</span></div></div>
                    </mt-cell>
                    <mt-cell is-link to="/mainlogin">
                        <span class="rightTextColor">兑换</span>
                        <img slot="icon" src="//127.0.0.1:7000/img/icon_usercard_show_jewel_free.png" width="24" height="24">
                        <div slot="title"><div class="remainSum">秀钻余额：<span class="rem_sum_cor">0</span></div></div>
                    </mt-cell>
                      </div>
                </van-tab>
                <van-tab title="特权">
                    <div class="medal">
                        <a href="" class="medalLink">
                            <div class="titleBg">用户勋章</div>
                            <ul class="medalList">
                                <li><img src="//127.0.0.1:7000/img/room_user_profile_medal_default_1.png" alt=""><p>未获得</p></li>
                                <li><img src="//127.0.0.1:7000/img/room_user_profile_medal_default_3.png" alt=""><p>未获得</p></li>
                                <li><img src="//127.0.0.1:7000/img/room_user_profile_medal_default_4.png" alt=""><p>未获得</p></li>
                            </ul>
                            <div class="medalArrow"><van-icon name="arrow" color="gray"/></div>
                        </a>
                    </div>
                    <ul class="defaultIcon">
                        <li>
                            <div class="medal">
                                <div class="titleBg">座驾</div>
                                <ul class="medalList">
                                    <li><img src="//127.0.0.1:7000/img/card_privilege_motoing_default.png" alt=""></li>
                                    <li><img src="//127.0.0.1:7000/img/card_privilege_motoing_default.png" alt=""></li>
                                    <li><img src="//127.0.0.1:7000/img/card_privilege_motoing_default.png" alt=""></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div class="medal">
                                <div class="titleBg">车牌</div>
                            <ul class="medalList">
                                <li><img src="//127.0.0.1:7000/img/icon_plate_num_bg.png" alt=""></li>
                                <li><img src="//127.0.0.1:7000/img/icon_plate_num_bg.png" alt=""></li>
                                <li><img src="//127.0.0.1:7000/img/icon_plate_num_bg.png" alt=""></li>
                            </ul>
                            </div>
                        </li>
                        <li>
                            <div class="medal">
                                  <div class="titleBg">守护</div>
                                 <ul class="medalList">
                                <li><img src="//127.0.0.1:7000/img/card_privilege_ward_default.png" alt=""><img src="//127.0.0.1:7000/img/card_privilege_ward_use.png" alt="" class="icon_sign"></li>
                                <li><img src="//127.0.0.1:7000/img/card_privilege_ward_default.png" alt=""><img src="//127.0.0.1:7000/img/card_privilege_ward_use.png" alt="" class="icon_sign"></li>
                                <li><img src="//127.0.0.1:7000/img/card_privilege_ward_default.png" alt=""><img src="//127.0.0.1:7000/img/card_privilege_ward_use.png" alt="" class="icon_sign"></li>
                            </ul>
                            </div>
                        </li>
                        <li>
                            <div class="medal">
                                  <div class="titleBg">会员</div>
                                 <ul class="medalList">
                                <li><img src="//127.0.0.1:7000/img/card_privilege_vip_default.png" alt=""></li>
                                <li><img src="//127.0.0.1:7000/img/card_privilege_vip_default.png" alt=""></li>
                                <li><img src="//127.0.0.1:7000/img/card_privilege_vip_default.png" alt=""></li>
                            </ul>
                            </div>
                        </li>
                        <li>
                            <div class="medal">
                                  <div class="titleBg">场控</div>
                                 <ul class="medalList">
                                <li><img src="//127.0.0.1:7000/img/card_privilege_ward_default.png" alt=""><img src="//127.0.0.1:7000/img/card_privilege_manage_use.png" alt="" class="icon_sign"></li>
                                <li><img src="//127.0.0.1:7000/img/card_privilege_ward_default.png" alt=""><img src="//127.0.0.1:7000/img/card_privilege_manage_use.png" alt="" class="icon_sign"></li>
                                <li><img src="//127.0.0.1:7000/img/card_privilege_ward_default.png" alt=""><img src="//127.0.0.1:7000/img/card_privilege_manage_use.png" alt="" class="icon_sign"></li>
                            </ul>
                            </div>
                        </li>
                    </ul>
                </van-tab>
                <van-tab>
                    <!-- title卡槽 -->
                    <div slot="title">
                        靓照({{tabs[2].list.length}})
                    </div>
                    <div class="picListBox">
                        <div class="loading" v-show="tabs[2].loading">
                            <van-loading size="34px">加载中...</van-loading>
                        </div>
                     
                         <ul class="picList">
                            <li>  
                                <div class="itemBox takePhoto">
                                   <!-- 隐藏input -->
                                    <div><input type="file" name="file" capture="camera" accept="image/*" @change="changeFile($event)"  ref="iptFile" class="iptFile"></div>
                                </div>
                            </li>
                            <li v-for="(item,index) in tabs[active].list" :key="index">
                                <div class="itemBox"><img :src="item.img_src" alt=""></div>
                            </li>
                        </ul>
                        <div class="tipMore" v-show="noMore">没有更多了...</div>
                    </div>
                </van-tab>
                <van-tab title="动态">
                        <div class="tipMore" v-show="noMore">没有更多了...</div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tabs:[{list:[]},{list:[]},{list:[],loading:false},{list:[]}],
            active:0,//当前tab的下标
            noMore:true,
            inputFile:false,//隐藏input
        }
    },
    methods:{
        onClick(tabIndex,title){//组件内置方法，传入tabindex和title
            // console.log(tabIndex,title)
            // console.log(this.active)
            this.sendAjax(tabIndex)

        },
        sendAjax(tabIndex){//获取照片列表
            if(tabIndex==2){ 
                this.tabs[tabIndex].loading=true
                this.axios.get("//127.0.0.1:7000/photo/down").then((res)=>{
                    console.log(res.data)
                    this.tabs[tabIndex].loading=false 
                    this.tabs[tabIndex].list=res.data
                  
                })
            }
        },
        changeFile(e){//上传文件
            // console.log(e.target.files[0])
            var file=e.target.files[0]//获取文件信息
            var fd=new FormData()//创建formdata对象
            fd.append('file',file)//向formdata里面追加信息，以键值对的形式添加file文件信息
            fd.append('uid',this.$store.getters.getUid)//以键值对的形式添加，用户的id，后台req.body.uid可以接受
            // console.log(fd)

            //使用axios上传图片
            this.axios.post("http://127.0.0.1:7000/photo/uploadImage",fd).then(res=>{
               if(res.data.code===1){
                   //如果成功上传则刷新靓照列表
                   this.sendAjax(2)
               }
            })

        },
       
    },
    mounted(){
        this.sendAjax(2)
    }

}
</script>
<style>
/* 加载提示 */
.me .loading{
    position: absolute;
    width:80%;
    height:auto;
    background:#fff;
    left:50%;
    transform: translateX(-50%);
    top:20px;
    padding:10px;
    z-index: 999;
}
/* 靓照 */
.me .picListBox{
    margin-bottom: 50px;
    position: relative;
}
.me .picListBox .picList{
    display: flex;
    flex-wrap: wrap;
    padding-top: 5px;
}
.me .picListBox .picList li{
    width:50%;
    position: relative;
    padding-top: 50%;
}
.me .picListBox .picList .itemBox{
    position: absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    padding:0 2.5px 5px 5px;
}
.me .picListBox .picList li:nth-of-type(2n) .itemBox{
    padding-right: 5px;
    padding-left:2.5px;
}
.me .picListBox .picList .itemBox img{
    width:100%;
    height:100%;
}
.me .tipMore{
    text-align: center;
    padding:20px 0;
}
.me .takePhoto{
    background-image: url("//127.0.0.1:7000/img/add_pic_bg.png");
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
}
.me .takePhoto .iptFile{
    width:100%;
    height:100%;
    z-index: 1;
    opacity: 0;
    position: absolute;
}
/* 特权 */
.me .medal{
    position: relative;
    background:#fff;
    margin-top:15px;
}
.me .medal .medalLink{
    display: block;
}
.me .medal .titleBg{
    text-align: center;
    color:red;
    font-size: 13px;
    position: absolute;
    top:-7px;
    left:50%;
    transform: translateX(-50%);
    width:40%;
    height:35px;
    line-height: 35px;
    background-image: url("//127.0.0.1:7000/img/icon_usercard_privilege_category_bg.9.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
}
.me .medalList{
    display: flex;
    justify-content: space-around;
    padding-top:30px;
}
.me .medalList img{
    width:auto;
    height:50px;
}
.me .medalList p{
    text-align: center;
    color:black;
    padding:3px 0 8px 0;
    font-size: 12px;
}
.me .medal .medalArrow{
    position: absolute;
    right:10px;
    top:50%;
    transform: translateY(-50%);
}
.me .defaultIcon li:nth-child(3) li,.me .defaultIcon li:last-child li{
    position: relative;
}
.me .medalList .icon_sign{
    position: absolute;
    width:20px;
    height:20px;
    bottom:0;
    right:0px;
}
.me .defaultIcon{
    margin-bottom: 50px;
}
.me .defaultIcon .medal{
    padding-bottom: 15px;
}
.me .mint-cell-wrapper{
    font-size: 12px;
}
.me .mint-cell-text{
    margin-left:5px;
}
/* 成就下面第一个cell */
.me .tabsCont .mint-cell:first-child .mint-cell-wrapper .mint-cell-title{
    width:38%;
    flex-wrap: nowrap;
    align-items: center;
    display: flex;
}
/* 提示消息 */
.me .tabsCont .mint-cell:first-child .mint-cell-wrapper .tip::after{
    content: "";
    display: block;
    width:8px;
    height:8px;
    border-radius: 50%;
    background: red;
    position: absolute;
    right:-6px;
    top:-6px;
}
.me  .tabsCont .mint-cell:first-child  .mint-cell-value{
    width:62%;
}
.me  .tabsCont .mint-cell:first-child .messTitle{
    white-space: nowrap;
    margin-left:8px;
    position: relative;
}
.me  .tabsCont .mint-cell:first-child .mint-cell-wrapper .messIcon{
    width:65%;
    height:100%;
}
.me  .tabsCont .mint-cell:first-child .mint-cell-wrapper .rightTextColor{
    width:35%;
    white-space: nowrap;
    text-align: right;
}
.me  .tabsCont .mint-cell:nth-child(5){
    margin:15px 0px;
}
.me  .tabsCont .mint-cell:first-child{
    margin-top: 15px;
}
.me  .tabsCont .mint-cell:last-child{
    margin-bottom: 50px;
}
.me  .header .name{
    text-align: center;
    color:#fff;
    margin-top:10px;
}
/* 后面两个调整标题插槽的样式 */
.me .tabsCont .mint-cell:nth-child(6) .mint-cell-title,.me .tabsCont .mint-cell:last-child .mint-cell-title{
    align-items: center;
    display: flex;
}
.me .remainSum{
    margin-left:8px;
}
.me .rem_sum_cor{
    color:red;
}
.me  .movingLink{
    /* display: flex; */
    width: 100%;
    font-size: 12px;
}

.me  .movingLink a{
    display: block;
    text-align: center;
    color:#fff;
}
.me .movingLink .title{
    margin-top:5px;
}
.me .movingLink .van-row{
    border-top:1px solid #d4d4d4;
    padding-top:10px;
}
.me .movingLink .van-col:nth-child(2) a{
   border-left:1px solid #d4d4d4;
   border-right:1px solid #d4d4d4;
}
.me .header{
    position: relative;
    background-image: url("//127.0.0.1:7000/img/20160212041257_XcaF5.thumb.700_0.jpg");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    z-index: 1;
    width:100%;
    height:275px;
    color:#fff;
}
/* 用伪类代替父元素背景发生模糊 */
.me .header::after{
    position: absolute;
    left:0;
    right:0;
    content: "";
    width:100%;
    height:100%;
    filter: blur(2px);
    z-index: 2;
    background: inherit;
    top:0px;
}
.me .header .headContent{
    position: absolute;
    left:0;
    right:0;
    z-index: 10;
    width:100%;
    height:100%;
}
.me .avatar{
    position: relative;
    margin:0 auto;
     width:90px;
    height:90px;
}
.me .avatar .picFra{
    width:90px;
    height:90px;
    overflow: hidden;
    border:1px solid #E7DBE6;
    border-radius: 50%;
}
.me .avatar .picFra img{
    width:100%;
    height:auto;
}
.me .avatar .sex{
    position: absolute;
    width:25px;
    height:25px;
    overflow: hidden;
    right:0;
    bottom:0;
}
.me .avatar .sex img{
    width:100%;
    height:100%;    
}
.me .userCard{
    display: flex;
    justify-content: center;
    margin:30px 0 10px 0;
}
.me .userCard li{
    width: 50px;
    height: 20px;
    overflow: hidden;
    border-radius: 4px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
}
.me .userCard li:first-child{
    background-image: url("//127.0.0.1:7000/img/usercard_city_bg.9.png");
    padding-left:10px; 
}
.me .userCard li:nth-child(2){
    background-image: url("//127.0.0.1:7000/img/usercard_age_bg.png");
    margin:0 10px;
    width:40px;
}
.me .userCard li:last-child{
    background-image: url("//127.0.0.1:7000/img/user_stars_bg.png");
}
.me .set_data{
    display: flex;
    justify-content: space-between;
}
.me .set_data a{
    padding: 10px;
}
.me .set_data a:first-child img{
    width:28px;
    height: 28px;
}
.me .set_data a:last-child img{
    width:28px;
    height: 26px;
}
/* 成就 */
.me .rightTextColor{
    color:#E75578;
}
</style>



