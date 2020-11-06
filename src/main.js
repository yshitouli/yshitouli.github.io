import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import resetStyle from './style/reset.css';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	resetStyle,
	render: h => h(App)
}).$mount('#app');
