<template>
	<div>
		<h2>档案</h2>
		<p>我是档案我是档案我是档案我是档案我是档案我是档案我是档案我是档案</p>
		{{nameData}}
		{{ageData}}
	</div>
</template>

<script>
	export default {
		name: 'Profile',
		computed:{
			nameData(){
				return this.$route.query.pro_name
			},
			ageData(){
				return this.$route.query.pro_age
			}
		}
	}
</script>

<style>
</style>
