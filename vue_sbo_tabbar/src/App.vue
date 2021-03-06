<template>
  <div id="app">
    <router-view></router-view>
	<main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
//引用阿里的图标项目
import '@/assets/icon-ali/iconfont.js'
import MainTabBar from  '@/components/tabbar/MainTabBar'
import {ADDSTUDENTS} from './store/types.js'


export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
	/* 引用阿里的图标项目 */
	@import './assets/css/base.css';

</style>
