<template>
    ROOT
    <img alt="Vue logo" src="./assets/logo.png">
    <component
        @change="alert('gang')"
        :is="dynamicComponent">
    </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import routes from './routes';

const pages: { page_name: object } = {
    'home': import('./pages/Home.vue'),
}

// import Home from './components/Home.vue';
// import HelloWorld from './components/HelloWorld.vue';


// Routing guide from:
// https://v3.vuejs.org/guide/routing.html#official-router
// https://github.com/phanan/vue-3.0-simple-routing-example

export default defineComponent({
	name: 'App',

	// components: {
	// 	// HelloWorld
	// },

	data: () => ({
        currentPage = 'Home'
	}),

    methods: {
        open_page(page_name: string) {

        }
    },

});

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
