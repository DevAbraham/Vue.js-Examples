import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import EventBus from '@/plugins/event-bus'
import msToMm from '@/filters/ms-to-mm'
import blur from '@/directives/blur'

Vue.use(blur)
Vue.use(EventBus)
Vue.use(msToMm)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')