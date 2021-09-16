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

    <div class="flex flex-row space-x-4">

        <!-- drag n drop  https://codepen.io/stenvdb/pen/wvBoYQO -->
        <div class="flex-grow mt-4">
            <h2 class="text-xl mb-1">Dataset</h2>
            <input ref="file_dataset" id="file_dataset" class="hidden" type="file" @change="file_dataset_changed($event)">
            <div class="bg-gray-50 border border-gray-300 text-center py-6">
                <label for="file_dataset" class="w-full cursor-pointer">
                    Click <span class="underline">here</span> to select the dataset
                </label>
                <div class="w-full" v-if="file_dataset">
                    <span class="align-middle text-sm text-blue-700">{{ file_dataset.name }}</span>
                    <span class="align-middle ml-2 text-gray-600 cursor-pointer text-xl leading-0" @click="file_dataset_clear()">&times;</span>
                </div>
                <!-- <span class="text-sm text-gray-500" >{{ file_dataset_status }}</span> -->
            </div>
        </div>
        <div class="flex-grow mt-4">
            <h2 class="text-xl mb-1">Model</h2>
            <input id="file_model" class="hidden" type="file" @change="file_model_changed($event)">
            <div class="bg-gray-50 border border-gray-300 text-center py-6">
                <label for="file_dataset" class="w-full cursor-pointer">
                    Click <span class="underline">here</span> to select the model
                </label>
                <span class="text-sm text-blue-700" v-if="file_model">{{ file_model.name }}</span>
                <div class="w-full" v-if="file_model" >
                    <span class="align-middle text-sm text-blue-700">{{ file_model.name }}</span>
                    <span class="align-middle ml-2 text-gray-600 cursor-pointer text-xl leading-0" @click="file_model_clear()">&times;</span>
                </div>
                <!-- <span class="text-sm text-gray-500" >{{ file_model_status }}</span> -->
            </div>
        </div>

    </div>

    <div class="flex justify-between mt-8">
        <button @click="$router.push({ name: 'home' });" class="router-btn">
            &#xff1c; Home
        </button>
        <div class="w-0 h-0 invisible"></div>
        <button @click="$router.push({ name: 'method' });" :disabled="page_next_disabled" class="router-btn">
            3. Training Method &#xff1e;
        </button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Papa from 'papaparse';

export default defineComponent({

	data: () => ({
        file_dataset: null as File | null,
        file_model: null,

        file_dataset_status: "waiting",
        file_model_status: "waiting",

	}),

    methods: {

        file_dataset_clear() {
            (<HTMLInputElement>this.$refs.file_dataset).value = "";
            this.file_dataset = null;
        },

        file_dataset_changed(e: Event) {

            const target = <HTMLInputElement>e.target;

            if (target == null || target.files == null) {
                return;
            }

            if (target.files.length !== 1)
            {
                alert('now null?')
                return; // invalid amount of files (or input removed?)
            }

            const file = target.files[0];
            this.file_dataset = file;

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

            // https://www.papaparse.com/
        }
    },

    computed: {
        page_next_disabled() {
            return this.file_dataset == null && this.file_model == null;
        }
    }

});
</script>

<style scoped lang="scss">
</style>
