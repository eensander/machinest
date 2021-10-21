<template>
  <div>
    <h1>6. Evaluate</h1>

    <p class="text-sm my-1">This page allows you to evaluate the trained model by rendering its results and predicting values of dependant features by providing values of independant features</p>

    <hr class="my-2" />

	<h3 class="mt-4 mb-2">Make predictions</h3>

    <div class="mt-2 border border-gray-200 rounded-md p-4 flex flex-col md:flex-row md:space-x-2">
		
		<div class="flex-none w-1/2 flex flex-col items-end">
			<table class="styled-table border border-gray-300">
				<tbody class="border-t border-gray-300">
					<tr class="border-b border-gray-300"><th style="background: #eaeaec; border:0" colspan="2">Independant (X)</th></tr>
					<tr v-for="feature in config.features.filter(x => x.enabled && !x.is_dependant)" :key="feature">
						<th class="w-28 text-right border-r" style="font-weight: 400; white-space: pre-wrap">{{ feature.name }}</th>
						<td style="padding: 0.75rem"><input v-model="predict_x[feature.index]" type="text" class="" /></td>
					</tr>
				</tbody>
			</table>
			<button @click="trainer.user_predict(predict_x, predict_y)" class="btn btn-blue mt-2">
				Predict
			</button>
		</div>
		
		<div class="flex-none w-1/2">

			<table class="styled-table border border-gray-300">
				<tbody class="border-t border-gray-300">
						<tr class="border-b border-gray-300"><th style="background: #eaeaec; border:0" colspan="2">Dependant (Y)</th></tr>
						<tr v-for="feature in config.features.filter(x => x.enabled && x.is_dependant)" :key="feature">
							<th class="w-28 text-right border-r" style="font-weight: 400; white-space: pre-wrap">{{ feature.name }}</th>
							<td style="padding: 0.75rem"><input :value="predict_y[feature.index]" type="text" readonly class="font-mono bg-gray-100 cursor-not-allowed" /></td>
						</tr>
				</tbody>
			</table>

		</div>
	</div>
	
	<h3 class="mt-4 mb-2">Results</h3>


	<div class="" v-if="Object.keys(trainer.results).length > 0">
		<table class="styled-table border border-gray-300">
			<thead class="hidden">
				<tr class="border-b-8 border-gray-300">
					<th style="background: #eaeaec; font-weight: 500">Result</th>
					<th style="background: #eaeaec;">Value</th>
				</tr>
			</thead>
			<tbody class="border-t border-gray-300">
				<template v-for="(category, category_name) in trainer.getResultsRendered()" :key="category_name">
					<tr class="border-b border-gray-300"><th style="background: #eaeaec; border:0" colspan="2">{{ category_name }}</th></tr>
					<tr v-for="(value, key) in category" :key="key">
						<th class="w-48 text-right border-r" style="font-weight: 400">{{ key }}</th>
						<td v-if="value.props?.innerHTML"><div v-html="value.props.innerHTML"></div></td>
						<td v-else><v-node-renderer :node="value" /></td>
					</tr>
				</template>
			</tbody>
		</table>
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
import { defineComponent, ref } from 'vue';
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

		const predict_x = ref({});
		const predict_y = ref({});
		
		return {
			config,
			trainer,

			predict_x,
			predict_y
		}

	}

});
</script>

<style scoped lang="scss">
table.styled-table {
	tbody {
		th {
			// text-transform: none;
		}
		td {
			input {
				@apply border border-gray-300 px-2 py-1;
				width: 100%;
			}
		}
	}
}
</style>
