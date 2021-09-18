<template>
  <div>
    <h1>Home</h1>

    <p>Welcome to <span class="underline">MACHINEST</span>. Our goal is to enable everone to train Machine Learning models in their browser. </p>

    <div class="flex justify-between mt-8">
        <div class="w-0 h-0 invisible"></div>
        <button @click="$router.push({ name: 'load' });" class="router-btn">
            1. Load &gt;
        </button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useFiles from '../store/files';

// export default defineComponent({
// 	setup() {
// 		alert('a');
// 	}
// });

// /*
export default defineComponent({

	name: "Home",

	setup() { 
		
		const files = useFiles()
		
		console.log(files)

		files.test.value = "gekkeding";

		return files

	}

})
// */
</script>

<style scoped lang="scss">

</style>
