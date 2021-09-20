<template>
  <div>
    <h1>2. Feature Configuration</h1>

    <p class="text-sm">Here you can configure each feature from the dataset which you supplied</p>

    <hr class="mt-1" />

    <table class="styled-table">
        <thead>
            <tr>
                <th>Feature</th>
                <th>DataType</th>
                <th>Dependant</th>
                <th>Independant</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="features == null">
                <td colspan="4">Loading...</td>
            </tr>
            <tr v-else-if="features.length == 0">
                <td colspan="4">No features available in dataset...</td>
            </tr>
        </tbody>
    </table>

    <div class="flex justify-between mt-8">
        <button @click="$router.push({ name: 'method' });" class="router-btn">
            &#xff1c; 2. Method
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
// import Papa from 'papaparse';

type Feature = {
    name: string,
    datatype: string,
    dependant: boolean,
}

export default defineComponent({

	data: () => ({
        features: null as Feature[] | null
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
