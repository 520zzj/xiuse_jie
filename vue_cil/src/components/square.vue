<template>
  <div class="square">
    <!--标题-->
    <div class="header" :class="{whiteBg:isWhiteBg}">
        <div class="header-box">
            <!-- <div class="moving">
                <a href=""> <img src="http://127.0.0.1:7000/img/hall_new_trends_white.png" alt="" class="headImg"></a>
            </div> -->
            <a href="" class="moving headImg" :class="{grayMoving:isgrayMoving}"></a>
      <!--菜单. 如果up配置了isBounce为false,则需加上mescroll-touch-x,原因: http://www.mescroll.com/qa.html#q10 -->
            <div class="tabs-warp">
                <div ref="tabsContent" class="tabs-content mescroll-touch-x">
                    <div style="display: inline-block"> <!--PC端运行,加上这个div可修复tab-bar错位的问题 -->
                    <ul class="tabs" ref="tabs">
                        <li class="tab" v-for="(tab,i) in tabs" :class="{active: i===curIndex,fontColor:isfontBlack}" :style="{width: tabWidth+'px'}" :key="i" @click="changeTab(i)">{{tab.name}}</li>
                    </ul>
                    <div class="tab-bar" :style="{width: barWidth+'px', left: barLeft}"></div>
                    </div>
                </div>
            </div>
            <!-- <div class="search">
                <a href=""><img src="http://127.0.0.1:7000/img/hall_search_white.png" alt="" class="headImg"></a>
            </div> -->
            <a href="" class="search headImg" :class="{graySearch:isgraySearch}"></a>
        </div>
    </div>
    <!--轮播-->
    <swiper ref="mySwiper" :options="swiperOption">
      <!--大厅-->
      <swiper-slide>
        <mescroll-vue ref="mescroll0" :down="getMescrollDown(0)" :up="getMescrollUp(0)" @init="mescrollInit(0,arguments)">
          <div id="dataList0">
            <div class="hall">
                <div class="banner">
                    <mt-swipe :auto="5000" :continuous="true">
                        <mt-swipe-item>
                            <img src="//127.0.0.1:7000/img/01ed6558f5c863a8012049efb6f345.jpg@2o.jpg" alt="">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="//127.0.0.1:7000/img/01356d554337fd0000019ae9ceb332.jpg@2o.jpg" alt="">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="//127.0.0.1:7000/img/01f7a95543380c0000019ae9819de6.jpg@2o.jpg" alt="">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>
                <div class="imgList">
                    <div class="cf recommend">
                        <a class="imgBox" v-for="(item,index) in tabs[0].list.slice(0,3)" :key="index"  @click="record(item.id)" href="">
                            <div class="bgPic">
                                <img src="../img/defalt_big_image_live2.png" alt="" :imgurl="item.hallBg_src">
                                <!-- <img :src="item.hallBg_src" alt=""> -->
                                <div class="infoBox">
                                      <div class="info">
                                          <div class="ranking"><img :src="item.hallRanking_src" alt=""><img :src="item.RankIcon_src" alt=""></div>
                                          <div class="sign">{{item.sign}}</div>
                                          <div class="watching"><img :src="item.watchIcon_src" alt=""><span>{{item.watchNum}}</span></div>
                                      </div>
                                </div>               
                            </div>
                        </a>
                    </div>

                  <!-- 楼层  甜美主播 -->
                    <div class="floor">
                        <div class="sweetTittle">
                            <img src="//127.0.0.1:7000/img/hall_anchor_classfy_bar.png" alt="">
                            <span>甜美主播</span>
                        </div>
                        <div class="cf sweet">
                            <a class="imgBox" v-for="(item,index) in tabs[0].list.slice(3,9)" :key="index" href="" @click="record(item.id)">
                                <div class="bgPic">
                                    <img src="../img/defalt_big_image_live2.png" alt="" :imgurl="item.hallBg_src">
                                        <!-- <img :src="item.hallBg_src" alt=""> -->
                                    <div class="infoBox">
                                          <div class="info">
                                              <div class="ranking"><img :src="item.hallRanking_src" alt=""><img :src="item.RankIcon_src" alt=""></div>
                                              <div class="sign">{{item.sign}}</div>
                                              <div class="watching"><img :src="item.watchIcon_src" alt=""><span>{{item.watchNum}}</span></div>
                                          </div>
                                    </div>               
                                </div>
                            </a>
                        </div>
                    </div>
                    <!-- 楼层  魅力主播 -->
                    <div class="floor">
                        <div class="sweetTittle">
                            <img src="//127.0.0.1:7000/img/hall_anchor_classfy_bar.png" alt="">
                            <span>魅力主播</span>
                        </div>
                        <div class="cf sweet">
                            <a class="imgBox" v-for="(item,index) in tabs[0].list.slice(9)" :key="index" href="" @click="record(item.id)">
                                <div class="bgPic">
                                    <img :imgurl="item.hallBg_src" alt="" src="../img/defalt_big_image_live2.png">
                                    <!-- <img :src="item.hallBg_src" alt=""> -->
                                    <div class="infoBox">
                                          <div class="info">
                                              <div class="ranking"><img :src="item.hallRanking_src" alt=""><img :src="item.RankIcon_src" alt=""></div>
                                              <div class="sign">{{item.sign}}</div>
                                              <div class="watching"><img :src="item.watchIcon_src" alt=""><span>{{item.watchNum}}</span></div>
                                          </div>
                                    </div>               
                                </div>
                            </a>
                         
                        </div>
                    </div>
                    
                </div>
            </div>
          </div>
        </mescroll-vue>
      </swiper-slide>
      <!-- 关注 可不配down-->
      <swiper-slide>
        <mescroll-vue ref="mescroll1" :up="getMescrollUp(1)" @init="mescrollInit(1,arguments)">
          <div id="dataList1">
            <div class="cf sweet">
                         <div class="imgBox" v-for="(item,index) in tabs[1].list" :key="index">
                            <div class="bgPic">
                                <img :imgurl="item.hallBg_src" alt="" src="../img/defalt_big_image_live2.png">
                                    <!-- <img :src="item.hallBg_src" alt=""> -->
                                <div class="infoBox">
                                      <div class="info">
                                          <div class="ranking">
                                            <img :src="item.hallRanking_src" alt=""><img :src="item.RankIcon_src" alt="">
                                            </div>
                                          <div class="sign">{{item.sign}}</div>
                                          <div class="watching"><img :src="item.watchingIcon_src" alt=""><span>{{item.watchNum}}</span></div>
                                      </div>
                                </div>               
                            </div>
                        </div>
                </div>
          </div>
        </mescroll-vue>
      </swiper-slide>
      <!-- 最近观看-->
      <swiper-slide>
        <mescroll-vue ref="mescroll2" :up="getMescrollUp(2)" @init="mescrollInit(2,arguments)">
          <div id="dataList2">
           <div class="cf sweet">
                         <div class="imgBox" v-for="(item,index) in tabs[2].list" :key="index">
                            <div class="bgPic">
                                <img :imgurl="item.hallBg_src" alt="" src="../img/defalt_big_image_live2.png">
                                <div class="infoBox">
                                      <div class="info">
                                          <div class="ranking"><img :src="item.hallRanking_src" alt=""><img :src="item.RankIcon_src" alt=""></div>
                                          <div class="sign">{{item.sign}}</div>
                                          <div class="watching"><img :src="item.watchingIcon_src" alt=""><span>{{item.watchNum}}</span></div>
                                      </div>
                                </div>               
                            </div>
                        </div>
                </div>
          </div>
        </mescroll-vue>
      </swiper-slide>
      <!-- pk-->
      <swiper-slide>
        <mescroll-vue ref="mescroll3" :up="getMescrollUp(3)" @init="mescrollInit(3,arguments)">
          <div id="dataList3">
           <div class="cf sweet">
                         <div class="imgBox" v-for="(item,index) in tabs[3].list" :key="index">
                            <div class="bgPic">
                                <img :imgurl="item.hallBg_src" alt="" src="../img/defalt_big_image_live2.png">
                                <div class="infoBox">
                                      <div class="info">
                                          <div class="ranking"><img :src="item.hallRanking_src" alt=""><img :src="item.RankIcon_src" alt=""></div>
                                          <div class="sign">{{item.sign}}</div>
                                          <div class="watching"><img :src="item.watchingIcon_src" alt=""><span>{{item.watchNum}}</span></div>
                                      </div>
                                </div>               
                            </div>
                        </div>
                </div>
          </div>
        </mescroll-vue>
      </swiper-slide>
      <!-- 新秀-->
      <swiper-slide>
        <mescroll-vue ref="mescroll4" :up="getMescrollUp(4)" @init="mescrollInit(4,arguments)">
          <ul id="dataList4">
            <li class="data-li" v-for="pd in tabs[4].list" :key="pd.id">
              <img class="pd-img" :src="pd.pdImg"/>
              <div class="pd-name">{{pd.pdName}}</div>
              <p class="pd-price">{{pd.pdPrice}} 元</p>
              <p class="pd-sold">已售{{pd.pdSold}}件</p>
            </li>
          </ul>
        </mescroll-vue>
      </swiper-slide>
      <!-- 好声音-->
      <swiper-slide>
        <mescroll-vue ref="mescroll5" :up="getMescrollUp(5)" @init="mescrollInit(5,arguments)">
          <ul id="dataList5">
            <li class="data-li" v-for="pd in tabs[5].list" :key="pd.id">
              <img class="pd-img" :src="pd.pdImg"/>
              <div class="pd-name">{{pd.pdName}}</div>
              <p class="pd-price">{{pd.pdPrice}} 元</p>
              <p class="pd-sold">已售{{pd.pdSold}}件</p>
            </li>
          </ul>
        </mescroll-vue>
      </swiper-slide>
      <!-- 萌妹子-->
      <swiper-slide>
        <mescroll-vue ref="mescroll6" :up="getMescrollUp(6)" @init="mescrollInit(6,arguments)">
          <ul id="dataList6">
            <li class="data-li" v-for="pd in tabs[6].list" :key="pd.id">
              <img class="pd-img" :src="pd.pdImg"/>
              <div class="pd-name">{{pd.pdName}}</div>
              <p class="pd-price">{{pd.pdPrice}} 元</p>
              <p class="pd-sold">已售{{pd.pdSold}}件</p>
            </li>
          </ul>
        </mescroll-vue>
      </swiper-slide>
      <!-- 够劲爆-->
      <swiper-slide>
        <mescroll-vue ref="mescroll7" :up="getMescrollUp(7)" @init="mescrollInit(7,arguments)">
          <ul id="dataList7">
            <li class="data-li" v-for="pd in tabs[7].list" :key="pd.id">
              <img class="pd-img" :src="pd.pdImg"/>
              <div class="pd-name">{{pd.pdName}}</div>
              <p class="pd-price">{{pd.pdPrice}} 元</p>
              <p class="pd-sold">已售{{pd.pdSold}}件</p>
            </li>
          </ul>
        </mescroll-vue>
      </swiper-slide>
      <!-- 同城-->
      <swiper-slide>
        <mescroll-vue ref="mescroll8" :up="getMescrollUp(8)" @init="mescrollInit(8,arguments)">
          <ul id="dataList8">
            <li class="data-li" v-for="pd in tabs[8].list" :key="pd.id">
              <img class="pd-img" :src="pd.pdImg"/>
              <div class="pd-name">{{pd.pdName}}</div>
              <p class="pd-price">{{pd.pdPrice}} 元</p>
              <p class="pd-sold">已售{{pd.pdSold}}件</p>
            </li>
          </ul>
        </mescroll-vue>
      </swiper-slide>
      <!-- 热舞-->
      <swiper-slide>
        <mescroll-vue ref="mescroll9" :up="getMescrollUp(9)" @init="mescrollInit(9,arguments)">
          <ul id="dataList9">
            <li class="data-li" v-for="pd in tabs[9].list" :key="pd.id">
              <img class="pd-img" :src="pd.pdImg"/>
              <div class="pd-name">{{pd.pdName}}</div>
              <p class="pd-price">{{pd.pdPrice}} 元</p>
              <p class="pd-sold">已售{{pd.pdSold}}件</p>
            </li>
          </ul>
        </mescroll-vue>
      </swiper-slide>
      <!-- 手机-->
      <swiper-slide>
        <mescroll-vue ref="mescroll10" :up="getMescrollUp(10)" @init="mescrollInit(10,arguments)">
          <ul id="dataList10">
            <li class="data-li" v-for="pd in tabs[10].list" :key="pd.id">
              <img class="pd-img" :src="pd.pdImg"/>
              <div class="pd-name">{{pd.pdName}}</div>
              <p class="pd-price">{{pd.pdPrice}} 元</p>
              <p class="pd-sold">已售{{pd.pdSold}}件</p>
            </li>
          </ul>
        </mescroll-vue>
      </swiper-slide>
      <!-- 代言人-->
      <swiper-slide>
        <mescroll-vue ref="mescroll11" :up="getMescrollUp(11)" @init="mescrollInit(11,arguments)">
          <ul id="dataList11">
            <li class="data-li" v-for="pd in tabs[11].list" :key="pd.id">
              <img class="pd-img" :src="pd.pdImg"/>
              <div class="pd-name">{{pd.pdName}}</div>
              <p class="pd-price">{{pd.pdPrice}} 元</p>
              <p class="pd-sold">已售{{pd.pdSold}}件</p>
            </li>
          </ul>
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
// 模拟数据
// import mockData from '../mock/pdlist'

