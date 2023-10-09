import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import App from "./App";
import router from "./router";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);


//Error Handling
axios.interceptors.request.use(config => {

    config.headers['X-Requested-With'] = 'XMLHttpRequest'
return config
}, error => {
return Promise.reject(error)
})

axios.interceptors.response.use(response => {
return response

}, async error => {

    if (error.response.data.code == 422 || error.response.data.code == 500) {
        return Promise.reject(error);
    }

    error.response.data.message !== undefined && app.$toast.error(error.response.data.message || 'Something went wrong.')
    error.response.data.error !== undefined && app.$toast.error(error.response.data.error || 'Error occurred.')


return Promise.reject(error)
});


window.axios = axios;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");