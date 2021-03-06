<template>
	<div>
		<h2>分类</h2>
		<h2>{{getCount}}</h2>
		<h2>getter:{{powerConut}}</h2>
		<b>获取vuex中大于20岁的学生</b>
		<ol>
			<li v-for="item in getStu">{{item}}</li>
		</ol>
		<br>
		
		
		<b>获取vuex中大于20岁的学生的长度:{{getStuLength}}</b>
		<br>
		
		
		<b>获取vuex中大于自定义岁数的学生 </b>
		<ol>
			<li v-for="item in stuAge">{{item}}</li>
		</ol>
		
		<div><button @click="btnClick()">叠加</button></div>
		<div><button @click="btnClick5(5)">叠加5</button></div>
	</div>
</template>

<script>
	export default {
		name: 'Type',
		computed:{
			getCount(){
				return this.$store.state.count
			},
			powerConut(){
				return this.$store.getters.powerConut
			},
			getStu(){
				return this.$store.getters.moreStu
			},
			getStuLength(){
				return this.$store.getters.moreStuLength
			},
			stuAge(){
				return this.$store.getters.moreStuAge(50)
			}
		},
		methods:{
			btnClick(){
				//直接操作vuex数据对象
				//this.$store.state.count++
				//官方推荐操作
				this.$store.commit('addCount')
			},
			btnClick5(age){
				//官方推荐操作
				this.$store.commit('addCountCount',age)
			}
		}
	}
</script>

<style>
</style>
