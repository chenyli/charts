import Vue from 'vue'

import 'normalize.css'
import './app.less'
import './assets/fonts.less'

import App from './App.vue'

// 区域滚动
// import IScrollView from 'vue-iscroll-view'
// import IScroll from 'iscroll'

// Vue.use(IScrollView, IScroll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
