<template>
	<div>
		<h2>我的</h2>
		<div>
			id: <input type="text" v-model:value="user.id"> <br>
			name: <input type="text" v-model:value="user.name"> <br>
			age: <input type="text" v-model:value="user.age"> <br>
			<br>
			<button @click="addUser">添加一个用户</button>
			
			----
			
			<button @click="addUserAsync">异步添加一个用户</button>
			
			----
			
			<button @click="addUserAsyncMessage">异步添加一个用户,回调通知</button>
			<br>
			
			数据预览：{{user}}
		</div>
	</div>
</template>

<script>
	
	import {ADDSTUDENTS} from '@/store/types.js'
	
	export default {
		name: 'Home',
		data(){
			return {
				user:{
					id:0,
					name:'',
					age:0
				}
			}
		},
		methods:{
			addUser(){
				this.$store.commit(ADDSTUDENTS,this.user)
			},
			addUserAsync(){
				this.$store.dispatch('asyncAddUser',this.user)
			},
			addUserAsyncMessage(){ 
				this.$store
					.dispatch('asyncAddUserMessage',this.user)
					.then(res =>{
						console.log(res + "-----")
					})
			}
		}
	}
</script>

<style>
</style>