export default {
  name: 'square',
  data () { 
    return {
      tabs: [{name: '大厅', mescroll: null, list: [], isListInit: false}, {name: '关注', mescroll: null, list: [], isListInit: false}, {name: '最近观看', mescroll: null, list: [], isListInit: false}, {name: '新秀', mescroll: null, list: [], isListInit: false}, {name: 'pk', mescroll: null, list: [], isListInit: false}, {name: '好声音', mescroll: null, list: [], isListInit: false}, {name: '萌妹子', mescroll: null, list: [], isListInit: false}, {name: '够劲爆', mescroll: null, list: [], isListInit: false}, {name: '同城', mescroll: null, list: [], isListInit: false}, {name: '热舞', mescroll: null, list: [], isListInit: false}, {name: '手机', mescroll: null, list: [], isListInit: false}, {name: '代言人', mescroll: null, list: [], isListInit: false}],
      tabWidth: 60, // 每个tab的宽度
      barWidth: 30, // tab底部红色线的宽度
      curIndex: 0, // 当前tab的下标,遍历list时不能用tabs[curIndex]，因为curIndex每次切换tab会变化，导致页面不能缓存
      tabScrollLeft: 0, // 菜单滚动条的位置
      swiperOption: { // 轮播配置
        on: {
          transitionEnd: () => {
            this.changeTab(this.swiper.activeIndex)
          }
        }
      },
      isWhiteBg:false,//菜单背景
      isfontBlack:false,//菜单字体颜色
      isgrayMoving:false,//菜单动态图标
      isgraySearch:false//菜单搜索图标
    }
  },
  components: {
    swiper, // 轮播组件
    swiperSlide, // 轮播组件
    MescrollVue // Mescroll组件
  },
  computed: {
    swiper () { // 轮播对象
    console.log(this.$refs.mySwiper.swiper)
      return this.$refs.mySwiper.swiper
    },
    barLeft () { // 红线的位置
      return (this.tabWidth * this.curIndex + (this.tabWidth - this.barWidth) / 2) + 'px'
    }
  },
  methods: {
    //保存观看记录
    record(id){
      //记录当前用户的观看当前的主播信息
      this.axios.post("http://127.0.0.1:7000/square/saveScanned",
        this.qs.stringify({
            uid:3,//假设当前的用户3对应的id
            id:id//当前点击观看的主播id
        })
      )
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
        lazyLoad: {
		        	use: true, // 是否开启懒加载,默认false
			        attr: 'imgurl', // 网络地址的属性名 (图片加载成功会移除该属性): <img imgurl='网络图  src='占位图''/>
			        showClass: 'mescroll-lazy-in', // 图片加载成功的显示动画: 渐变显示,参见mescroll.css
			        delay: 500, // 列表滚动的过程中每500ms检查一次图片是否在可视区域,如果在可视区域则加载图片
			        offset: 200 // 超出可视区域200px的图片仍可触发懒加载,目的是提前加载部分图片
		    	},
        auto: false,
        htmlNodata:'<p class="upwarp-nodata">没有更多...</p>',
        callback: this.upCallback, // 上拉回调,此处可简写; 相当于 callback: function (page) { upCallback(page); }
        noMoreSize: 0, // 如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
        empty: {
          warpId: emptyWarpId, // 父布局的id;
          icon: '//127.0.0.1:7000/img/NotInfo.PNG', // 图标,默认null
          tip: '暂无相关数据~', // 提示
          // btntext: '去逛逛 >', // 按钮,默认""
          // btnClick: function () { // 点击按钮的回调,默认null
          //   alert('点击了按钮,具体逻辑自行实现')
          // }
        },
        toTop: { // 配置回到顶部按钮
          src: 'http://www.mescroll.com/img/mescroll-totop.png' // 图片路径,默认null (建议写成网络图,不必考虑相对路径)
        }
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
        //从第二个tab开始，tabNav字体颜色，和图片发生变化
      if(tabIndex!==0){
        this.isWhiteBg=true
        this.isfontBlack=true
        this.isgrayMoving=true
        this.isgraySearch=true
      }else{
        this.isWhiteBg=false
        this.isfontBlack=false
        this.isgrayMoving=false
        this.isgraySearch=false
      }
      curTab.mescroll && curTab.mescroll.hideTopBtn(); // 隐藏当前列表的回到顶部按钮
      this.curIndex = tabIndex; // 切换菜单
      this.swiper.slideTo(tabIndex);

    

      // 菜单项居中动画
      if (curTab.mescroll) {
        let tabsContent = this.$refs.tabsContent;
        let tabDom = tabsContent.getElementsByClassName('tab')[tabIndex];
        let star = tabsContent.scrollLeft;// 当前位置
        let end = tabDom.offsetLeft + tabDom.clientWidth / 2 - document.body.clientWidth / 2; // 居中
        this.tabScrollLeft = end;
        curTab.mescroll.getStep(star, end, function (step) {
          tabsContent.scrollLeft = step; // 从当前位置逐渐移动到中间位置,默认时长300ms
        });
      }
      if (newTab.mescroll) {
        if (!newTab.isListInit) {
          // 加载列表
          newTab.mescroll.triggerDownScroll();//主动触发下拉回调
          console.log("触发下拉回调")
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
         console.log("触发了上拉回调") 
     if (mescroll.tabIndex === 0) {     
        // 可以单独处理每个tab的请求
         this.axios.get('http://127.0.0.1:7000/square/hall', {
			        params: {
			          num: page.num, // 页码
			          size:page.size// 每页长度
			        }
			      }).then((response) => {
                    // 请求的列表数据
                    console.log(response.data)
              // 如果是第一页前十条数据
              let arr =response.data
              console.log(arr)
              this.tabs[mescroll.tabIndex].isListInit = true;// 标记列表已初始化,保证列表只初始化一次
			        // 如果是第一页需手动置空列表
			        if (page.num === 1) this.tabs[mescroll.tabIndex].list = [];
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
      }else if (mescroll.tabIndex === 1) {
        // 可以单独处理每个tab的请求
             this.axios.get('http://127.0.0.1:7000/square/focus', {
			        params: {
			          num: page.num, // 页码
			          size:page.size// 每页长度 
			        }
			      }).then((response) => {
                this.tabs[mescroll.tabIndex].isListInit = true;// 标记列表已初始化,保证列表只初始化一次
                    // 请求的列表数据
                    // console.log(response.data)
              // 如果是第一页前十条数据
              console.log(response)
              let arr=response.data
              console.log(this.tabs[mescroll.tabIndex])
            
			        // 如果是第一页需手动置空列表
			        if (page.num === 1) this.tabs[mescroll.tabIndex].list = [];
			        // 把请求到的数据添加到列表
              this.tabs[mescroll.tabIndex].list = this.tabs[mescroll.tabIndex].list.concat(arr)
              console.log(this.tabs[mescroll.tabIndex])
			        // 数据渲染成功后,隐藏下拉刷新的状态  
			        this.$nextTick(() => {
			          mescroll.endSuccess(arr.length)
			        })
			      }).catch((e) => {
              // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
               if (page.num === 1) this.tabs[mescroll.tabIndex].isListInit = false;
			        mescroll.endErr()
			      })
      }else if(mescroll.tabIndex === 2){
            // 可以单独处理每个tab的请求
             this.axios.get('http://127.0.0.1:7000/square/getScanned', {
			        params: {
                uid:3,//假设当前是3号用户
			          num: page.num, // 页码
			          size:page.size// 每页长度 
			        }
			      }).then((response) => {
                    // 请求的列表数据
                    // console.log(response.data)
              // 如果是第一页前十条数据
              console.log(response)
              let arr=response.data
              console.log(this.tabs[mescroll.tabIndex])
              this.tabs[mescroll.tabIndex].isListInit = true;// 标记列表已初始化,保证列表只初始化一次
			        // 如果是第一页需手动置空列表
			        if (page.num === 1) this.tabs[mescroll.tabIndex].list = [];
			        // 把请求到的数据添加到列表
              this.tabs[mescroll.tabIndex].list = this.tabs[mescroll.tabIndex].list.concat(arr)
              console.log(this.tabs[mescroll.tabIndex])
			        // 数据渲染成功后,隐藏下拉刷新的状态  
			        this.$nextTick(() => {
			          mescroll.endSuccess(arr.length)
			        })
			      }).catch((e) => {
              // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
               if (page.num === 1) this.tabs[mescroll.tabIndex].isListInit = false;
			        mescroll.endErr()
			      })
      }else if(mescroll.tabIndex === 3){
             // 可以单独处理每个tab的请求
             this.axios.get('http://127.0.0.1:7000/square/hall', {
			        params: {
			          num: page.num, // 页码
			          size:page.size// 每页长度 
			        }
			      }).then((response) => {
                    // 请求的列表数据
                    // console.log(response.data)
              // 如果是第一页前十条数据
              console.log(response)
              let arr=response.data
              console.log(this.tabs[mescroll.tabIndex])
              this.tabs[mescroll.tabIndex].isListInit = true;// 标记列表已初始化,保证列表只初始化一次
			        // 如果是第一页需手动置空列表
			        if (page.num === 1) this.tabs[mescroll.tabIndex].list = [];
			        // 把请求到的数据添加到列表
              this.tabs[mescroll.tabIndex].list = this.tabs[mescroll.tabIndex].list.concat(arr)
              console.log(this.tabs[mescroll.tabIndex])
			        // 数据渲染成功后,隐藏下拉刷新的状态  
			        this.$nextTick(() => {
			          mescroll.endSuccess(arr.length)
			        })
			      }).catch((e) => {
              // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
               if (page.num === 1) this.tabs[mescroll.tabIndex].isListInit = false;
			        mescroll.endErr()
			      })
      } 
     
    },
   
  },
  beforeRouteEnter (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
    next(vm => {
      let curMescroll = vm.$refs['mescroll' + vm.curIndex]; // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
      curMescroll && curMescroll.beforeRouteEnter() // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
      // 恢复水平菜单的滚动条位置
      if (vm.$refs.tabsContent) vm.$refs.tabsContent.scrollLeft = vm.tabScrollLeft;
    })
  },
  beforeRouteLeave (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
    let curMescroll = this.$refs['mescroll' + this.curIndex]; // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
    curMescroll && curMescroll.beforeRouteLeave() // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
    next()
  }
}
</script>

<style scoped>
    /* 刷新的高度 */
    /* .swiper-container{
        top:0px;
    } */
  /*模拟的标题*/
  .header{
    z-index: 9990;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    line-height: 16px;
    text-align: center;
    background-color:transparent;
  }
  .header .header-box{
      display: flex;
      justify-content: space-between;
  }
  .header .headImg{
    /* width:53px; */
    padding:0 20px;
    height:43px;
    display: block;
    background-size: 18px auto;
    background-position: center;
    background-repeat: no-repeat;
  }
  .header .moving{
    background-image: url("http://127.0.0.1:7000/img/hall_new_trends_white.png");
  }
  .header .search{
    background-image: url("http://127.0.0.1:7000/img/hall_search_white.png");
  }
  
  /*菜单*/
  .tabs-warp{
    height: 42px;/*高度比tabs-content小, 目的是隐藏tabs的水平滚动条*/
    overflow-y: hidden;
    /* border-bottom: 1px solid #eee; */
    box-sizing: content-box;
    color:#fff;
  }
  .tabs-warp .tabs-content{
    width: 100%;
    height: 50px;
    overflow-x: auto;
  }
  .tabs-warp .tabs-content .tabs{
    width: 100%;
    white-space: nowrap;
  }
  .tabs-warp .tabs-content .tabs li{
    display: inline-block;
    height: 40px;
    line-height: 45px;
    vertical-align: middle;
  }
  .tabs-warp .tabs-content .tabs .active{
    color: #FF6990;
  }
/* 菜单样式改变 */
  .whiteBg{
    background: #fff;
  }
  .header .fontColor{
    color:rgb(128, 128, 128);
  }
  .header .grayMoving{
    background-image: url("http://127.0.0.1:7000/img/hall_new_trends_black.png");
  }
  .header .graySearch{
    background-image: url("http://127.0.0.1:7000/img/hall_search_black.png");
  }
  /*菜单进度*/
  .tabs-warp .tab-bar{
    position: relative;
    height: 2px;
    background-color: #FF6990;
    transition: left 300ms;
  }
  /*列表*/
  .swiper-container{
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
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
  /* 因为使用了底部导航栏，要看到“没有更多...”加以下样式 */
  .mescroll{
    padding-bottom: 50px;
  }
    /* 大厅 */
    /* 轮播图 */
  .hall .banner{
    width:100%;
    height:150px;
    }
    .hall .banner img{
        width:100%;
        height:100%;
    }

.recommend{
    position: relative;
}
.recommend .imgBox{
  display:block;
}
.recommend .imgBox:not(:first-child){
     width:40%;
    padding-top: 30%;
    float: right;
    padding-left: 3px;
    padding-right: 6px;
}
.recommend .imgBox:first-child{
    /* background: red; */
    width: 60%;
    padding-top: 60%;
    float: left;
    padding-left:6px;
    padding-right: 3px;
}
.imgBox{
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
}
.cf::after{
    content: "";
    display: block;
    clear: both;
}
.bgPic{
    position: absolute;
    left:6px;
    right:3px;
    top:6px;
    z-index: -1;
}
.bgPic img{
    width:100%;
    height: auto;
}
.recommend .imgBox:not(:first-child) .bgPic{
    left: 3px;
    right:6px;
}
.infoBox{
    position:absolute;
    top:67%;
    left: 0;
    right:0;
}
.recommend .imgBox:not(:first-child) .bgPic .infoBox{
    top:46%;
}
.recommend .imgBox:not(:first-child)  .bgPic .infoBox .watching{
    margin-right: 8px;
}
.infoBox img{
    width:12px;
    height: 12px;
}
.infoBox .info{
    display: flex;
    color:#fff;
    font-size: 12px;
}
.infoBox .sign{
    width:65%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.infoBox .watching{
    width:25%;   
    display: flex;
    align-items: center; 
}
.infoBox .ranking{
    width: 20%;
    margin:0 5px;
    display: flex;
} 
.hall .floor .sweetTittle{
    padding:15px 0 10px 5px;
}
.hall .floor .sweetTittle img{
    width:auto;
    height:14px;
    margin-right:8px;
    position: relative;
    top:1px;
}

.sweet{
    display: flex;
    flex-wrap: wrap;
}
.sweet .imgBox{
    width:50%;
    padding-top:50%;
    overflow: hidden;
}
.sweet .imgBox:nth-of-type(2n) .bgPic{
  right: 6px;
  left:3px;
}
.sweet .infoBox{
  top:66%;
}
/* 除了第一个tab内容的mescroll位置 */
.swiper-slide:not(:first-child) .mescroll{
  padding-top:42px;
}

</style>
