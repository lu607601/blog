import Vue from 'vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import App from './app'
import router from './router'
Vue.use(ElementUi)
Vue.use(MavonEditor)
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
