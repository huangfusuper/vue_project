//配置路由相关的信息
//先导入路由
import VueRouter from 'vue-router'
import Vue from 'vue'


//通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

//配置路由表
//path： 浏览器路径
//component: 该路径对应的组件
//redirect: 重定向到某一个路径
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'
// const routes = [
// 	{
// 		path:'',
// 		redirect: '/home'
// 	},
// 	{
// 		path:'/home',
// 		component: Home
// 	},
// 	{
// 		path:'/about',
// 		component: About
// 	},
// 	{	
// 		//动态路由  地址携带数据
// 		path:'/user/:userId',
// 		component: User
// 	}
// ]

/**
 * 懒加载
 */
const routes1 = [
	{
		path:'',
		redirect: '/home'
	},
	{
		path:'/home',
		component: () => import('../components/Home'),
		//配置子路由
		children: [
			{
				path:'news',
				component: () => import('../components/HomeNews')
			},
			{
				path:'message',
				component: () => import('../components/HomeMessage')
			},
			//默认路径
			{
				path:'',
				component: () => import('../components/HomeMessage')
			}
		],
		meta: {
			title: "主页"
		}
	},
	{
		path:'/about',
		component: () => import('../components/About'),
		meta: {
			title: "关于我"
		}
	},
	{	
		//动态路由  地址携带数据
		path:'/user/:userId',
		component: () => import('../components/User'),
		meta: {
			title: "用户"
		}
	},
	{	
		//动态路由  地址携带数据
		path:'/profile',
		component: () => import('../components/Profile'),
		meta: {
			title: "档案"
		}
	}
]

//创建路由对象
//mode:'hsah' : 该属性默认是hash，显示的路径就是 http://localhost:8080/#/home
//mode:'history': 显示的路径是http://localhost:8080/home
const router = new VueRouter({
	//routes:[]
	routes:routes1,
	mode:'history'
})
//路由守卫  前置收尾
router.beforeEach((to, from, next) =>{
	document.title = to.matched[0].meta.title
	console.log(to)
	console.log(from)
	next();   //false 不跳转   '/' 调到根页面
})

//路由守卫   后置收尾
router.afterEach((to,from) =>{
	console.log(to)
	console.log(from)
})

//导出路由对象
export default router
