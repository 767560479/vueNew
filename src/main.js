import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './model/axios'
import './model/element'
// 引入公共scss
import './assets/css/basic.scss';
// 请求数据
import VueResource from 'vue-resource';
Vue.config.productionTip = false

Vue.use(VueResource);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')