<template>
  <div>
    <h1>2. Feature Configuration</h1>

    <p class="text-sm">Here you can configure each feature from the dataset.</p>
	<!-- <span class="my-10 block">SPACING</span> -->
    <hr class="my-4" >

    <table class="styled-table">
        <thead>
            <tr>
                <th><input class="w-5 h-5 cursor-pointer" type="checkbox" @input="check_enabled_changed" :checked="check_enabled_all" /></th>
                <th>Index</th>
                <th>Feature</th>
                <th>First value</th>
                <th>Measurability</th>
                <th>Is dependant (Y)</th>
                <!-- <th>Independant</th> -->
            </tr>
        </thead>
        <tbody>
            <tr v-if="config.features == null">
                <td colspan="4">Loading...</td>
            </tr>
            <tr v-else-if="config.features.length == 0">
                <td colspan="4">No features available in dataset [refetch]...</td>
            </tr>
			<template v-else>
				<tr v-for="feature in config.features" :key="feature" :class="{'tr-dependant': feature.is_dependant}">
					<td><input class="w-5 h-5 cursor-pointer" type="checkbox" v-model="feature.enabled" checked /></td>
					<td class="td-index">{{ feature.index }}</td>
					<td><input class="border border-gray-200 px-2 py-1" type="text" v-model="feature.name" :disabled="!feature.enabled" /></td>
					<td><input class="bg-gray-100 cursor-not-allowed border border-gray-200 px-2 py-1 w-20" readonly type="text" :value="data_first_values[feature.index]" /></td>
					<td>
						<select class="border border-gray-200 px-2 py-1 cursor-pointer" v-model="feature.measurability" :disabled="!feature.enabled">
							<option v-for="(option, option_key) in FeatureMeasurability" :key="option_key" :value="option">
								{{ option_key }}
							</option>
						</select>
						<!-- <input class="border border-gray-200 px-2 py-1" type="text" v-model="feature.measurability"  /> -->
					</td>
					<td><input class="w-5 h-5 cursor-pointer" type="checkbox" v-model="feature.is_dependant" :disabled="!feature.enabled" /></td>
				</tr>
			</template>
        </tbody>
    </table>

    <div class="flex justify-between my-8">
        <button @click="$router.push({ name: 'load' });" class="router-btn">
            &#xff1c; 1. Load
        </button>
        <div class="w-0 h-0 invisible"></div>
        <button @click="$router.push({ name: 'method' });" :disabled="config.features.every(x => x.enabled == false)" class="router-btn">
            3. Method &#xff1e;
        </button>
    </div>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import useConfig from '@/composables/useConfig'

import { Feature, FeatureMeasurability } from '@/composables/useConfig/features'

export default defineComponent({

	setup() {

		const config = useConfig()
		const data_first_values = config.dataset.data_first_rows[config.dataset.context.first_row_is_header ? 1 : 0];

		if (config.features === null)
		{
			// data_header_names is first row if first_row_is_header, else it is null.
			// data_first_values is second row if first_row_is_header, else first row.
			let data_header_names = config.dataset.context.first_row_is_header ? config.dataset.data_first_rows[0] : null;

			if (data_header_names == null)
			{
				data_header_names = []
				for (let i = 0; i < data_first_values.length; i++)
				{
					data_header_names.push(`Feature ${i+1}`)
				}
			}
			
			// for (const [feature_i, feature_name] of data_header_names.entries()) {
			// 	const feature: Feature = {
			// 		index: feature_i,
			// 		name: feature_name,
			// 	}
			// 	config.features.push(feature)
			// }
			data_header_names.forEach((feature_name, feature_i) => {
				if (config.features == null) config.features = []

				const feature: Feature = {
					enabled: true,
					index: feature_i,
					name: feature_name,
					is_dependant: feature_i == 0,
					measurability: FeatureMeasurability.Continuous,
				}
				config.features.push(feature)
			})
		}

		// if (config.features !== null)
		// {
		// 	config.features
		// }

/*
		const check_enabled_all = computed(() => {
			// console.log("_all", config.features?.every(x => x.enabled))
			return config.features?.every(x => x.enabled) ?? false
		})
*/
		return {
			config,
			FeatureMeasurability,
			data_first_values,

			console: computed(() => console),

			check_enabled_changed: (e: Event) => {
				const target = <HTMLInputElement>e.target;
				
				config.features?.every(x => {
					// console.log("every ", target.checked, x);
					x.enabled = target.checked
					return true;
				})

			},

			check_enabled_all: computed(() => {
				// console.log("_all", config.features?.every(x => x.enabled))
				return config.features?.every(x => x.enabled) ?? false
			}),

		}

	}
	
});
</script>

<style scoped lang="scss">

table {
	tr.tr-dependant  {
		// @apply bg-gradient-to-r from-gray-200 to-gray-400
	}
}

input {
	&[disabled] {
		@apply bg-gray-100 cursor-default;
	}
}
select {
	&[disabled] {
		@apply bg-gray-100 cursor-default;
	}
}
</style>
