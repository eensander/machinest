<template>
  <div>
    <h1>2. Feature Configuration</h1>

    <p class="text-sm">Here you can configure each feature from the dataset which you supplied</p>

    <hr class="my-4" >

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
                <td colspan="4">No features available in dataset [refetch]...</td>
            </tr>
            <tr v-else v-for="feature in features" :key="feature">
                <td>{{ feature.name }}</td>
            </tr>
        </tbody>
    </table>

    <div class="flex justify-between mt-8">
        <button @click="$router.push({ name: 'method' });" class="router-btn">
            &#xff1c; 2. Method
        </button>
        <div class="w-0 h-0 invisible"></div>
        <button @click="$router.push({ name: 'cleaning' });" :disabled="page_next_disabled" class="router-btn">
            4. Clean Data &#xff1e;
        </button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import Papa from 'papaparse';
import useConfig from '@/composables/useConfig'

import { Feature } from '@/composables/types'

export default defineComponent({

	setup() {

		const config = useConfig()

		if (config.features === null)
		{
			config.features
		}
		
		return {
			config,
		}

	}
	
});
</script>

<style scoped lang="scss">
</style>
