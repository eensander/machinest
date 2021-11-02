import { createApp } from 'vue'
import App from './App.vue'


import './style/index.scss'


import router from './router'


import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";


createApp(App)
	.use(router)
	.use(Toast)
	.mount('#app')
