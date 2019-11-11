import 'babel-polyfill'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Echarts from 'vue-echarts'
import charts from 'echarts/lib/echarts'

// 引入全局样式
import '@/styles/index.scss'
// 引入字体图标
import '@/styles/font_ci6klyii7bd/iconfont.css'

import '@/styles/myanimate.css'
import animated from 'animate.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'echarts/lib/chart/line'
import 'echarts/lib/component/axis'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/dataZoom'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/fonts/font.css'
Vue.use(VueAwesomeSwiper /* { default global options } */)

Vue.use(animated)
Vue.use(ElementUI)
Vue.component('chart', Echarts)

Vue.config.productionTip = false
Vue.prototype.$charts = charts

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
