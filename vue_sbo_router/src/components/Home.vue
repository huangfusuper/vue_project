<template>
	<div>
		<h2>我是首页</h2>
		<p>我是首页内容  哈哈哈</p>

		<router-link to="/home/news">新闻</router-link>
		<router-link to="/home/message">消息</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		// created(){
		// 	console.log("created")
		// 	document.title="home"
		// },
		updated(){
			console.log("updated")
		},
		mounted(){
			console.log("mounted")
		}
	}
</script>

<style>
</style>
