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
        <button @click="$router.push({ name: 'features' });" :disabled="page_next_disabled" class="router-btn">
            2. Feature Configuration &#xff1e;
        </button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

	data: () => ({

        ml_methods: {
            'supervised': [
                import('../ml_methods/supervised/linear_regression'),
            ]
        }

	}),

    methods: {

    },

    created() {
        console.log(this.ml_methods)
    },

    computed: {
        page_next_disabled(): boolean {
            // return this.file_dataset == null && this.file_model == null;
            return false;
        }
    }

});
</script>

<style scoped lang="scss">
</style>
