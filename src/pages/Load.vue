<template>
  <div>
    <h1>1. Load</h1>

    <p class="text-sm">Please select the dataset which you wish to use for training the model. You can also select a previously trained model to either:</p>
    <ol class="text-sm mt-1 list-decimal list-inside">
        <li>Continue training on (requires selecting a dataset)</li>
        <li>Make predictions on</li>
    </ol>

    <hr class="mt-1" />

    <div class="mt-4">
        <h2 class="text-xl mb-1">Dataset</h2>
        <input id="file_dataset" class="hidden" type="file" @change="file_changed($event)">
        <div class="bg-gray-50 border border-gray-300 text-center py-6">
            <label for="file_dataset" class="cursor-pointer">
                Click <span class="underline">here</span> to upload the dataset
            </label>
            <br />
            <span class="bg-red-400">{{ filename }}</span>
            <span class="bg-red-400">{{ progress }}</span>
        </div>
    </div>

    <div class="flex justify-between mt-8">
        <!-- <router-link :to="{ name: 'home' }" class="router-btn">
            &#xff1c; Home
        </router-link> -->
        <button @click="$router.push({ name: 'home' });" class="router-btn">
            &#xff1c; Home
        </button>
        <div class="w-0 h-0 invisible"></div>
        <!-- <router-link :to="{ name: 'load' }" :disabled="page_next_disabled" class="router-btn ">
            2. Feature Selection &#xff1e;
        </router-link> -->
        <button @click="$router.push({ name: 'home' });" :disabled="page_next_disabled" class="router-btn">
            2. Feature Selection &#xff1e;
        </button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Papa from 'papaparse';

export default defineComponent({

	data: () => ({
        filename: null,
        progress: "idle",

        page_next_disabled: true
	}),

    methods: {

        file_changed(e: Event) {

            const target = <HTMLInputElement>e.target;

            if (target == null || target.files == null) {
                return;
            }

            if (target.files.length !== 1)
            {
                return; // invalid amount of files (or input removed?)
            }

            console.log(e)
            // this.filename = event.target.files[0].name;
            const file = target.files[0];



            Papa.parse(file, {
				error: (err, file) => {
					this.progress = "error event";
					console.log("ERROR:", err, file);
				},
				complete: (results) => {
                    this.progress = "complete event";
                    console.log(results)
				}
            });


            // https://www.papaparse.com/
        }
    }

});
</script>

<style scoped lang="scss">
</style>
