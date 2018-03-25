import Vue from 'vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './theme/icon.less'
import App from './app'
import router from './router'

import blogComponents from './components/index'

Vue.use(ElementUi)
Vue.use(MavonEditor)

Object.keys(blogComponents).forEach((key)=>{
    Vue.component(key, blogComponents[key])
})

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
