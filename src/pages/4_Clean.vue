<template>
  <div>
    <h1>4. Data Cleaning</h1>

    <p class="text-sm">Here you can configure each feature from the dataset which you supplied</p>

    <hr class="my-4" />

    <table class="styled-table">
        <thead>
            <tr>
                <th>Feature</th>
                <th></th>
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
						<button @click="toast('Scanning feature')" class="router-btn">
							Scan
						</button>
					</td>
				</tr>
			</template>
        </tbody>
    </table>


    <div class="flex justify-between my-8">
        <button @click="$router.push({ name: 'features' });" class="router-btn">
            &#xff1c; 3. Features
        </button>
        <div class="w-0 h-0 invisible"></div>
        <button @click="$router.push({ name: 'train' });" :disabled="page_next_disabled" class="router-btn">
            5. Train Model &#xff1e;
        </button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useConfig from '@/composables/useConfig';
import { useToast } from "vue-toastification";

export default defineComponent({

	setup() {

		const config = useConfig()
		const toast = useToast()

		return {
			config,
			toast
		}

	}

});
</script>

<style scoped lang="scss">
</style>
