// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 点击事件3毫秒 问题
import fastClick from 'fastclick'
// 初始化不同手机的初始样式不同的问题
import './assets/styles/reset.css'
// 解决手机1像素边框问题
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
