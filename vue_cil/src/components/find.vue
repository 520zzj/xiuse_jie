<template>
    <div class="find">
      <!-- 标题 -->
      <div class="header">发现</div>
      <div class="funList">
          <ul>
              <li class="list-item">
                  <a href="">
                      <div class="linkInfo">
                            <img src="//127.0.0.1:7000/img/dynamic_space.png" alt="" class="icon">
                            <span class="title">动态空间</span>
                      </div>
                      <van-icon name="arrow" color="#D4D4D4" />
                  </a>
                </li>
              <li class="list-item">
                  <a href="">
                     <div class="linkInfo">
                            <img src="//127.0.0.1:7000/img/discover_activity.png" alt=""  class="icon">
                            <span class="title">热辣活动</span>
                      </div>
                      <van-icon name="arrow" color="#D4D4D4" />
                  </a>
                </li>
              <li class="list-item">
                  <a href="">
                      <div class="linkInfo">
                            <img src="//127.0.0.1:7000/img/item_search_nomor.png" alt=""  class="icon">
                            <span class="title">搜索用户</span>
                      </div>
                      <van-icon name="arrow" color="#D4D4D4" />
                  </a>
                </li>
             <li class="list-item">
                  <a href="">
                    <div class="linkInfo">
                            <img src="//127.0.0.1:7000/img/item_store.png" alt=""  class="icon">
                            <span class="title">秀色商城</span>
                      </div>
                      <van-icon name="arrow" color="#D4D4D4" />
                  </a>
                </li>
             <li class="list-item">
                  <a href="">
                      <div class="linkInfo">
                            <img src="//127.0.0.1:7000/img/item_getgold.png" alt=""  class="icon">
                            <span class="title">获取秀币</span>
                      </div>
                      <van-icon name="arrow" color="#D4D4D4" />
                  </a>
                </li>
             <li class="list-item">
                  <a href="">
                      <div class="linkInfo">
                            <img src="//127.0.0.1:7000/img/item_kefu.png" alt=""  class="icon">
                            <span class="title">客服中心</span>
                      </div>
                      <van-icon name="arrow" color="#D4D4D4" />
                  </a>
                </li>
          </ul>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.header{
    position: fixed;
    left:0;
    right:0;
    top:0;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: #fff;
}
.funList{
    margin-top: 50px;
}
.funList a{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height:40px;
    line-height: 40px;
    /* display: block; */
    overflow: hidden;
    background-color:#fff;
    padding:0 15px;
    margin-top: 15px;
}
.funList .list-item::before{
    display: table;
    content: "";
}
.funList .list-item:nth-child(5) a,.funList .list-item:last-child a{
    margin-top:0px;
}
.funList .list-item:nth-child(4)::after,.funList .list-item:nth-child(5)::after{
    display: block;
    content: "";
    margin-left: 15px;
    border-top:1px solid #d4d4d4;
}
.funList .title{
    margin-left:15px;
    color: #555;
    font-size: 12px;
}
.funList .icon{
    width: 25px;
    height:25px;
}
</style>



