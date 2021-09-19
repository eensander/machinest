<template>
  <div>
    <h1>2. Training Method</h1>

    <p class="text-sm">Please select the which you would like to use.</p>
    <hr class="mt-1 mb-4" />

	<span>{{ files.dataset.value.name }}</span>

	<button @click="dataset_parse">Parse!</button>
	<textarea :value="parsed_status"></textarea>

	<hr class="my-4">

    <div class="grid grid-cols-3 gap-4">
        <div
            v-for="method_category in method_library"
            :key="method_category"
            class="method-category-block"
            :class="{'selected': selected.method_category == method_category}"
            @click="selected.method_category = method_category">
            <span class="self-center">{{ method_category.name }}</span>
        </div>
    </div>

    <hr class="my-4" />

    <div class="grid grid-cols-3 gap-4" v-if="selected.method_category != null ">
        <div
            v-for="method in selected.method_category.methods"
            :key="method"
            class="method-block"
            :class="{'selected': selected.method == method}"
            @click="selected.method = method">
            <span class="self-center">{{ method.name }}</span>
        </div>
    </div>

    <div class="flex justify-between mt-8">
        <button @click="$router.push({ name: 'load' });" class="router-btn">
            &#xff1c; 1. Load
        </button>
        <div class="w-0 h-0 invisible"></div>
        <button @click="$router.push({ name: 'features' });" :disabled="page_next_disabled" class="router-btn">
            3. Feature Configuration &#xff1e;
        </button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import useFiles from '@/modules/files'
import { default as useTrainingMethods, training_method_category, training_method } from '@/modules/trainingMethods'

import Papa from 'papaparse';

export default defineComponent({

	setup() {

		const router = useRouter();

		const files = useFiles()
		const training_methods = useTrainingMethods()

		if (files.dataset.value == null)
		{
			alert("no dataset/redirecting")
			router.push({name: 'home'})
		}

		const selected = {
			method_category: null as training_method_category | null,
			method: null as training_method | null,
		}

		const page_next_disabled = computed( () => files.dataset == null && files.model == null )
		// const page_next_disabled = ref( false )

		const parsed_status = ref<string>()

		const dataset_parse = () => {
			console.log("")
			if (files.dataset.value == null)
			{
				console.log("DATASET IS NULL");
			}
			else
			{	
				console.log("PARSING...")
				Papa.parse(files.dataset.value, {
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
			
			files,
			training_methods,

			selected,

			page_next_disabled,

			parsed_status,
			dataset_parse,
		}

	},

/*
    created() {
        console.log(this.method_library)
        // this.selected_method_category = this.method_library[0];
    },
*/

});
</script>

<style scoped lang="scss">

.method-category-block {
    @apply bg-gray-200 border border-gray-300 h-16 flex justify-center cursor-pointer text-gray-800;

    &.selected {
        @apply bg-blue-200 border-blue-300 text-blue-900;
    }
}

.method-block {
    @apply bg-gray-200 border border-gray-300 h-16 flex justify-center cursor-pointer text-gray-800;

    &.selected {
        @apply bg-blue-200 border-blue-300 text-blue-900;
    }
}

</style>
