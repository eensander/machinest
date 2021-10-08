import * as VueRouter from 'vue-router'
import useConfig from './composables/useConfig';

const config = useConfig();

// https://next.router.vuejs.org/guide/#javascript

// 1. Define route components.
import Home from './pages/0_Home.vue';
import Load from './pages/1_Load.vue';
import Method from './pages/3_Method.vue';
import Features from './pages/2_Features.vue';
import Clean from './pages/4_Clean.vue';
import Train from './pages/5_Train.vue';
import Predict from './pages/6_Predict.vue';

const routes = [
	{ name: 'home', path: '/', component: Home },
	{ name: 'load', path: '/load', component: Load },
	{ name: 'method', path: '/method', component: Method },
	{ name: 'features', path: '/features', component: Features },
	{ name: 'clean', path: '/clean', component: Clean },
	{ name: 'train', path: '/train', component: Train },
	{ name: 'predict', path: '/predict', component: Predict },
]

const router = VueRouter.createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: VueRouter.createWebHashHistory(),
	routes,
})

router.beforeEach((To, From, Next) => {
	if (To.name == 'home' || To.name == 'load'){
		// Misschien dataset opnieuw op null zetten? i.v.m. die bug van Lex
		Next();
	}
	if (config.dataset.file == null) { // Alleen voor MVP zo houden, later ook model?
		Next({ name: 'home' });
		// Geen dataset notificatie
	}

	// Voor later
	if (config.dataset.file == null && config.model.file == null) {
		Next({ name: 'home' });
	}
	if (config.model.file == null && To.name == 'predict') {
		Next({ name: 'home' });
	}
	if (config.dataset.file == null) {
		Next({ name: 'home' })
	}
	Next();
})

export default router
