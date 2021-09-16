import * as VueRouter from 'vue-router'

// https://next.router.vuejs.org/guide/#javascript

// 1. Define route components.
// These can be imported from other files
import Home from './pages/0_Home.vue';
import Load from './pages/1_Load.vue';
import Features from './pages/2_Features.vue';
import Method from './pages/3_Method.vue';

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'load', path: '/load', component: Load },
  { name: 'features', path: '/features', component: Features },
  { name: 'method', path: '/method', component: Method },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router
