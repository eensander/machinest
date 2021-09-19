import * as VueRouter from 'vue-router'

// https://next.router.vuejs.org/guide/#javascript

// 1. Define route components.
import Home from './pages/0_Home.vue';
import Load from './pages/1_Load.vue';
import Method from './pages/2_Method.vue';
import Features from './pages/3_Features.vue';

const routes = [
	{ name: 'home', path: '/', component: Home },
	{ name: 'load', path: '/load', component: Load },
	{ name: 'method', path: '/method', component: Method },
	{ name: 'features', path: '/features', component: Features },
]

const router = VueRouter.createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: VueRouter.createWebHashHistory(),
	routes,
})

export default router
