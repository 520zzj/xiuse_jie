<template>
    <div class="indexlist">
            <mt-header title="选择分区号">
                <router-link to="/phonelogin" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
            <mt-index-list  :show-indicator="false">
                    <mt-index-section index="A">
                      <mt-cell title="安哥拉"></mt-cell>
                      <mt-cell title="阿富汗"></mt-cell>
                      <mt-cell title="阿尔巴尼亚"></mt-cell>
                      <mt-cell title="阿尔及利亚"></mt-cell>
                      <mt-cell title="安尔道共和国"></mt-cell>
                      <mt-cell title="安圭拉岛"></mt-cell>
                      <mt-cell title="安提瓜和巴布达"></mt-cell>
                      <mt-cell title="阿根廷"></mt-cell>
                      <mt-cell title="阿森送"></mt-cell>
                      <mt-cell title="澳大利亚"></mt-cell>
                      <mt-cell title="奥地利"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="B">
                      <mt-cell title="巴哈马"></mt-cell>
                      <mt-cell title="巴林"></mt-cell>
                      <mt-cell title="巴巴多斯"></mt-cell>
                      <mt-cell title="白俄罗斯"></mt-cell>
                      <mt-cell title="比利时"></mt-cell>
                      <mt-cell title="伯利兹"></mt-cell>
                      <mt-cell title="贝宁"></mt-cell>
                      <mt-cell title="百慕大群岛"></mt-cell>
                      <mt-cell title="玻利维亚"></mt-cell>
                      <mt-cell title="博兹瓦纳"></mt-cell>
                      <mt-cell title="巴西"></mt-cell>
                      <mt-cell title="保加利亚"></mt-cell>
                      <mt-cell title="巴拿马"></mt-cell>
                      <mt-cell title="巴基斯坦"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="C">
                      <mt-cell title="朝鲜"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="D">
                        <mt-cell title="丹麦"></mt-cell>
                        <mt-cell title="多米尼共和国"></mt-cell>
                        <mt-cell title="德国"></mt-cell>
                        <mt-cell title="东萨摩亚"></mt-cell>
                        <mt-cell title="多哥"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="E">
                        <mt-cell title="厄瓜多尔"></mt-cell>
                        <mt-cell title="俄罗斯"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="F">
                        <mt-cell title="芬兰"></mt-cell>
                        <mt-cell title="法国"></mt-cell>
                        <mt-cell title="法属圭亚那"></mt-cell>
                        <mt-cell title="菲律宾"></mt-cell>
                        <mt-cell title="法属波利尼亚"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="G">
                        <mt-cell title="哥伦比亚"></mt-cell>
                        <mt-cell title="刚果"></mt-cell>
                        <mt-cell title="古巴"></mt-cell>
                        <mt-cell title="冈比亚"></mt-cell>
                        <mt-cell title="关岛"></mt-cell>
                        <mt-cell title="圭亚那"></mt-cell>
                        <mt-cell title="格林纳达"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="H">
                        <mt-cell title="海底"></mt-cell>
                        <mt-cell title="韩国"></mt-cell>
                        <mt-cell title="洪都拉斯"></mt-cell>
                        <mt-cell title="荷兰"></mt-cell>
                        <mt-cell title="哈萨克斯坦"></mt-cell>
                        <mt-cell title="荷属安地列斯"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="J">
                        <mt-cell title="加拿大"></mt-cell>
                        <mt-cell title="捷克"></mt-cell>
                        <mt-cell title="吉布提"></mt-cell>
                        <mt-cell title="加蓬"></mt-cell>
                        <mt-cell title="加纳"></mt-cell>
                        <mt-cell title="几内亚"></mt-cell>
                        <mt-cell title="柬埔寨"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="K">
                        <mt-cell title="客麦隆"></mt-cell>
                        <mt-cell title="开曼群岛"></mt-cell>
                        <mt-cell title="库克群岛"></mt-cell>
                        <mt-cell title="科特迪瓦"></mt-cell>
                        <mt-cell title="肯尼亚"></mt-cell>
                        <mt-cell title="科威特"></mt-cell>
                        <mt-cell title="卡塔尔"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="L">
                        <mt-cell title="老挝"></mt-cell>
                        <mt-cell title="拉脱维亚"></mt-cell>
                        <mt-cell title="黎巴嫩"></mt-cell>
                        <mt-cell title="莱索托"></mt-cell>
                        <mt-cell title="利比里亚"></mt-cell>
                        <mt-cell title="利比亚"></mt-cell>
                        <mt-cell title="列支敦士登"></mt-cell>
                        <mt-cell title="立陶宛"></mt-cell>
                        <mt-cell title="罗马尼亚"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="M">
                        <mt-cell title="孟加拉国"></mt-cell>
                        <mt-cell title="缅甸"></mt-cell>
                        <mt-cell title="马达加斯加"></mt-cell>
                        <mt-cell title="马拉西亚"></mt-cell>
                        <mt-cell title="马尔代夫"></mt-cell>
                        <mt-cell title="马里"></mt-cell>
                        <mt-cell title="马耳他"></mt-cell>
                        <mt-cell title="蒙古"></mt-cell>
                        <mt-cell title="美国"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="N">
                        <mt-cell title="纳米比亚"></mt-cell>
                        <mt-cell title="尼泊尔"></mt-cell>
                        <mt-cell title="尼加拉瓜"></mt-cell>
                        <mt-cell title="尼日尔"></mt-cell>
                        <mt-cell title="尼日利亚"></mt-cell>
                        <mt-cell title="挪威"></mt-cell>
                        <mt-cell title="南非"></mt-cell>
                        <mt-cell title="南斯拉夫"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="P">
                        <mt-cell title="葡萄牙"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="R">
                        <mt-cell title="日本"></mt-cell>
                        <mt-cell title="瑞典"></mt-cell>
                        <mt-cell title="瑞士"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="S">
                        <mt-cell title="塞浦路斯"></mt-cell>
                        <mt-cell title="萨尔瓦多"></mt-cell>
                        <mt-cell title="圣卢西亚"></mt-cell>
                        <mt-cell title="圣文森特岛"></mt-cell>
                        <mt-cell title="沙特阿拉伯"></mt-cell>
                        <mt-cell title="塞内加尔"></mt-cell>
                        <mt-cell title="苏丹"></mt-cell>
                        <mt-cell title="苏里南"></mt-cell>
                        <mt-cell title="思维兰斯"></mt-cell>
                        <mt-cell title="索马里"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="T">
                        <mt-cell title="台湾省"></mt-cell>
                        <mt-cell title="塔吉克斯坦"></mt-cell>
                        <mt-cell title="坦桑尼亚"></mt-cell>
                        <mt-cell title="泰国"></mt-cell>
                        <mt-cell title="汤家"></mt-cell>
                        <mt-cell title="特立尼达和多巴哥"></mt-cell>
                        <mt-cell title="突尼斯"></mt-cell>
                        <mt-cell title="土耳其"></mt-cell>
                        <mt-cell title="土库曼斯坦"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="W">
                        <mt-cell title="文莱"></mt-cell>
                        <mt-cell title="危地马拉"></mt-cell>
                        <mt-cell title="乌干达"></mt-cell>
                        <mt-cell title="乌克兰"></mt-cell>
                        <mt-cell title="乌拉圭"></mt-cell>
                        <mt-cell title="乌兹别克斯坦"></mt-cell>
                        <mt-cell title="委内瑞拉"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="X">
                        <mt-cell title="希腊"></mt-cell>
                        <mt-cell title="香港"></mt-cell>
                        <mt-cell title="匈牙利"></mt-cell>
                        <mt-cell title="新西兰"></mt-cell>
                        <mt-cell title="西萨摩亚"></mt-cell>
                        <mt-cell title="新加坡"></mt-cell>
                        <mt-cell title="西班牙"></mt-cell>
                        <mt-cell title="叙利亚"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="Y">
                        <mt-cell title="印度"></mt-cell>
                        <mt-cell title="印度尼西亚"></mt-cell>
                        <mt-cell title="伊朗"></mt-cell>
                        <mt-cell title="伊拉克"></mt-cell>
                        <mt-cell title="以色列"></mt-cell>
                        <mt-cell title="意大利"></mt-cell>
                        <mt-cell title="牙买加"></mt-cell>
                        <mt-cell title="约旦"></mt-cell>
                        <mt-cell title="英国"></mt-cell>
                        <mt-cell title="越南"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="Z">
                        <mt-cell title="中非共和国"></mt-cell>
                        <mt-cell title="智利"></mt-cell>
                        <mt-cell title="中国"></mt-cell>
                        <mt-cell title="斐济"></mt-cell>
                        <mt-cell title="直布罗陀"></mt-cell>
                        <mt-cell title="扎伊尔"></mt-cell>
                        <mt-cell title="赞比亚"></mt-cell>
                    </mt-index-section>
            </mt-index-list>
    </div>
</template>
<script>
export default{
    data(){
        return {

        }
    }
}
</script>

<style>
 * { touch-action: pan-y; }
 .indexlist .mintui-back:before{
     color:#D8244B;
 }
 .indexlist .mint-header-title{
     color:black;
 }
 .indexlist .mint-header{
     background: #ffffff;
 }
 .indexlist .mint-indexsection-index{
     border-top:1px solid gray;
     border-bottom: 1px solid gray;
 }
 .indexlist .mint-cell-wrapper{
     border-bottom: 1px solid #DCDCDC;
     font-size: 14px;
 }
 .indexlist .mint-indexlist-nav{
     position: fixed;
     background-color: transparent;
     color:#26A2FF;
     outline: none;
     border:none;
 }
 .indexlist .mint-indexlist-navlist{
     background-color: transparent;
 }
 .indexlist .mint-indexlist-content{
    margin-right: 0px !important;
 }
 .indexlist .mint-indexsection-index{
     color:black;
     background: #F0F0F0;
 }
 .indexlist .mint-cell-text{
     font-size: 14px;
 }
</style>