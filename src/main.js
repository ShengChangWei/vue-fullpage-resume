import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min.js' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import EVueEcharts from 'e-vue-echarts';
Vue.use(EVueEcharts)
Vue.use(VueFullPage);

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');
