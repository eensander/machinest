<template>
  <div>
    <h1>Home</h1>

    <p>Welcome to <span class="underline">MACHINEST</span>. This website serves as a tool for training Machine Learning models in a web browser.</p>

    <div class="flex justify-between my-8">
        <div class="w-0 h-0 invisible"></div>
        <button @click="$router.push({ name: 'load' });" class="router-btn">
            1. Load &gt;
        </button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import useConfig from '@/composables/useConfig';

export default defineComponent({

	name: "Home",

	setup() { 
		
		const config = useConfig()	

		// files.test.value = "gekkeding";
		// console.log("AA", files.test.value)

		return config

	}

})
</script>

<style scoped lang="scss">

</style>
