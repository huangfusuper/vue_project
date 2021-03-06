<template>
	<!-- 
		router-link 被渲染为超链接   
			to 属性是寻找到什么路由表
			tag 指定要显示类型 超链接  button之类的
			replace 禁止返回
			activeClass 可以指定对应组件是否被点击的class名称
			
		router-view 显示位置，router-link渲染出来的页面显示的占位符
		
	 -->
  <div id="app">
	  <!-- <router-link to="/home" tag="a" replace>首页</router-link>
	  <router-link to="/about" tag="a" replace>关于</router-link>
	  <router-link to="/user" tag="a" replace>用户</router-link> -->
	  
	  <!-- 动态路由-->
	  <router-link to="/home">首页</router-link>
	  <router-link to="/about">关于</router-link>
	  <router-link :to="'/user/' + name">用户</router-link>
	  <router-link :to="profile_obj">档案</router-link>
	  <button @click="profileClick">档案</button>
	  
	  <!-- 通过代码修改路径 -->
	  <!-- <button @click="homeClick()">首页</button>
	  <button @click="aboutClick()">关于</button> -->
	  <router-view></router-view>
  </div>
</template>

<script>
	/*
	 * 代码方式的路由跳转：this.$router.push('/home')能够调整为指定路径
	 * this.$route 能够获取活跃状态的路由
	 */
	export default {
		name: 'App',
		data(){
			return {
				name:'huangfu',
				profile_obj:{
					path:'/profile',
					query:{
						pro_name:"huangfu",
						pro_age:18
					}
				}
			}
		},
		methods:{
			homeClick(){
				this.$router.push('/home')
			},
			aboutClick(){
				this.$router.push('/about')
			},
			profileClick(){
				this.$router.push({
					path:'/profile',
					query:{
						pro_name:"huangfu",
						pro_age:18
					}
						
				})
			}
		}
	}
</script>

<style scoped>
	.router-link-exact-active{
		color: red;
	}
</style>
