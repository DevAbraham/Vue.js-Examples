import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
    // Insertar url de firebase ejemplo : https://to-do-list-vuejs.firebaseio.com/
axios.defaults.baseURL = '';

new Vue({
    el: '#app',
    render: h => h(App)
})