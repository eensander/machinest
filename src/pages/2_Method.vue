<template>
  <div class="flex flex-col">
    <h1>2. Training Method</h1>

    <p class="text-sm">Please select the which you would like to use.</p>
	
    <hr class="my-4" />
	
<!-- 
	<button @click="dataset_parse">Parse!</button>
	<textarea :value="parsed_status"></textarea>

	<hr class="my-4"> -->

    <div class="grid grid-cols-3 gap-4">
        <div
            v-for="method_category in training_methods.library"
            :key="method_category"
            class="method-category-block"
            :class="{'selected': Object.assign({}, config.training_method_category.value).name == method_category.name }"
            @click="config.training_method_category.value = method_category; config.training_method.value = null;"
		>
            <span class="self-center">{{ method_category.name }}</span>
        </div>
    </div>

    <hr class="my-4" />

    <div class="grid grid-cols-3 gap-4" v-if="config.training_method_category.value != null ">
        <div
            v-for="method in config.training_method_category.value.methods"
            :key="method"
            class="method-block"
            :class="{'selected': Object.assign({}, config.training_method.value).name == method.name }"
            @click="config.training_method.value = method"
		>
            <span class="self-center">{{ method.name }}</span>
        </div>
    </div>

    <div class="flex justify-between mt-8">
        <button @click="$router.push({ name: 'load' });" class="router-btn">
            &#xff1c; 1. Load
        </button>
        <div class="w-0 h-0 invisible"></div>
        <button @click="$router.push({ name: 'features' });" :disabled="config.training_method.value == method" class="router-btn">
            3. Feature Configuration &#xff1e;
        </button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

import { default as useTrainingMethods } from '@/composables/useTrainingMethods'
// import { TrainingMethodCategory, TrainingMethod } from '@/composables/types'

import useConfig from '@/composables/useConfig'
const config = useConfig()

import Papa from 'papaparse';
// import { TrainingMethodCategory } from '@/composables/types';

export default defineComponent({

// 	beforeRouteEnter(to, from, next) {
// const config = useConfig()
// 		if (config.files.dataset == null)
// 		{
// 			next({ name: 'home' })
// 		}
// 		else
// 		{
// 			next()
// 		}
// 	},

	setup() {

		const training_methods = useTrainingMethods()

		const page_next_disabled = computed( () => config.files.dataset == null && config.files.model == null )

		const parsed_status = ref<string>()

		const dataset_parse = () => {
			console.log("")
			if (config.files.dataset.value == null)
			{
				console.log("DATASET IS NULL");
			}
			else
			{	
				console.log("PARSING...")
				Papa.parse(config.files.dataset.value, {
					error: (err, file) => {
						// this.file_dataset_status = "error event";
						console.log("ERROR:", err, file);
					},
					complete: (results) => {
						// this.file_dataset_status = "complete event";
						console.log("PARSED.", results);
						console.log(results.data[0]);
						parsed_status.value = JSON.stringify(results)
					}
				});
			}
		}

		return {
			
			config,
			training_methods,

			page_next_disabled,

			parsed_status,
			dataset_parse,

			dologthings: (what: any): void => {
				console.log(what)
			},
		}

	},

});
</script>

<style scoped lang="scss">

.method-category-block {
    @apply select-none bg-gray-100 border border-gray-300 h-16 flex justify-center cursor-pointer text-gray-800;

    &.selected {
        @apply bg-blue-100 border-blue-400 text-gray-900;
    }
}

.method-block {
    @apply select-none bg-gray-100 border border-gray-300 h-16 flex justify-center cursor-pointer text-gray-800;

    &.selected {
        @apply bg-blue-100 border-blue-400 text-gray-900;
    }
}

</style>
