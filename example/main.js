/*
 * @Date: 2020-06-17 22:02:38
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-18 02:39:45
 * @FilePath: \element-ui-expansions\example\main.js
 */ 

import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')