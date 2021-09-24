<template>
  <div>
    <h1>1. Load</h1>

    <p class="text-sm">Please select the dataset which you wish to use for training the model. You can also select a previously trained model. Your options are:</p>
    <ul class="text-sm mt-1 list-disc list-inside leading-6">
        <li>Train new model based on dataset: only requires selecting a <span class="underline">dataset</span>.</li>
        <li>Make predictions on model: only requires selecting a <span class="underline">model</span>.</li>
        <li>Continue training model on (new) dataset: requires selecting a <span class="underline">dataset</span> and <span class="underline">model</span>.</li>
    </ul>

    <hr class="my-4" />

    <div class="flex flex-col md:flex-row md:space-x-4">

        <!-- drag n drop  https://codepen.io/stenvdb/pen/wvBoYQO -->
        <div class="md:w-1/2 mt-4">
            <h2 class="text-xl mb-1">Dataset</h2>
            <input ref="file_dataset" id="file_dataset" class="hidden" type="file" @change="file_changed_dataset($event)">
            <div class="bg-gray-50 border border-gray-300 text-center py-6">
                <label for="file_dataset" class="w-full cursor-pointer">
                    Click <span class="underline">here</span> to select the dataset
                </label>
                <div class="w-full" v-if="config.files.dataset?.value != null">
                    <span class="align-middle text-sm text-blue-700">{{ config.files.dataset.value?.name }}</span>
                    <span class="align-middle ml-2 text-gray-600 cursor-pointer text-xl leading-0" @click="file_clear_dataset()">&times;</span>
                </div>
                <!-- <span class="text-sm text-gray-500" >{{ file_dataset_status }}</span> -->
            </div>
        </div>
        <div class="md:w-1/2 mt-4">
            <h2 class="text-xl mb-1">Model</h2>
            <input ref="file_model" id="file_model" class="hidden" type="file" @change="file_changed_model($event)">
            <div class="bg-gray-50 border border-gray-300 text-center py-6">
                <label for="file_model" class="w-full cursor-pointer">
                    Click <span class="underline">here</span> to select the model
                </label>
                <div class="w-full" v-if="config.files.model?.value != null">
                    <span class="align-middle text-sm text-blue-700">{{ config.files.model.value.name }}</span>
                    <span class="align-middle ml-2 text-gray-600 cursor-pointer text-xl leading-0" @click="file_clear_model()">&times;</span>
                </div>
                <!-- <span class="text-sm text-gray-500" >{{ file_model_status }}</span> -->
            </div>
        </div>
    </div>

<!-- 
	<button @click="dologthings(config.files.dataset)" :disabled="page_next_disabled" class="router-btn mt-2">
            Do something
    </button> -->

    <div class="flex flex-col md:flex-row items-start justify-between mt-8">
        <button @click="$router.push({ name: 'home' });" class="router-btn mb-2 md:mb-0">
            &#xff1c; Home
        </button>
        <div class="w-0 h-0 invisible"></div>
		<div class="flex flex-col space-y-2 md:items-end">
			<button v-if="config.files.model?.value === null && config.files.dataset?.value === null" disabled="true" class="router-btn">
				Load dataset or model
			</button>
			<button v-if="config.files.dataset?.value !== null" @click="parse_dataset() && $router.push({ name: 'method' });" class="router-btn">
				2. Create new model using <u>dataset</u>
			</button>
			<button v-if="config.files.model?.value !== null" @click="parse_model() && $router.push({ name: 'predict' });" class="router-btn">
				6. Make predictions on <u>model</u>
			</button>
			<button
				v-if="config.files.model?.value !== null && config.files.dataset?.value !== null" 
				@click="parse_dataset() && parse_model() && $router.push({ name: 'clean' });" 
				class="router-btn"
			>
				4. Clean to continue training <u>model</u> using <u>dataset</u>
			</button>
		</div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed } from 'vue';

import { useToast } from "vue-toastification";
import useConfig from '@/composables/useConfig';

import Papa from 'papaparse';

export default defineComponent({

	setup() {

		const config = useConfig()
		const toast = useToast()
		const x = false;
		if (x)
		{
			toast("a")
		}

		const html_file_dataset = ref(null) as Ref<HTMLInputElement | null>
		const html_file_model = ref(null) as Ref<HTMLInputElement | null>

		const get_file_from_event = (e: Event): File | null => {

			const target = <HTMLInputElement>e.target

			if (target == null || target.files == null) {
				return null;
			}

			if (target.files.length !== 1)
			{
				alert('now null?')
				return null; // invalid amount of files (or input removed?)
			}

			const file = target.files[0];
			return file;

		}

		const file_changed_dataset = (e: Event) => {
			config.files.dataset.value = get_file_from_event(e);
		}
        const file_changed_model = (e: Event) => {
            config.files.model.value = get_file_from_event(e);
        }

		const file_clear_dataset = () => {
			if(html_file_dataset.value != null)
				html_file_dataset.value.value = "";
			config.files.dataset.value = null;
		}
		const file_clear_model = () => {
			if(html_file_model.value != null)
				html_file_model.value.value = "";
			config.files.model.value = null;
		}

		const parse_dataset_progress = ref(null) as Ref<number | null>
		const parse_dataset = async () => {
			parse_dataset_progress.value = 0;
			if (config.files.dataset.value !== null)
			{
				await Papa.parse(config.files.dataset.value, {
					error: (err, file) => {
						// this.file_dataset_status = "error event";
						console.log("ERROR:", err, file);
					},
					complete: (results) => {
						// this.file_dataset_status = "complete event";
						console.log("PARSED.", results);
						console.log(results.data[0]);
						parse_dataset_progress.value = 100
					}
				});
			}
			return false;
		}
		const parse_model_progress = ref(null) as Ref<number | null>
		const parse_model = () => {
			return false;
		}

		const page_next_disabled = computed( () => false )
	
		return {

			config,

			file_changed_dataset,
			file_changed_model,

			file_clear_dataset,
			file_clear_model,

			parse_dataset_progress,
			parse_dataset,
			parse_model_progress,
			parse_model,

			page_next_disabled,
			
		}
	
	},

});
</script>

<style scoped lang="scss">
</style>
