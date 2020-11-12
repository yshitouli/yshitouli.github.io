import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import InAndOut from '../views/InAndOut.vue';
import Resume from '../views/Resume.vue';
import Echarts from '../views/Echarts.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/resume',
		name: 'Resume',
		component: Resume
	},
	{
		path: '/inAndOut/:year/:month',
		name: 'InAndOut',
		component: InAndOut
	},
	{
		path: '/echarts/:year',
		name: 'Echarts',
		component: Echarts
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
];

const router = new VueRouter({
	routes
});

export default router;
