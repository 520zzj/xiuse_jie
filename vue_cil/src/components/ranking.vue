<template>
  <div>
    <!--标题-->
    <div class="header">
        <div class="rankChoice">
            <div class="starRank">周星榜</div>
            <div class="dropDown" @click="changeDropdown">
                    <ul class="dropMenu" :style="{display:isDropMenu}">
                    <li><a href="" class="active">明星榜</a></li>
                    <li><a href="">富豪榜</a></li>
                    <li><a href="">人气榜</a></li>
                    <li><a href="">周星榜</a></li>
                    <li><a href="">星星榜</a></li>
                </ul>
            </div>
        </div>
      <!--菜单. 如果up配置了isBounce为false,则需加上mescroll-touch-x,原因: http://www.mescroll.com/qa.html#q10 -->
      <div class="tabs-warp">
        <div ref="tabsContent" class="tabs-content mescroll-touch-x">
          <div style="display: inline-block;position:relative"> <!--PC端运行,加上这个div可修复tab-bar错位的问题 -->
            <ul class="tabs" ref="tabs">
              <li class="tab" v-for="(tab,i) in tabs" :style="{width: tabWidth+'px'}" :key="i" @click="changeTab(i)">{{tab.name}}</li>
            </ul>
            <div class="tab-bar" :style="{width: barWidth+'px', left: barLeft}">{{tabs[curIndex].name}}</div>
          </div>
        </div>
      </div>
    </div>
    <!--轮播-->
    <swiper ref="mySwiper" :options="swiperOption">  
      <!--日榜-->
      <swiper-slide>
        <mescroll-vue ref="mescroll0" :down="getMescrollDown(0)" :up="getMescrollUp(0)" @init="mescrollInit(0,arguments)">  
            <div id="dataList0">
                <div class="section clearMarTop">
                    <div class="wallBox">
                        <ul class="wall">
                                <li v-for="(item,index) in tabs[curIndex].list.slice(0,3)" :key="index">
                                        <a href="" class="link">
                                                <div class="picFraCir">
                                                    <img :src="item.hallBg_src" alt="">
                                                </div>
                                                <div class="picFra"></div>
                                                <div class="score">
                                                    <img :src="item.hallRanking_src" alt="">
                                                    <img :src="item.RankIcon_src" alt="">
                                                </div>
                                            <div class="sign">
                                                <span>{{item.sign}}</span>
                                            </div>
                                        </a>
                                        <p class="roomId">7039677</p>
                            </li>
                                <!-- <li class="champ">
                                        <a href="" class="link">
                                                <div class="picFraCir">
                                                    <img src="//127.0.0.1:7000/img/69ded6a598_250_350.jpg" alt="">
                                                    
                                                </div>
                                                <div class="picFra"></div>
                                                <div class="score">
                                                <img src="//127.0.0.1:7000/img/room_pk_count_down_1.png" alt="">
                                                <img src="//127.0.0.1:7000/img/showself_team_icon_protect_rank_one.png" alt="">
                                            </div>
                                            <div class="sign">
                                                <img src="//127.0.0.1:7000/img/anchor_rank_top1_name.png" alt="">
                                                <span>冷凝烟_贺</span>
                                            </div>
                                        </a>
                                        <p class="roomId">7039677</p>
                            </li>
                                <li>
                                        <a href="" class="link">
                                                <div class="picFraCir">
                                                    <img src="//127.0.0.1:7000/img/69ded6a598_250_350.jpg" alt="">
                                                        
                                                </div>
                                                <div class="picFra"></div>
                                                <div class="score">
                                                <img src="//127.0.0.1:7000/img/room_pk_count_down_1.png" alt="">
                                                <img src="//127.0.0.1:7000/img/showself_team_icon_protect_rank_three.png" alt="">
                                            </div>
                                            <div class="sign">
                                                <img src="//127.0.0.1:7000/img/anchor_rank_top3_name.png" alt="">
                                                <span>冷凝烟_贺</span>
                                            </div>
                                        </a>
                                        <p class="roomId">7039677</p>
                            </li> -->
                        </ul>
                    </div>
                    <div class="AnchorList">
                            <ul class="mui-table-view">
                                <li class="mui-table-view-cell" v-for="(item,index) in tabs[curIndex].list.slice(3)" :key="index">
                                    <a class="mui-navigate-right">
                                        <div class="listBox">
                                            <span class="listNum">{{index+4}}</span>
                                                <div class="lisPicBox">
                                                    <div class="lisPic">
                                                    <img :src="item.hallBg_src" alt="">
                                                </div>
                                                </div>
                                                <div class="textInfo">
                                                    <p class="sign">{{item.sign}}</p>
                                                    <div class="achivRoom">
                                                        <div class="achiv">
                                                            <img :src="item.hallRanking_src" alt=""><img :src="item.RankIcon_src" alt="">
                                                        </div>
                                                        <div class="roomId">房间号：<span>{{item.roomNum}}</span></div>
                                                    </div>
                                                </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </mescroll-vue>
      </swiper-slide> 
      <!-- 周榜 可不配down-->
      <swiper-slide>
        <mescroll-vue ref="mescroll1" :up="getMescrollUp(0)" @init="mescrollInit(1,arguments)">  
            <div id="dataList1">
                <div class="section clearMarTop">
                    <div class="wallBox">
                        <ul class="wall">
                                <li v-for="(item,index) in tabs[curIndex].list.slice(0,3)" :key="index">
                                        <a href="" class="link">
                                                <div class="picFraCir">
                                                    <img :src="item.hallBg_src" alt="">
                                                </div>
                                                <div class="picFra"></div>
                                                <div class="score">
                                                    <img :src="item.hallRanking_src" alt="">
                                                    <img :src="item.RankIcon_src" alt="">
                                                </div>
                                            <div class="sign">
                                                <span>{{item.sign}}</span>
                                            </div>
                                        </a>
                                        <p class="roomId">7039677</p>
                            </li>
                                <!-- <li class="champ">
                                        <a href="" class="link">
                                                <div class="picFraCir">
                                                    <img src="//127.0.0.1:7000/img/69ded6a598_250_350.jpg" alt="">
                                                    
                                                </div>
                                                <div class="picFra"></div>
                                                <div class="score">
                                                <img src="//127.0.0.1:7000/img/room_pk_count_down_1.png" alt="">
                                                <img src="//127.0.0.1:7000/img/showself_team_icon_protect_rank_one.png" alt="">
                                            </div>
                                            <div class="sign">
                                                <img src="//127.0.0.1:7000/img/anchor_rank_top1_name.png" alt="">
                                                <span>冷凝烟_贺</span>
                                            </div>
                                        </a>
                                        <p class="roomId">7039677</p>
                            </li>
                                <li>
                                        <a href="" class="link">
                                                <div class="picFraCir">
                                                    <img src="//127.0.0.1:7000/img/69ded6a598_250_350.jpg" alt="">
                                                        
                                                </div>
                                                <div class="picFra"></div>
                                                <div class="score">
                                                <img src="//127.0.0.1:7000/img/room_pk_count_down_1.png" alt="">
                                                <img src="//127.0.0.1:7000/img/showself_team_icon_protect_rank_three.png" alt="">
                                            </div>
                                            <div class="sign">
                                                <img src="//127.0.0.1:7000/img/anchor_rank_top3_name.png" alt="">
                                                <span>冷凝烟_贺</span>
                                            </div>
                                        </a>
                                        <p class="roomId">7039677</p>
                            </li> -->
                        </ul>
                    </div>
                    <div class="AnchorList">
                            <ul class="mui-table-view">
                                <li class="mui-table-view-cell" v-for="(item,index) in tabs[curIndex].list.slice(3)" :key="index">
                                    <a class="mui-navigate-right">
                                        <div class="listBox">
                                            <span class="listNum">{{index+4}}</span>
                                                <div class="lisPicBox">
                                                    <div class="lisPic">
                                                    <img :src="item.hallBg_src" alt="">
                                                </div>
                                                </div>
                                                <div class="textInfo">
                                                    <p class="sign">{{item.sign}}</p>
                                                    <div class="achivRoom">
                                                        <div class="achiv">
                                                            <img :src="item.hallRanking_src" alt=""><img :src="item.RankIcon_src" alt="">
                                                        </div>
                                                        <div class="roomId">房间号：<span>{{item.roomNum}}</span></div>
                                                    </div>
                                                </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </mescroll-vue>
      </swiper-slide> 
      <!-- 月榜-->
     <swiper-slide>
        <mescroll-vue ref="mescroll2"  :up="getMescrollUp(0)" @init="mescrollInit(2,arguments)">  
            <div id="dataList2">
                <div class="section clearMarTop">
                    <div class="wallBox">
                        <ul class="wall">
                                <li v-for="(item,index) in tabs[curIndex].list.slice(0,3)" :key="index">
                                        <a href="" class="link">
                                                <div class="picFraCir">
                                                    <img :src="item.hallBg_src" alt="">
                                                </div>
                                                <div class="picFra"></div>
                                                <div class="score">
                                                    <img :src="item.hallRanking_src" alt="">
                                                    <img :src="item.RankIcon_src" alt="">
                                                </div>
                                            <div class="sign">
                                                <span>{{item.sign}}</span>
                                            </div>
                                        </a>
                                        <p class="roomId">7039677</p>
                            </li>
                                <!-- <li class="champ">
                                        <a href="" class="link">
                                                <div class="picFraCir">
                                                    <img src="//127.0.0.1:7000/img/69ded6a598_250_350.jpg" alt="">
                                                    
                                                </div>
                                                <div class="picFra"></div>
                                                <div class="score">
                                                <img src="//127.0.0.1:7000/img/room_pk_count_down_1.png" alt="">
                                                <img src="//127.0.0.1:7000/img/showself_team_icon_protect_rank_one.png" alt="">
                                            </div>
                                            <div class="sign">
                                                <img src="//127.0.0.1:7000/img/anchor_rank_top1_name.png" alt="">
                                                <span>冷凝烟_贺</span>
                                            </div>
                                        </a>
                                        <p class="roomId">7039677</p>
                            </li>
                                <li>
                                        <a href="" class="link">
                                                <div class="picFraCir">
                                                    <img src="//127.0.0.1:7000/img/69ded6a598_250_350.jpg" alt="">
                                                        
                                                </div>
                                                <div class="picFra"></div>
                                                <div class="score">
                                                <img src="//127.0.0.1:7000/img/room_pk_count_down_1.png" alt="">
                                                <img src="//127.0.0.1:7000/img/showself_team_icon_protect_rank_three.png" alt="">
                                            </div>
                                            <div class="sign">
                                                <img src="//127.0.0.1:7000/img/anchor_rank_top3_name.png" alt="">
                                                <span>冷凝烟_贺</span>
                                            </div>
                                        </a>
                                        <p class="roomId">7039677</p>
                            </li> -->
                        </ul>
                    </div>
                    <div class="AnchorList">
                            <ul class="mui-table-view">
                                <li class="mui-table-view-cell" v-for="(item,index) in tabs[curIndex].list.slice(3)" :key="index">
                                    <a class="mui-navigate-right">
                                        <div class="listBox">
                                            <span class="listNum">{{index+4}}</span>
                                                <div class="lisPicBox">
                                                    <div class="lisPic">
                                                    <img :src="item.hallBg_src" alt="">
                                                </div>
                                                </div>
                                                <div class="textInfo">
                                                    <p class="sign">{{item.sign}}</p>
                                                    <div class="achivRoom">
                                                        <div class="achiv">
                                                            <img :src="item.hallRanking_src" alt=""><img :src="item.RankIcon_src" alt="">
                                                        </div>
                                                        <div class="roomId">房间号：<span>{{item.roomNum}}</span></div>
                                                    </div>
                                                </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </mescroll-vue>
      </swiper-slide> 
    <!-- 超级榜-->
     <swiper-slide>
        <mescroll-vue ref="mescroll3" :up="getMescrollUp(0)" @init="mescrollInit(3,arguments)">  
            <div id="dataList3">
                <div class="section clearMarTop">
                    <div class="wallBox">
                        <ul class="wall">
                                <li v-for="(item,index) in tabs[curIndex].list.slice(0,3)" :key="index">
                                        <a href="" class="link">
                                                <div class="picFraCir">
                                                    <img :src="item.hallBg_src" alt="">
                                                </div>
                                                <div class="picFra"></div>
                                                <div class="score">
                                                    <img :src="item.hallRanking_src" alt="">
                                                    <img :src="item.RankIcon_src" alt="">
                                                </div>
                                            <div class="sign">
                                                <span>{{item.sign}}</span>
                                            </div>
                                        </a>
                                        <p class="roomId">7039677</p>
                            </li>
                                <!-- <li class="champ">
                                        <a href="" class="link">
                                                <div class="picFraCir">
                                                    <img src="//127.0.0.1:7000/img/69ded6a598_250_350.jpg" alt="">
                                                    
                                                </div>
                                                <div class="picFra"></div>
                                                <div class="score">
                                                <img src="//127.0.0.1:7000/img/room_pk_count_down_1.png" alt="">
                                                <img src="//127.0.0.1:7000/img/showself_team_icon_protect_rank_one.png" alt="">
                                            </div>
                                            <div class="sign">
                                                <img src="//127.0.0.1:7000/img/anchor_rank_top1_name.png" alt="">
                                                <span>冷凝烟_贺</span>
                                            </div>
                                        </a>
                                        <p class="roomId">7039677</p>
                            </li>
                                <li>
                                        <a href="" class="link">
                                                <div class="picFraCir">
                                                    <img src="//127.0.0.1:7000/img/69ded6a598_250_350.jpg" alt="">
                                                        
                                                </div>
                                                <div class="picFra"></div>
                                                <div class="score">
                                                <img src="//127.0.0.1:7000/img/room_pk_count_down_1.png" alt="">
                                                <img src="//127.0.0.1:7000/img/showself_team_icon_protect_rank_three.png" alt="">
                                            </div>
                                            <div class="sign">
                                                <img src="//127.0.0.1:7000/img/anchor_rank_top3_name.png" alt="">
                                                <span>冷凝烟_贺</span>
                                            </div>
                                        </a>
                                        <p class="roomId">7039677</p>
                            </li> -->
                        </ul>
                    </div>
                    <div class="AnchorList">
                            <ul class="mui-table-view">
                                <li class="mui-table-view-cell" v-for="(item,index) in tabs[curIndex].list.slice(3)" :key="index">
                                    <a class="mui-navigate-right">
                                        <div class="listBox">
                                            <span class="listNum">{{index+4}}</span>
                                                <div class="lisPicBox">
                                                    <div class="lisPic">
                                                    <img :src="item.hallBg_src" alt="">
                                                </div>
                                                </div>
                                                <div class="textInfo">
                                                    <p class="sign">{{item.sign}}</p>
                                                    <div class="achivRoom">
                                                        <div class="achiv">
                                                            <img :src="item.hallRanking_src" alt=""><img :src="item.RankIcon_src" alt="">
                                                        </div>
                                                        <div class="roomId">房间号：<span>{{item.roomNum}}</span></div>
                                                    </div>
                                                </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </mescroll-vue>
      </swiper-slide> 
    
    </swiper>
  </div>
