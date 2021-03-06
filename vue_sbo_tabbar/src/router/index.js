//引用Vue
import Vue from 'vue'
//引用路由
import VueRouter from 'vue-router'

//挂载路由
Vue.use(VueRouter);

//构建路由表
const routes = [
	{
		path:"",
		redirect:"/home"
	},{
		path:"/home",
		component: () => import('../views/home/Home')
	},{
		path:"/card",
		component: () => import('../views/card/Card')
	},{
		path:"/index",
		component: () => import('../views/index/Index')
	},{
		path:"/type",
		component: () => import('../views/type/Type')
	}
]

const router = new VueRouter({
	routes
});

export default router
