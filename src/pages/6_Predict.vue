<template>
  <div>
    <h1>6. Predict</h1>

    <p class="text-sm">This page allows you to predict dependant values by providing independant values</p>

    <hr class="mt-1" />

	<div class="flex flex-row space-x-4">
		<table class="w-1/2 styled-table">
			<thead>
				<tr>
					<th>Feature</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>[Feature-name]</th>
					<td>[Feature-value]</td>
				</tr>
			</tbody>
		</table>
	</div>

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
import useConfig from '@/composables/useConfig';


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
