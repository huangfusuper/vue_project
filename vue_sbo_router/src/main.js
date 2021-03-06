import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
//App组件的东西必然会被替换到 #app标签内
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
