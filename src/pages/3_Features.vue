<template>
  <div>
    <h1>3. Feature Configuration</h1>

    <p class="text-sm">Here you can configure each feature from the dataset which you supplied</p>

    <hr class="my-4" >

    <table class="styled-table">
        <thead>
            <tr>
                <th>Feature</th>
                <th>Measurability</th>
                <th>Is dependant </th>
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
				<tr v-for="feature in config.features" :key="feature">
					<td>{{ feature.name }}</td>
					<td>
						<select class="border border-gray-200 px-2 py-1 cursor-pointer" v-model="feature.measurability">
							<option v-for="(option, option_key) in FeatureMeasurability" :key="option_key" :value="option">
								{{ option_key }}
							</option>
						</select>
						<!-- <input class="border border-gray-200 px-2 py-1" type="text" v-model="feature.measurability"  /> -->
					</td>
					<td><input class="w-5 h-5 cursor-pointer" type="checkbox" v-model="feature.is_dependant" /></td>
				</tr>
			</template>
        </tbody>
    </table>

    <div class="flex justify-between my-8">
        <button @click="$router.push({ name: 'method' });" class="router-btn">
            &#xff1c; 2. Method
        </button>
        <div class="w-0 h-0 invisible"></div>
        <button @click="$router.push({ name: 'clean' });" :disabled="false" class="router-btn">
            4. Clean Data &#xff1e;
        </button>
    </div>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import useConfig from '@/composables/useConfig'

import { FeatureMeasurability } from '@/composables/useConfig/features'

export default defineComponent({

	setup() {

		const config = useConfig()

		// if (config.features !== null)
		// {
		// 	config.features
		// }

		return {
			config,
			FeatureMeasurability,

			console: computed(() => console),
		}

	}
	
});
</script>

<style scoped lang="scss">
</style>
