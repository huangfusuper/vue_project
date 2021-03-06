<template>
	<div class="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'TabBar'
	}
</script>

<style>
	.tab-bar {
		display: flex;
		/* 元素居中 */
		text-align: center;
		/* 距离底部 */
		bottom: 0px;
		position: fixed;
		/* 距离左边地址 */
		left: 0;
		/* 距离右边地址 */
		right: 0;
		/* 距离底部位置 改变样式高度 */
		padding-bottom: 15px;
		/* 面板阴影 */
		background-color: #d2c9c9;
		/* 阴影 */
		box-shadow:1px -1px 1px 0px rgba(0,0,0,.06) 
		
	}
	

	
</style>
