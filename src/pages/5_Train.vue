<template>
  <div>
    <h1>5. Train Model</h1>

    <p class="text-sm">Here you can configure each feature from the dataset which you supplied</p>

    <hr class="my-4" />

    <div class="mt-8">
		<!-- https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/progressbars -->

		<!-- <div class="mt-1 h-3 w-full bg-purple-300 overflow-hidden text-xs text-center">
			<div class="w-2/4 h-full bg-purple-500 border-purple-600 border-b-2 "></div>
		</div> -->

		<div class="flex flex-row justify-between items-end">
			<span class="text-xl font-medium text-blue-900">40% Completed</span>
			<span class="text-sm font-thin text-gray-700">row 96 of 240</span>
		</div>
		<div class="mt-2 rounded h-3 w-full bg-gray-200 overflow-hidden text-xs text-center text-gray-100">
			<div :style="`width: ${30}%`" class="rounded w-1/3 h-full bg-blue-400 border-blue-500 border-b-2"></div>
		</div>

	</div>

    <div class="flex justify-between mt-16 items-start space-x-4">
		<div class="flex-1">
			<button @click="$router.push({ name: 'clean' });" class="router-btn">
				&#xff1c; 4. Data Cleaning
			</button>
		</div>
		<div class="flex-1 flex flex-col flex-grow-0">
			<button class="btn btn-gray mb-2">
				Pause
			</button>
			<button  class="btn btn-gray">
				Finish
			</button>
		</div>
        <div class="flex-1 w-0 h-0 invisible"></div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useConfig from '@/composables/useConfig';

export default defineComponent({

	setup() {

		const config = useConfig()

		if (config.features === null)
		{
			config.features
		}
		
		return {
			config,
		}

	}

});
</script>

<style scoped lang="scss">
</style>