</template>

<script>
// 轮播组件: https://github.com/surmon-china/vue-awesome-swiper
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// 引入mescroll的vue组件
import MescrollVue from 'mescroll.js/mescroll.vue'

export default {
  name: 'ranking',
  data () {
    return {
      tabs: [{name: '日榜', mescroll: null, list: [], isListInit: false}, {name: '周榜', mescroll: null, list: [], isListInit: false}, {name: '月榜', mescroll: null, list: [], isListInit: false}, {name: '超级榜', mescroll: null, list: [], isListInit: false}],
      tabWidth: 80, // 每个tab的宽度
      barWidth: 80, // tab底部红色线的宽度
      curIndex: 0, // 当前tab的下标
      tabScrollLeft: 0, // 菜单滚动条的位置
      swiperOption: { // 轮播配置
        on: {
          //注册页面滑动触发的事件
          transitionEnd: () => {
              console.log("页面滑动的事件")
            this.changeTab(this.swiper.activeIndex)
          }
        }
      },
      isDropMenu:'none'
    }
  },
  components: {
    swiper, // 轮播组件
    swiperSlide, // 轮播组件
   MescrollVue // Mescroll组件
  },
  computed: {
    swiper () { // 轮播对象
      return this.$refs.mySwiper.swiper//数据挂载到html上时比获取dom节点要早
    },
    barLeft () { // 红线的位置
      return (this.tabWidth * this.curIndex + (this.tabWidth - this.barWidth) / 2) + 'px'
    }
  },
  methods: {
    //   明星榜二级菜单显示和隐藏
    changeDropdown(){
       switch(this.isDropMenu){
           case "none":
           this.isDropMenu="block"
           break;
           case "block":
           this.isDropMenu="none"
           break;
       }
    },
    // 多mescroll的配置,需通过方法获取,保证每个配置是单例
    getMescrollDown (tabIndex) {
      let isAuto = tabIndex === 0; // 第一个mescroll传入true,列表自动加载
      return {
        auto: isAuto,
        callback: this.downCallback
      }
    },
    // mescroll上拉加载的配置
    getMescrollUp (tabIndex) {
      let emptyWarpId = 'dataList' + tabIndex;
      return {
        auto: false,
        callback: this.upCallback, // 上拉回调,此处可简写; 相当于 callback: function (page) { upCallback(page); }
        noMoreSize: 4, // 如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
        empty: {
          warpId: emptyWarpId, // 父布局的id;
          icon: 'http://www.mescroll.com/img/mescroll-empty.png', // 图标,默认null
          tip: '暂无相关数据~', // 提示
          btntext: '去逛逛 >', // 按钮,默认""
          btnClick: function () { // 点击按钮的回调,默认null
            alert('点击了按钮,具体逻辑自行实现')
          },
        }, 
        toTop: { // 配置回到顶部按钮
          src: 'http://www.mescroll.com/img/mescroll-totop.png' // 图片路径,默认null (建议写成网络图,不必考虑相对路径)
        },
          htmlNodata:'<p class="upwarp-nodata">没有更多...</p>',
      }
    },
    // mescroll初始化的回调
    mescrollInit (tabIndex, arg) {
      this.tabs[tabIndex].mescroll = arg[0]; // 传入mescroll对象
      this.tabs[tabIndex].mescroll.tabIndex = tabIndex; // 加入标记,便于在回调中取到对应的list
    },
    // 切换菜单
    changeTab (tabIndex) {  
      if (this.curIndex === tabIndex) return; // 避免重复调用
      let curTab = this.tabs[this.curIndex];// 当前列表
      let newTab = this.tabs[tabIndex];// 新转换的列表
      curTab.mescroll && curTab.mescroll.hideTopBtn(); // 隐藏当前列表的回到顶部按钮
      this.curIndex = tabIndex; // 切换菜单
      this.swiper.slideTo(tabIndex);
      
      if (newTab.mescroll) {
        if (!newTab.isListInit) {
          // 加载列表
          newTab.mescroll.triggerDownScroll();
          console.log("主动触发下拉刷新")
        } else {
          // 检查新转换的列表是否需要显示回到到顶按钮
          setTimeout(() => {
            let curScrollTop = newTab.mescroll.getScrollTop();
            if (curScrollTop >= newTab.mescroll.optUp.toTop.offset) {
              newTab.mescroll.showTopBtn();
            } else {
              newTab.mescroll.hideTopBtn();
            }
          }, 30)
        }
      }
    },
    /* 下拉刷新的回调 */
    downCallback (mescroll) {
      // 这里加载你想下拉刷新的数据, 比如刷新tab1的轮播数据
      if (mescroll.tabIndex === 0) {
        // loadSwiper();
      } else if (mescroll.tabIndex === 1) {
        // ....
      } else if (mescroll.tabIndex === 2) {
        // ....
      }
      mescroll.resetUpScroll();// 触发下拉刷新的回调,加载第一页的数据
    },
    /* 上拉加载的回调 page = {num:1, size:10}; num:当前页 从1开始, size:每页数据条数 */
    upCallback (page, mescroll) {
    //   if (mescroll.tabIndex === 0) {
    //       console.log(1)
    //     // 可以单独处理每个tab的请求
			   
    //   }else if (mescroll.tabIndex === 1) {
    //     // 可以单独处理每个tab的请求
    //   }
    console.log("触发上拉回调")
         this.axios.get('http://127.0.0.1:7000/ranking/dayRanking', {
			        params: {
			          num: page.num, // 页码
			          size: 15 // 每页长度
			        }
			      }).then((response) => {
                    // 请求的列表数据
                    console.log(response)
                    let arr = response.data
                    // 标记列表已初始化,保证列表只初始化一次
                    this.tabs[mescroll.tabIndex].isListInit = true;
			        // 如果是第一页需手动置空列表
			        if (page.num === 1) this.tabs[mescroll.tabIndex].list= []
			        // 把请求到的数据添加到列表
                   this.tabs[mescroll.tabIndex].list = this.tabs[mescroll.tabIndex].list.concat(arr)
			        // 数据渲染成功后,隐藏下拉刷新的状态
			        this.$nextTick(() => {
			          mescroll.endSuccess(arr.length)
			        })
			      }).catch((e) => {
                    // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
                     if (page.num === 1) this.tabs[mescroll.tabIndex].isListInit = false;
			        mescroll.endErr()
			      })
     
    //   this.tabs[mescroll.tabIndex].isListInit = true;// 标记列表已初始化,保证列表只初始化一次
    //   this.getListDataFromNet(mescroll.tabIndex, page.num, page.size, (curPageData) => {
    //     mescroll.endSuccess(curPageData.length);// 联网成功的回调,隐藏下拉刷新和上拉加载的状态;
    //     if (page.num === 1) this.tabs[mescroll.tabIndex].list = []; // 如果是第一页需手动制空列表
    //     this.tabs[mescroll.tabIndex].list = this.tabs[mescroll.tabIndex].list.concat(curPageData); // 追加新数据
    //   }, () => {
    //     if (page.num === 1) this.tabs[mescroll.tabIndex].isListInit = false;
    //     mescroll.endErr();// 联网失败的回调,隐藏下拉刷新的状态
    //   })
    },
    /* 联网加载列表数据
          在您的实际项目中,请参考官方写法: http://www.mescroll.com/api.html#tagUpCallback
          请忽略getListDataFromNet的逻辑,这里仅仅是在本地模拟分页数据,本地演示用
          实际项目以您服务器接口返回的数据为准,无需本地处理分页.
          * */
    // getListDataFromNet (tabIndex, pageNum, pageSize, successCallback, errorCallback) {
    //   // 延时一秒,模拟联网
    //   setTimeout(() => {
    //     try {
    //       var listData = []
    //       if (tabIndex === 0) {
    //         // 全部商品 (模拟分页数据)
    //         for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
    //           if (i === mockData.length) break
    //           listData.push(mockData[i])
    //         }
    //       } else {
    //         // 模拟关键词搜索
    //         var word = this.tabs[tabIndex].name;
    //         for (var k = 0; k < mockData.length; k++) {
    //           if (mockData[k].pdName.indexOf(word) !== -1) {
    //             listData.push(mockData[k])
    //           }
    //         }
    //       }
    //       // 回调
    //       successCallback && successCallback(listData);
    //     } catch (e) {
    //       // 联网失败的回调
    //       errorCallback && errorCallback();
    //     }
    //   }, 1000)
    // }
  },
  beforeRouteEnter (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
    next(vm => {
      let curMescroll = vm.$refs['mescroll' + vm.curIndex]; // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
      curMescroll && curMescroll.beforeRouteEnter() // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
      // 恢复水平菜单的滚动条位置
      console.log("beforeRouterEnter")
      if (vm.$refs.tabsContent) vm.$refs.tabsContent.scrollLeft = vm.tabScrollLeft;
    })
  },
  beforeRouteLeave (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
    let curMescroll = this.$refs['mescroll' + this.curIndex]; // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
    curMescroll && curMescroll.beforeRouteLeave() // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
          console.log("beforeRouterLeave")
    next()
  }
}
</script>

