<template>
	<div>
		<h2>首页</h2>
		<h2>{{getCount}}</h2>
		<button @click="btnClick">首页异步请求</button>
	</div>
</template>

<script>
	export default {
		name: 'Type',
		computed:{
			getCount(){
				return this.$store.state.count
			}
		},
		methods:{
			btnClick(){
				new Promise((resolve,reject) =>{
					//做异步请求 成功的调用这个
					// resolve("huangfu");
					//失败的调用这个
					reject("error")
				}).then((data) =>{
					console.log(data)
				}).catch((err) =>{
					console.log(err)
				})
			}
		}
	}
</script>

<style>
</style>
