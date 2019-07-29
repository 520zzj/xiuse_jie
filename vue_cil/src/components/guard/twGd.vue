<template>
    <!-- 本周女神 -->
    <div class="twGd">
          <div class="section">   
                        <!-- 刷新静态背景
                        <div class="freBgSta"></div>
                        刷新动态背景 
                        <div class="freMovBox">
                            <div class="freBgMovOne bg freBgMov"></div>
                        </div> -->  
                        <div class="befThree">
                            <ul class="threeBox">
                                <li v-for="(item,index) in befThree" :key="index">
                                        <a href="" class="link">
                                            <div class="Medal">
                                                <div class="circle"><img :src="item.proPic" alt=""></div>
                                            </div>
                                            <div class="details">
                                                <p class="style">{{item.name}}</p>
                                                <div class="rankBgBox">
                                                    <img :src="item.nameBg" alt="" class="rankBg">
                                                        <span class="rankText">{{item.name}}</span>
                                                    <div class="num">
                                                        <img :src="item.numOne" alt="">
                                                        <img :src="item.numTwo" alt="">
                                                    </div>
                                                </div>
                                                <div class="fight">战力值：<span>{{item.fight}}</span></div>
                                            </div>
                                        </a>
                                    </li>
                            </ul>
                        </div>
                        <div class="aftThree">
                            <ul class="mui-table-view">
                                    <li class="mui-table-view-cell"  v-for="(item,index) in aftThree" :key="index">
                                        <a class="mui-navigate-right">
                                        <div class="listItem">
                                                    <span class="ranking">4</span>
                                                <div class="picFra"><img :src="item.proPic" alt=""></div>
                                                <div class="goddess">
                                                     <span class="name">{{item.name}}</span>
                                                    <div class="rankBgBox">
                                                        <img :src="item.nameBg" alt="" class="rankBg">
                                                            <span class="rankText">{{item.name}}</span>
                                                        <div class="num">
                                                            <img :src="item.numOne" alt="">
                                                            <img :src="item.numTwo" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="fight">战力值：<span>{{item.fight}}</span></div>
                                        </div>
                                        </a>
                                    </li>
                                </ul>
                        </div>
                </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
              befThree:[
                    {proPic:"//127.0.0.1:7000/img/69ded6a598_250_350.jpg",name:"名牌",nameBg:"//127.0.0.1:7000/img/armybackground80_99.png",numOne:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",numTwo:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",fight:"86247"},
                    {proPic:"//127.0.0.1:7000/img/69ded6a598_250_350.jpg",name:"名牌",nameBg:"//127.0.0.1:7000/img/armybackground80_99.png",numOne:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",numTwo:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",fight:"86247"},
                    {proPic:"//127.0.0.1:7000/img/69ded6a598_250_350.jpg",name:"名牌",nameBg:"//127.0.0.1:7000/img/armybackground80_99.png",numOne:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",numTwo:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",fight:"86247"}
                ],
                aftThree:[
                    {proPic:"//127.0.0.1:7000/img/69ded6a598_250_350.jpg",name:"名牌",nameBg:"//127.0.0.1:7000/img/armybackground80_99.png",numOne:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",numTwo:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",fight:"86247"},
                    {proPic:"//127.0.0.1:7000/img/69ded6a598_250_350.jpg",name:"名牌",nameBg:"//127.0.0.1:7000/img/armybackground80_99.png",numOne:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",numTwo:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",fight:"86247"},
                    {proPic:"//127.0.0.1:7000/img/69ded6a598_250_350.jpg",name:"名牌",nameBg:"//127.0.0.1:7000/img/armybackground80_99.png",numOne:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",numTwo:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",fight:"86247"},
                    {proPic:"//127.0.0.1:7000/img/69ded6a598_250_350.jpg",name:"名牌",nameBg:"//127.0.0.1:7000/img/armybackground80_99.png",numOne:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",numTwo:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",fight:"86247"},
                    {proPic:"//127.0.0.1:7000/img/69ded6a598_250_350.jpg",name:"名牌",nameBg:"//127.0.0.1:7000/img/armybackground80_99.png",numOne:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",numTwo:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",fight:"86247"},
                    {proPic:"//127.0.0.1:7000/img/69ded6a598_250_350.jpg",name:"名牌",nameBg:"//127.0.0.1:7000/img/armybackground80_99.png",numOne:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",numTwo:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",fight:"86247"},
                    {proPic:"//127.0.0.1:7000/img/69ded6a598_250_350.jpg",name:"名牌",nameBg:"//127.0.0.1:7000/img/armybackground80_99.png",numOne:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",numTwo:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",fight:"86247"},
                    {proPic:"//127.0.0.1:7000/img/69ded6a598_250_350.jpg",name:"名牌",nameBg:"//127.0.0.1:7000/img/armybackground80_99.png",numOne:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",numTwo:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",fight:"86247"},
                    {proPic:"//127.0.0.1:7000/img/69ded6a598_250_350.jpg",name:"名牌",nameBg:"//127.0.0.1:7000/img/armybackground80_99.png",numOne:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",numTwo:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",fight:"86247"},
                    {proPic:"//127.0.0.1:7000/img/69ded6a598_250_350.jpg",name:"名牌",nameBg:"//127.0.0.1:7000/img/armybackground80_99.png",numOne:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",numTwo:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",fight:"86247"},
                    {proPic:"//127.0.0.1:7000/img/69ded6a598_250_350.jpg",name:"名牌",nameBg:"//127.0.0.1:7000/img/armybackground80_99.png",numOne:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",numTwo:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",fight:"86247"},
                    {proPic:"//127.0.0.1:7000/img/69ded6a598_250_350.jpg",name:"名牌",nameBg:"//127.0.0.1:7000/img/armybackground80_99.png",numOne:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",numTwo:"//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",fight:"86247"}
                ]
        }
    }
}
</script>
<style>

</style>




