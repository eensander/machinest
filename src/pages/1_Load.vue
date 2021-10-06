<template>
  <div>
    <h1>1. Load</h1>

    <p class="mb-4">You can download a test-dataset by clicking <a class="text-blue-800 hover:underline" href="/test-datasets/indian_liver_patient.csv">here.</a></p>
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
            <div class="bg-gray-50 border border-gray-300 text-center p-6">
                <label for="file_dataset" class="w-full cursor-pointer">
                    Click <span class="underline">here</span> to select the dataset
                </label>
				
				<div v-if="parse_dataset_progress != null" class="my-3 rounded h-3 w-4/5 mx-auto bg-gray-200 overflow-hidden text-xs text-center text-gray-100">
					<div :style="`width: ${parse_dataset_progress}%`" class="rounded h-full bg-blue-400 border-blue-500 border-b-2"></div>
				</div>

                <div v-if="config.dataset.file != null" class="w-full" >
                    <span class="align-middle text-sm text-blue-700">{{ config.dataset.file.name }}</span>
                    <span class="align-middle ml-2 text-gray-600 cursor-pointer text-xl leading-0" @click="file_clear_dataset()">&times;</span>
                </div>
                <!-- <span class="text-sm text-gray-500" >{{ file_dataset_status }}</span> -->
            </div>
			<div>
				<label class="mt-6 block cursor-pointer text-gray-900"><input type="checkbox" v-model="config.dataset.read_as_stream" class="mr-1 cursor-pointer" /> Large dataset (read file in stream)</label>
				<span v-if="config.dataset.file != null && config.dataset.file.size > dataset_stream_recommendation_bytes" class="mt-1 text-sm text-red-800 opacity-80">
					Since this dataset is larger than {{dataset_stream_recommendation_bytes/(1000*1000)}} MB (dataset: {{ config.dataset.file?.size/(1000*1000) }} MB), we recommend reading the file as a stream by checking this checkbox.
				</span>
				
				<label class="mt-3 block cursor-pointer text-gray-900"><input type="checkbox" v-model="config.dataset.context.first_row_is_header" class="mr-1 cursor-pointer" /> First row is header</label>
			</div>
        </div>

        <div class="md:w-1/2 my-4">
            <h2 class="text-xl mb-1">Model</h2>
            <input ref="file_model" id="file_model" class="hidden" type="file" @change="file_changed_model($event)">
            <div class="bg-gray-50 border border-gray-300 text-center py-6">
                <label for="file_model" class="w-full cursor-pointer">
                    Click <span class="underline">here</span> to select the model
                </label>
                <div class="w-full" v-if="config.model.file != null">
                    <span class="align-middle text-sm text-blue-700">{{ config.model.file.name }}</span>
                    <span class="align-middle ml-2 text-gray-600 cursor-pointer text-xl leading-0" @click="file_clear_model()">&times;</span>
                </div>
                <!-- <span class="text-sm text-gray-500" >{{ file_model_status }}</span> -->
            </div>
        </div>
    </div>

<!-- 
	<button @click="dologthings(config.dataset.file)" :disabled="page_next_disabled" class="router-btn mt-2">
            Do something
    </button> -->

    <div class="flex flex-col md:flex-row items-start justify-between mt-8">
        <button @click="$router.push({ name: 'home' });" class="router-btn mb-2 md:mb-0">
            &#xff1c; Home
        </button>
        <div class="w-0 h-0 invisible"></div>
		<div class="flex flex-col space-y-2 md:items-end">
			<button v-if="config.model.file === null && config.dataset.file === null" disabled="true" class="router-btn">
				Load dataset or model
			</button>
			<button v-if="config.dataset.file !== null" @click="parse_dataset(() => $router.push({ name: 'features' }));" class="router-btn">
				2. Create new model using <u>dataset</u>
			</button>
			<button v-if="config.model.file !== null" @click="parse_model() && $router.push({ name: 'predict' });" class="router-btn">
				6. Make predictions on <u>model</u>
			</button>
			<button
				v-if="config.model.file !== null && config.dataset.file !== null" 
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
import { default as dataset_default } from '@/composables/useConfig/dataset'
// import { parse_dataset } from '@/composables/useConfig/dataset'

