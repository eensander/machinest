<template>
  <div>
    <h1>6. Evaluate</h1>

    <p class="text-sm">This page allows you to evaluate the trained model by rendering its results and predicting values of dependant features by providing values of independant features</p>

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
