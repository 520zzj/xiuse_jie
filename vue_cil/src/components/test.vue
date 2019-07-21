<template>
    <div class="test">
        <div class="parent clearf">
            <div class="child"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    }
}   
</script>
<style>
.test .parent{
    width:100%;
    position: relative;
    overflow: hidden;
    border:1px solid green;
}
.test .child{
    width:100px;
    height:100px;
    position:absolute;
    background:red;
    /* float:left; */
}
</style>