import Papa from 'papaparse';

export default defineComponent({

	setup() {

		const config = useConfig()
		const toast = useToast()

		const html_file_dataset = ref(null) as Ref<HTMLInputElement | null>
		const html_file_model = ref(null) as Ref<HTMLInputElement | null>

		const get_file_from_event = (e: Event): File | null => {

			const target = <HTMLInputElement>e.target

			if (target == null || target.files == null || target.files.length !== 1) { // last condition limits 1 upload per
				return null;
			}

			const file = target.files[0];
			return file;

		}

		const file_changed_dataset = (e: Event) => {
			config.dataset.file = get_file_from_event(e);
		}
        const file_changed_model = (e: Event) => {
            config.model.file = get_file_from_event(e);
        }

		const file_clear_dataset = () => {
			if(html_file_dataset.value != null)
				html_file_dataset.value.value = "";
			config.dataset.file = null;
			config.dataset = dataset_default;
			parse_dataset_progress.value = null
		}
		const file_clear_model = () => {
			if(html_file_model.value != null)
				html_file_model.value.value = "";
			config.model.file = null;
			parse_model_progress.value = null
		}

		const parse_dataset_progress = ref(null) as Ref<number | null>
		const parse_dataset = (then: () => void) => {
			if (config.dataset.file !== null)
			{
				if (parse_dataset_progress.value == 100)
				{
					then()
					return
				}
				
				parse_dataset_progress.value = 0;

				let dataset_file_size = config.dataset.file.size;
				let all_errors: Papa.ParseError[][] = [];
				let all_data: string[][] = [];
				// let first_rows: string[][] = [];

				Papa.parse(config.dataset.file, {
					step: function(results) {
						parse_dataset_progress.value = (results.meta.cursor / dataset_file_size) * 100
						
						config.dataset.amount_rows += 1;

						if (results.errors.length > 0)
						{
							all_errors.push(results.errors)
						}

						if (config.dataset.amount_rows < 4)
						{
							config.dataset.data_first_rows.push(results.data as string[])
							// console.log("steprow", results.data as string[])
						}

						if (!config.dataset.read_as_stream)
							all_data.push(results.data as string[]) 
						// console.log(`Progress: ${parse_dataset_progress.value}%`)
					},
					error: (err, file) => {
						// console.log("ERROR:", err, file);
						// parse_dataset_progress.value;
						toast(`Failed parasing input dataset ${file?.name}`)
						toast(`Error: ${err.message}`)
						parse_dataset_progress.value = null
						return;
					},
					complete: (results) => {
						// console.log(results)
						// if (!config.dataset.read_as_stream && results.data.length > 0)
						// 	config.dataset.data = results.data;
						
						parse_dataset_progress.value = 100
						if (results.errors.length > 0)
						{
							toast(`Dataset parsed with errors`)
							parse_dataset_progress.value = null
						}
						if (all_errors.length > 0)
						{
							toast(`Dataset parsed, but some rows (${all_errors.length}) contain errors`)
							console.log(all_errors);
							parse_dataset_progress.value = null
						}
						else if (config.dataset.amount_rows < 2)
						{
							toast('Dataset need to have atleast 2 rows.')
							parse_dataset_progress.value = null
						}
						else
						{
							toast.success(`Dataset parsed succesfully`)

							if (!config.dataset.read_as_stream)
							{
								config.dataset.data_parsed_raw = all_data
								// console.log(config.dataset.data_parsed_raw)
							}

							console.log("COMPLETED: ", config.dataset)

							then()
						}

					}
				});


			}
		}
		
		const parse_model_progress = ref(null) as Ref<number | null>
		const parse_model = () => {
			return false;
		}

		const page_next_disabled = computed( () => false )

		const dataset_stream_recommendation_bytes = 20 * 1000; // *1000^1 = kB, *1000^2 = MB, etc...
		

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

			dataset_stream_recommendation_bytes,
			
		}
	
	},

});
</script>

<style scoped lang="scss">
</style>
