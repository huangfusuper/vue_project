import Vue from 'vue'
import Vuex from 'vuex'
import {ADDSTUDENTS} from './types.js'

//挂在插件
Vue.use(Vuex)

const store = new Vuex.Store({
	//保存状态   actions ->  mutations  ->  state
	state:{
		count:0,
		students:[
			{id:110, name:'why1', age:30},
			{id:111, name:'why2', age:15},
			{id:112, name:'why3', age:50},
			{id:113, name:'why4', age:40},
			{id:114, name:'why5', age:19},
			{id:115, name:'why6', age:20}
		]
	},
	//修改操作
	mutations:{
		//默认会传递 state对象
		addCount(state){
			state.count++
		},
		addCountCount(state,count){
			state.count = state.count + count
		},
		[ADDSTUDENTS](state, student){
			state.students.push(student)
		}
	},
	//当存在异步操作的时候使用这个
	actions:{
		asyncAddUser(content,student){
			setTimeout(() => {
				content.commit(ADDSTUDENTS,student)
			},10000)
		},
		//异步回调通知
		asyncAddUserMessage(content,student){
			return new Promise((resolve,reject) => {
				setTimeout(() => {
					content.commit(ADDSTUDENTS,student);
					resolve("保存完成");
				},10000)
			});
		}
	},
	//获取数据  类似于计算属性  类似于 state里面数据的计算复用
	getters:{
		powerConut(state){
			return state.count * state.count
		},
		moreStu(state){
			return state.students.filter(s => s.age>=20)
			 
		},
		moreStuLength(state,geeters){
			return geeters.moreStu.length
			 
		},
		//用户传值
		moreStuAge(state){
			//返回一个回调函数
			return function(age){
				return state.students.filter(s => s.age >= age)
			}
			 
		}
	},
	modules:{}
})

export default store