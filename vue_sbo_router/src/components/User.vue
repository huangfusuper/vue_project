<template>
	<div>
		<h2>我是用户页面</h2>
		<p>	我是用户内容  嘿嘿嘿嘿嘿</p>
		{{name}}
	</div>
</template>

<script>
	
	export default {
		name:'User',
		computed:{
			name(){
				//获取路由表上定义的参数
				return this.$route.params.userId
			}
		}
	}
</script>

<style>
</style>
