<template>
	<tab-bar>
		<tab-bar-item path="/index">
			<svg slot="tabbar-icon" class="icon" aria-hidden="true">
			  <use xlink:href="#icon-shouye"></use>
			</svg>
			
			<svg slot="tabbar-icon-active" class="icon" aria-hidden="true">
			  <use xlink:href="#icon-shouye-active"></use>
			</svg>
			
			<div slot="tabbar-text">首页</div>
		</tab-bar-item>
		
		
		<tab-bar-item path="/type">
			<svg slot="tabbar-icon" class="icon" aria-hidden="true">
			  <use xlink:href="#icon-leimupinleifenleileibie"></use>
			</svg>
			
			<svg slot="tabbar-icon-active" class="icon" aria-hidden="true">
			  <use xlink:href="#icon-leimupinleifenleileibie-active"></use>
			</svg>
			
			<div slot="tabbar-text">分类</div>
		</tab-bar-item>
		
		
		<tab-bar-item path="/card">
			<svg slot="tabbar-icon" class="icon" aria-hidden="true">
			  <use xlink:href="#icon-gouwuchekong"></use>
			</svg>
			
			<svg slot="tabbar-icon-active" class="icon" aria-hidden="true">
			  <use xlink:href="#icon-gouwuchekong-active"></use>
			</svg>
			
			<div slot="tabbar-text">购物车</div>
		</tab-bar-item>
		
		<tab-bar-item path="/home">
			<svg slot="tabbar-icon" class="icon" aria-hidden="true">
			  <use xlink:href="#icon-wo"></use>
			</svg>
			
			<svg slot="tabbar-icon-active" class="icon" aria-hidden="true">
			  <use xlink:href="#icon-wo-active"></use>
			</svg>
			
			<div slot="tabbar-text">我的</div>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
	
	import TabBar from  '@/components/tabbar/TabBar'
	import TabBarItem from  '@/components/tabbar/TabBarItem'
	
	export default {
		name:'MainTabBar',
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
