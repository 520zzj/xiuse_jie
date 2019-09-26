<template>
    <div class="live">
        <div class="back" @click="backSquare"><van-icon name="arrow-left" size="18px"/></div>
        <div class="videoBox">
            <div class="focus" v-bind:class="{focused:focused,'no_focus':no_focus}" v-on:click="focus"></div>
             <video  id="videobox" autoplay class="video-js vjs-default-skin vjs-big-play-centered vjs-16-9" preload="auto" webkit-playsinline="true" playsinline="true" type="application/x-mpegURL" allowsInlineMediaPlayback=YES  webview.allowsInlineMediaPlayback=YES  width='100%' ref='videoRef' x5-video-player-fullscreen="true" poster="http://127.0.0.1:7000/img/showself.png">
            <source :src="$store.getters.getSourceSrc">
        </video>
        </div>
    </div>
   
       
</template>
<script>
//引用videojs实现网页可以播放hls流的视频
import 'video.js/dist/video-js.css'
import videojs from 'video.js'
import 'videojs-contrib-hls'
export default {
    name:"live",
    data(){
        return{
            focused:false,
            no_focus:true
        }
    },
    
    mounted(){
        videojs('videobox',{
            bigPlayButton: true,
                    textTrackDisplay: true,
                    posterImage: true,
                    errorDisplay: false,
                    controlBar: false,
                    playbackRates: [0.5, 1, 1.5, 2],
                    ControlBar:{
                        customControlSpacer: true
                    },
                    function() {
                        this.play()
                    }
        })
       
    },
    beforeDestroy(){
            const videoDom = this.$refs.videoRef;   //不能用document 获取节点
            videojs(videoDom).dispose();  //销毁video实例，避免出现节点不存在 但是flash一直在执行,也避免重新进入页面video未重新声明
    },
    methods:{
        backSquare(){
            this.$router.push({name:'square'})
        },
        focus(){//关注
            this.focused=!this.focused
            this.no_focus=!this.no_focus
            //判断有没有关注了主播，有关注，则发送后台移除关注，没关注，则发送后台添加关注
            if(this.focused){
                //未关注时，获取视频的信息，发送ajax到后台，添加关注的主播
                this.axios.post("http://127.0.0.1:7000/square/saveFocus",
                    this.qs.stringify({
                        hid:this.$route.params.hid,
                        hallBg_src:this.$route.params.hallBg_src,
                        hallRanking_src:this.$route.params.hallRanking_src,
                        RankIcon_src:this.$route.params.RankIcon_src,
                        sign:this.$route.params.sign,
                        watchIcon_src:this.$route.params.watchIcon_src,
                        watchNum:this.$route.params.watchNum,
                        uid:this.$route.params.uid,//假设当前的用户3对应的id
                        sourceSrc:this.$route.params.sourceSrc
                    })
                ).then(res=>{
                    if(res.data.code===1) console.log("关注成功")
                })
            }else{
                //获取视频的id和当前用户的id，发送ajax到后台，移除关注的主播
                this.axios.get("http://127.0.0.1:7000/square/canncelFocus",{
                    params:{
                        uid:this.$store.getters.getUid,
                        hid:this.$route.params.hid
                    }
                }).then(res=>{
                    if(res.data.code===1) console.log("成功取消关注")
                })
            }
            
            
                        
        }

    },
    created(){
       //初始化关注按钮状态，发送ajax从后台获取
       this.axios.get("http://127.0.0.1:7000/square/singleFocus",{
           params:{
               uid:this.$store.getters.getUid,
               hid:this.$route.params.hid
           }
       })
       .then(res=>{
        if(res.data.code===1){
             //如果已经关注了，显示相应的关注按钮的样式
            this.focused=true
            this.no_focus=false
        }else{
            //如果没有关注了，显示相应的没有关注按钮的样式
            this.focused=false
            this.no_focus=true
        }
       })
    }
}
</script>
<style>
.live .back{
    position: fixed;
    left:10px;
    top:10px;
    z-index: 999;
}
.live .videoBox{
    position: relative;
}
.live .videoBox .focus{
    width:30px;
    height:30px;
    position: absolute;
    z-index: 999;
    right:15px;
    transform: translateY(-50%);
    top:50%;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
}
.live .videoBox .no_focus{
    background-image: url("//127.0.0.1:7000/img/usercard_no_focus_on.png");
}
.live .videoBox .focused{
    background-image: url("//127.0.0.1:7000/img/usercard_focused_on.png");
}

</style>

