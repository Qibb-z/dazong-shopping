import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入所有MintUI组件
import MintUI from 'mint-ui';
// 导入mint-ui的样式文件
import 'mint-ui/lib/style.min.css';
 // 通过vue.use()方法，将Mint UI 注册为Vue的插件
   Vue.use(MintUI);
// 引入axios并安装
import axios from 'axios';
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
