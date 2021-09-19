<template>
  <div>
    <h1>1. Load</h1>

    <p class="text-sm">Please select the dataset which you wish to use for training the model. You can also select a previously trained model. Your options are:</p>
    <ul class="text-sm mt-1 list-disc list-inside leading-6">
        <li>Train new model based on dataset: only requires selecting a <span class="underline">dataset</span>.</li>
        <li>Continue training model on (new) dataset: requires selecting a <span class="underline">dataset</span> and <span class="underline">model</span>.</li>
        <li>Make predictions on model: only requires selecting a <span class="underline">model</span>.</li>
    </ul>

    <hr class="mt-1" />

    <div class="flex flex-col md:flex-row md:space-x-4">

        <!-- drag n drop  https://codepen.io/stenvdb/pen/wvBoYQO -->
        <div class="md:w-1/2 mt-4">
            <h2 class="text-xl mb-1">Dataset</h2>
            <input ref="file_dataset" id="file_dataset" class="hidden" type="file" @change="file_changed_dataset($event)">
            <div class="bg-gray-50 border border-gray-300 text-center py-6">
                <label for="file_dataset" class="w-full cursor-pointer">
                    Click <span class="underline">here</span> to select the dataset
                </label>
                <div class="w-full" v-if="files.dataset?.value != null">
                    <span class="align-middle text-sm text-blue-700">{{ files.dataset.value.name }}</span>
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
                <div class="w-full" v-if="files.model?.value != null">
                    <span class="align-middle text-sm text-blue-700">{{ files.model.value.name }}</span>
                    <span class="align-middle ml-2 text-gray-600 cursor-pointer text-xl leading-0" @click="file_clear_model()">&times;</span>
                </div>
                <!-- <span class="text-sm text-gray-500" >{{ file_model_status }}</span> -->
            </div>
        </div>

    </div>

	<button @click="dologthings(files.dataset)" :disabled="page_next_disabled" class="router-btn mt-2">
            Do something
        </button>

    <div class="flex justify-between mt-8">
        <button @click="$router.push({ name: 'home' });" class="router-btn">
            &#xff1c; Home
        </button>
        <div class="w-0 h-0 invisible"></div>
        <button @click="$router.push({ name: 'method' });" :disabled="page_next_disabled" class="router-btn">
            2. Training Method &#xff1e;
        </button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed } from 'vue';
// import Papa from 'papaparse';

import useFiles from '@/modules/files';
//import { Options, Vue,setup  } from 'vue-class-component';

export default defineComponent({

	setup() {

		const files = useFiles();
		// const { dataset, model } = useFiles();

		const html_file_dataset = ref(null) as Ref<HTMLInputElement | null>
		const html_file_model = ref(null) as Ref<HTMLInputElement | null>

		const get_file_from_event = (e: Event): File | null => {

			const target = <HTMLInputElement>e.target;

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
			files.dataset.value = get_file_from_event(e);
			// console.log("set dataset to: ");
			// console.log(files.dataset, files.dataset.value)
		}
        const file_changed_model = (e: Event) => {
            files.model.value = get_file_from_event(e);
        }

		const file_clear_dataset = () => {
			if(html_file_dataset.value != null)
				html_file_dataset.value.value = "";
			files.dataset.value = null;
		}

		const file_clear_model = () => {
			if(html_file_model.value != null)
				html_file_model.value.value = "";
			files.model.value = null;
		}

		const page_next_disabled = computed( () => false )


		const dologthings = (what: any): void => {
			console.log(what)
		}
	
		return {

			files,

			file_changed_dataset,
			file_changed_model,

			file_clear_dataset,
			file_clear_model,

			page_next_disabled,

			dologthings,

		}
	
	},

/*
	data: () => ({
        file_dataset: null as File | null,
        file_model: null as File | null,

        file_dataset_status: "waiting",
        file_model_status: "waiting",
	}),
*./
    methods: {

        file_clear_dataset() {
            (<HTMLInputElement>this.$refs.file_dataset).value = "";
            this.file_dataset = null;
        },
        file_clear_model() {
            (<HTMLInputElement>this.$refs.file_model).value = "";
            this.file_model = null;
        },

        file_changed_dataset(e: Event) {
            this.file_dataset = this.get_file_from_event(e);
			
/*
            Papa.parse(file, {
				error: (err, file) => {
					this.file_dataset_status = "error event";
					console.log("ERROR:", err, file);
				},
				complete: (results) => {
                    this.file_dataset_status = "complete event";
                    console.log(results)
				}
            });
*./
            // https://www.papaparse.com/

        },

        file_changed_model(e: Event) {
            this.file_model = this.get_file_from_event(e);
        },

        get_file_from_event(e: Event): File | null {

            const target = <HTMLInputElement>e.target;

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
    },
*/

/*
    computed: {
        page_next_disabled() {
            return this.file_dataset == null && this.file_model == null;
        }
    }
*/
});
</script>

<style scoped lang="scss">
</style>
