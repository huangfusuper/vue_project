<template>
	<div class="tab-bar-item" @click="tabbarClick()">
		<div v-if="!isActive">
			<slot name="tabbar-icon"></slot>
		</div>
		
		<div v-else>
			<slot name="tabbar-icon-active"></slot>
		</div>
		
		<div :style="activeStyle">
			<slot name="tabbar-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name:'TabBarItem',
		methods:{
			
			tabbarClick(){
				if(!this.isActive){
					this.$router.push(this.path)
				}
				
			}
		},
		props:{
			path:String
		},
		computed:{
			isActive(){
				return this.$route.path === this.path
			},
			activeStyle(){
				return this.isActive ? {color:'#ff0000'} :'';
			}
		}
	}
</script>

<style>
	.tab-bar-item {
		flex: 1;
		height: 49px;
	}

</style>
