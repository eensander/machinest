<template>
  <div>
    <h1>4. Data Cleaning and Preprocessing</h1>

    <p class="text-sm">In this section, invalid data can be detected and eliminated. Because detecting invalid data requires scanning the dataset, please choose the features on which you would like the cleaning to be performed.</p>

    <hr class="my-4" />

    <table class="styled-table">
        <thead>
            <tr>
                <th>Feature</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="enabled_features == null">
                <td colspan="4">Loading...</td>
            </tr>
            <tr v-else-if="enabled_features.length == 0">
                <td colspan="4">No features available in dataset [refetch]...</td>
            </tr>
			<template v-else>
				<tr v-for="feature in enabled_features" :key="feature">
					<td>{{ feature.name }}</td>
					<td>
						<button @click="toast('Scanning feature (hypothetically)')" class="router-btn">Scan</button>
					</td>
				</tr>
			</template>
        </tbody>
    </table>


    <div class="flex justify-between my-8">
        <button @click="$router.push({ name: 'method' });" class="router-btn">
            &#xff1c; 3. Method
        </button>
        <div class="w-0 h-0 invisible"></div>
        <button @click="$router.push({ name: 'train' });" :disabled="false" class="router-btn">
            5. Train Model &#xff1e;
        </button>
    </div>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import useConfig from '@/composables/useConfig';
import { useToast } from "vue-toastification";
import features, { Feature, FeatureMeasurability } from '@/composables/useConfig/features';

export default defineComponent({

	setup() {

		const config = useConfig()
		const toast = useToast()

		const enabled_features= computed(() => config.features?.filter(x => x.enabled));

		return {
			config,
			toast, 

			enabled_features
		}

	}

});
</script>

<style scoped lang="scss">
</style>
