<template>
  <div>
    <h1>2. Feature Configuration</h1>

    <p class="text-sm">Here you can configure each feature from the dataset which you supplied</p>

    <hr class="mt-1" />

    <div class="flex justify-between mt-8">
        <button @click="$router.push({ name: 'home' });" class="router-btn">
            &#xff1c; 1. Load
        </button>
        <div class="w-0 h-0 invisible"></div>
        <button @click="$router.push({ name: 'home' });" :disabled="page_next_disabled" class="router-btn">
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

	}),

    methods: {

    },

    computed: {
        page_next_disabled() {
            // return this.file_dataset == null && this.file_model == null;
            return false;
        }
    }

});
</script>

<style scoped lang="scss">
</style>
