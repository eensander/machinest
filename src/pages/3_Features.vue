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
            <tr v-if="config.features.value == null">
                <td colspan="4">Loading...</td>
            </tr>
            <tr v-else-if="config.features.value.length == 0">
                <td colspan="4">No features available in dataset [refetch]...</td>
            </tr>
			<template v-else>
				<tr v-for="feature in config.features.value" :key="feature">
					<td>{{ feature.name }}</td>
					<td>
						<!-- <select>
							<option v-for="MesK in FeatureMeasurability" :key="MesK" :value="MesK">
								{{ MesK }}
							</option>
						</select> -->
						<input class="border border-gray-200 px-2 py-1" type="text" v-bind:value="feature.measurability" />
					</td>
					<td><input class="w-5 h-5 cursor-pointer" type="checkbox" v-bind:checked="feature.is_dependant" /></td>
				</tr>
			</template>
        </tbody>
    </table>

    <div class="flex justify-between mt-8">
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
import { defineComponent } from 'vue';
import useConfig from '@/composables/useConfig'

// import { FeatureMeasurability } from '@/composables/useConfig/features'

export default defineComponent({

	setup() {

		const config = useConfig()

		// if (config.features !== null)
		// {
		// 	config.features
		// }
		
		return {
			config,
			// FeatureMeasurability
		}

	}
	
});
</script>

<style scoped lang="scss">
</style>
