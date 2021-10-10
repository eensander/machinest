<template>
  <div>
    <h1>6. Evaluate</h1>

    <p class="text-sm my-1">This page allows you to evaluate the trained model by rendering its results and predicting values of dependant features by providing values of independant features</p>

    <hr class="my-2" />

	<h3 class="mt-4 mb-2">Results</h3>

	<div class="" v-if="Object.keys(trainer.results).length > 0">
		<table class="w-1/2 styled-table border border-gray-300">
			<thead class="hidden">
				<tr class="border-b-8 border-gray-300">
					<th style="background: #eaeaec; font-weight: 500">Result</th>
					<th style="background: #eaeaec;">Value</th>
				</tr>
			</thead>
			<tbody class="border-t-2 border-gray-300">
				<template v-for="(category, category_name) in trainer.getResultsRendered()" :key="category_name">
					<tr class="border-b border-gray-300"><th class="border-0" style="background: #eaeaec;" colspan="2">{{ category_name }}</th></tr>
					<tr v-for="(value, key) in category" :key="key">
						<th class="w-64 text-right border-r" style="font-weight: 400">{{ key }}</th>
						<td><v-node-renderer :node="value" /></td>
					</tr>
				</template>
			</tbody>
		</table>
	</div>

	<h3 class="mt-4 mb-2">Make predictions</h3>

    <div class="mt-2 border border-gray-200 rounded-md p-4">
		...
	</div>

    <div class="flex justify-between my-8">
        <button @click="$router.push({ name: 'train' });" class="router-btn">
            &#xff1c; 5. Train
        </button>
        <div class="w-0 h-0 invisible"></div>

    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useConfig from '@/composables/useConfig';
import useTrainer from '@/composables/useTrainer';

import VNodeRenderer from '@/components/VNodeRenderer';

export default defineComponent({
	
	components: {
		VNodeRenderer
	},

	setup() {

		const config = useConfig()
		const { trainer } = useTrainer()
		
		return {
			config,
			trainer
		}

	}

});
</script>

<style scoped lang="scss">
</style>
