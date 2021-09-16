<template>
  <div>
    <h1>3. Training Method</h1>

    <p class="text-sm">Please select the dataset which you wish to use for training the model. You can also select a previously trained model. Your options are:</p>
    <ul class="text-sm mt-1 list-disc list-inside leading-6">
        <li>Train new model based on dataset: only requires selecting a <span class="underline">dataset</span>.</li>
        <li>Continue training model on (new) dataset: requires selecting a <span class="underline">dataset</span> and <span class="underline">model</span>.</li>
        <li>Make predictions on model: only requires selecting a <span class="underline">model</span>.</li>
    </ul>

    <hr class="mt-1" />

    <div class="flex justify-between mt-8">
        <button @click="$router.push({ name: 'home' });" class="router-btn">
            &#xff1c; 2. Feature Configuration
        </button>
        <div class="w-0 h-0 invisible"></div>
        <button @click="$router.push({ name: 'home' });" :disabled="page_next_disabled" class="router-btn">
            4. Data Cleaning &#xff1e;
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
