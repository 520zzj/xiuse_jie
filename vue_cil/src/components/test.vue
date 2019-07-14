<template>
	<div id="NavSlide">
		 <nav>
            <p v-for="(item,$index) in arr" @click="toggle($index)" :key="$index"><router-link to="/" :class="{active:$index==active}">{{item}}</router-link></p>
        	<p class="fixadd">
        		<router-link to="/Select" >
	    			<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
	    		</router-link>
        	</p>
		 </nav>
	</div>
</template>
<script>
	export default {
		data:function(){
			return {
				active:0,
                arr:[
                    "热门",
                    "推荐",
                    "神经",
                    "内分泌",
                    "儿科",
                    "呼吸",
                    "热门",
                    "推荐",
                    "神经",
                    "内分泌",
                    "儿科",
                    "呼吸",
                ]

			}
		},
		methods:{
                toggle:function(index){
                    this.active=index
                }
            }
	}


</script>

<style>
	
#NavSlide{
    width: 100%;
    overflow:hidden;

}
#NavSlide nav{
    padding: 0 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: middle;
    -ms-flex-align: middle;
    align-items: middle;
    overflow: auto;
    background-color: #31C17B;
}
#NavSlide p{
    text-align: center;
    font-size: 16px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding: 10px;
    margin: 5px;
    color: #E5E5E5;

}
#NavSlide p a{
	color: #E5E5E5;
	text-decoration: none;
}
#NavSlide p a.active{
 	color: white;
}
#NavSlide .fixadd{
	position: absolute;
	right: -4px;
	background-color: #31C17B;
}
</style>
