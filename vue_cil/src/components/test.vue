<template>
  <div class="test">
    <div>
    <img src="http://127.0.0.1:7000/img/20160212041257_XcaF5.thumb.700_0.jpg" alt="">
    </div>
    <button @click="savePic">保存图片</button>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    savePic(){
      var a=document.createElement("a")
      a.href="http://127.0.0.1:7000/img/20160212041257_XcaF5.thumb.700_0.jpg"
      a.download="1.png"
      a.click()
    }

  }
}
</script>
<style>
.test img{
  width: 300px;
  height:300px;
}
</style>

