<template>
    <div id="main" class="">
        <div class="self-center my-8 border-b-4 border-gray-300 pb-2">
            <!-- <img class="" alt="Vue logo" src="./assets/logo.png"> -->
            <span class="text-5xl uppercase font-bold text-blue-800">Machinest</span>
        </div>

        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'App',

	data: () => ({
        //
	}),

    methods: {
        //
    },
});

</script>

<style lang="scss">

#main {
    @apply md:mx-auto mx-2 px-4 max-w-4xl flex flex-col h-screen ;
    @apply border border-gray-200;
}

h1 {
    @apply mb-4 font-medium text-5xl text-gray-800 #{!important};
}

/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
</style>