<style scoped>
/* 周星榜 二级菜单*/
.header{
    line-height: 0px;
}
.header .rankChoice{
    display: flex;
    justify-content: center;
    align-items:center;
    margin-bottom:15px;
}
.header .rankChoice .starRank{
    color:#fff;
}
.header .rankChoice  .dropDown{
    width:14px;
    height:14px;
    margin-left:4px;
    position: relative;
    background-image:url("//127.0.0.1:7000/img/rank_down_arrow.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
}
.header .rankChoice .dropMenu{
    position:absolute;
    top:14px;
    left:-74px;
    background-image: url("//127.0.0.1:7000/img/pop_rank_bg.png");
    padding: 15px 5px; 
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;   
    /* display:none; */
    z-index: 10;
}
.header .rankChoice .dropMenu a{
    display: block;
    color:gray;
    text-align: center;
    padding:2px 25px;
    font-size: 14px;
    white-space: nowrap;
}
.header .rankChoice .dropMenu a.active{
     background:#FF6261;
}
  /*模拟的标题*/
  .header{
    z-index: 9990;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    line-height: 16px;
    text-align: center;
    /* background-color: white; */
    background-image: url("//127.0.0.1:7000/img/anchor_rank_tab_bg.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    color:#fff;
  }
  .header .btn-left{
    position: absolute;
    top: 0;
    left: 0;
    padding:12px 12px 0 12px;
  }
  .header .title{
    margin-top: 12px;
  }
  /*菜单*/
  .tabs-warp{
    height: 42px;/*高度比tabs-content小, 目的是隐藏tabs的水平滚动条*/
    overflow-y: hidden;
    box-sizing: content-box;
  }
  .tabs-warp .tabs-content{
    width: 100%;
    height: 50px;
    overflow-x: auto;
  }
  .tabs-warp .tabs-content .tabs{
    width: 100%;
    white-space: nowrap;
    background: rgba(250, 250, 250, 0.3);
    border-radius: 20px;
  }
  .tabs-warp .tabs-content .tabs li{
    display: inline-block;
    height: 31px;
    line-height: 34px;
    vertical-align: middle;
  }
  /* .tabs-warp .tabs-content .tabs .active{
    color: #FF6990;
  } */
  /*菜单进度*/
  .tabs-warp .tab-bar{
    position: absolute;
    height: 31px;
    background-color: #fff;
    transition: left 300ms;
    top:0;
    left:0;
    color:#FF6990;
    line-height: 34px;
    border-radius: 20px;
  }
  /*列表*/
  .swiper-container{
    position: fixed;
    top: 69px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:#fff;
  }

  /*展示上拉加载的数据列表*/
  .data-li{
    position: relative;
    height: 80px;
    padding: 10px 8px 10px 120px;
    border-bottom: 1px solid #eee;
  }
  .data-li .pd-img{
    position: absolute;
    left: 18px;
    top: 10px;
    width: 80px;
    height: 80px;
  }
  .data-li .pd-name{
    font-size: 13px;
    line-height: 20px;
    height: 40px;
    margin-bottom: 10px;
    overflow: hidden;
  }
  .data-li .pd-price{
    font-size: 13px;
    color: red;
  }
  .data-li .pd-sold{
    font-size: 12px;
    margin-top: 8px;
    color: gray;
  }
  /* 主播列表 前三名*/
 .clearMarTop:before{
    width:100%;
    content:"";
    display:table;
}
.section .wallBox{
    background-image: url("//127.0.0.1:7000/img/anchor_rank_top_sub_rank1.png");
    height:150px;
    background-repeat: no-repeat;
    background-size:100%;
    background-position:center -38px;
    background-color: #fff;
}
.section .wall{
    display:flex;
    justify-content: center;
    padding-top:20px;
}
.section .wall .link{
    display:block;
    position: relative;
    padding:0 20px;
}
.section .wall .picFra{
    width:76px;
    height:84px;
    position: absolute;
    top:-11px;
    z-index: 999;
    left:15px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
}
.section .wall li:first-child .picFra{
    background-image: url("//127.0.0.1:7000/img/anchor_rank_top2.png");
}
.section .wall li:nth-child(2) .picFra{
    background-image: url("//127.0.0.1:7000/img/anchor_rank_top1.png");
}
.section .wall li:last-child .picFra{
    background-image: url("//127.0.0.1:7000/img/anchor_rank_top3.png");
}
.section .wall  .picFraCir{
    overflow:hidden;
    width:66px;
    height:66px;
    border-radius: 50%;
}
.section .wall .picFraCir img{
    width:100%;
    height:auto;
}
.section .wall .sign{
    position: absolute;
    width:100px;
    height:20px;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    color:#fff;
    text-align: center;
    bottom:-11px;
    left:50%;
    transform:translatex(-50%);
    line-height: 20px;
}
.wall li:first-child .sign{
    background-image: url("//127.0.0.1:7000/img/anchor_rank_top2_name.png");
}
.wall li:nth-child(2) .sign{
    background-image: url("//127.0.0.1:7000/img/anchor_rank_top1_name.png");
}
.wall li:last-child .sign{
    background-image: url("//127.0.0.1:7000/img/anchor_rank_top3_name.png");
}
.wall .sign span{
   text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
/* 对冠军头像处理 */
.section .wall li:nth-child(2) .picFraCir{
    width:74px;
    height:74px;
    transform: translateY(-8px);
}
.wall li:nth-child(2) .picFra{
    width:86px;
    height:88px; 
    left:14px;
    top:-17px;
}
.section .wall .score{
    position: absolute;
    top:38px;
    right:22px;
    z-index: 999;
    height:15px;
    width:28px;
    display: flex;
    
}
.section .wall .score img{
    width:auto;
    height:100%;
}
/* .section .wall .score img:last-child{
    width:18px;
    height:18px;
}
.section .wall .score img:first-child{
    position:relative;
    top:3px;
} */

.section .wall .sign img{
    width:100%;
    height:auto;
}
.section .wall .sign span{
    display:block;
    position:absolute;
    top:1px;
    width:62px;
    font-size: 12px;
    left:50%;
    transform: translatex(-50%);
    color:#fff;
    text-align: center;
    height: 14px;
    line-height: 14px;
}
.section .wall li:nth-child(2) .sign{
    bottom:-1px;
}
.section .wall .roomId{
    text-align: center;
    padding-top:20px;
    color:#fff;
}
.section .wall li:nth-child(2) .roomId{
    padding-top:10px;
}
.section .AnchorList .listBox{
    display: flex;
    align-items: center;
}
.section .AnchorList .listBox .lisPicBox{
    width:12%;
}
.section .AnchorList .listBox .lisPic{
    width:50px;
    height:50px;
    overflow: hidden;
    border-radius: 50%;
    border:1px solid #FF8F9B;
}
.section .AnchorList .listBox .lisPic img{
    width:100%;
    height:auto;
}
.section .AnchorList .listBox .achiv{
    width:30px;
    height:21px;
    display: flex;
    align-items:center;
}
.section .AnchorList .listBox .achiv img:last-child{
    width:16px;
    height: 14px;
}
.section .AnchorList .listBox .achiv img:first-child{
    width:10px;
    height:12px;
}
.section .AnchorList .listBox .achivRoom{
    display: flex;
    align-items: center;
}
.section .AnchorList .listBox .listNum{
    color:#555;
    font-size: 12px;
    width:10%;
}
.section .AnchorList .listBox .sign{
    color:black;
    font-size: 14px;
}
.section .AnchorList .listBox .roomId{
    font-size: 12px;
    color:#555;
    margin-left:22px;
}
.section .AnchorList .listBox .roomId span{
    color:red;
    font-size: 13px;
}
.section .AnchorList .listBox .textInfo{
    margin-left:20px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
}
.section .AnchorList .mui-table-view-cell > a:not(.mui-btn){
    margin:-16px -15px;
}
.section .AnchorList .tip{
    text-align: center;
    padding:25px 0;
    font-size: 14px;
    color:#555;
}
</style>
