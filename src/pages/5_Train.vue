<template>
  <div>
    <h1>5. Train Model</h1>

    <p class="text-sm">Here you can configure each feature from the dataset which you supplied</p>

    <hr class="my-4" />

	<div class="my-4">
		<h3>Validation</h3>
		<span class="text-sm my-3 block">In this section the portion of the dataset that will be used for training can be chosen. The data not used to trianing will be used to more objectively test the performance of the model.</span>
		<vue3-slider
			v-model="train_split_size_percentage"
			color="#1E40AF" track-color="#E0E0E0" :height="8" />
		<span class="w-full text-right w-full text-center block text-gray-700 mt-2">
			<!-- {{ train_split_size_percentage_model }}% -->
			<span class="text-lg mr-2">{{ train_split_size_percentage }}%</span>
			<span class="font-light mr-2">({{ config.validation.train_split_size }} of {{ config.dataset.amount_rows ?? 0 }} rows)</span>
		</span>
	</div>

	<h3>Execute</h3>
    <div class="mt-2 border border-gray-200 rounded-md p-4">
		<!-- https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/progressbars -->

		<!-- <div class="mt-1 h-3 w-full bg-purple-300 overflow-hidden text-xs text-center">
			<div class="w-2/4 h-full bg-purple-500 border-purple-600 border-b-2 "></div>
		</div> -->

		<div class="flex flex-row justify-between items-end">
			<!-- <span class="text-xl font-medium text-blue-900">40% Completed</span> -->
			<span><span class="text-xl font-medium text-blue-900">{{trainer.status.action}}</span><span class="ml-2 text-sm font-thin text-gray-700">[{{trainer.status.state}}]</span></span>
			<!-- <span class="text-sm font-thin text-gray-700">row 96 of 240</span> -->
			<span class="text-sm font-thin text-gray-700">{{trainer.status.sub_action}}</span>
		</div>

		<div v-if="false && trainer.status.progress != null" class="mt-2 rounded h-3 w-full bg-gray-200 overflow-hidden text-xs text-center text-gray-100">
			<div :style="`width: ${trainer.status.progress ?? 0}%`" class="rounded w-1/3 h-full bg-blue-400 border-blue-500 border-b-2"></div>
		</div>

		<span v-if="false && trainer.status.action" class="my-4 block text-gray-700 text-sm">Status: {{ trainer.status.action }}</span>

		<div class="mt-4 w-full flex justify-end">
			<button class="btn btn-green" @click="trainer_start()" :disabled="trainer.status.state != 'waiting'">
				Start
			</button>
			<button class="btn btn-gray ml-2" :disabled="trainer.status.state != 'running'">
				Pause
			</button>
			<button class="btn btn-gray ml-2" @click="trainer_reset()" :disabled="trainer.status.state != 'finished'">
				Reset
			</button>
		</div>
	</div>

    <div class="flex justify-between mt-16 mb-8 items-start space-x-4">
		<div class="flex-1">
			<button @click="$router.push({ name: 'clean' });" class="router-btn">
				&#xff1c; 4. Data Cleaning
			</button>
		</div>
        <div class="w-0 h-0 invisible"></div>
		<div class="flex flex-col space-y-2 md:items-end">
			<button :disabled="!(trainer.status.state == 'finished' && Object.values(trainer.results).some(x => Object.keys(x).length))" class="router-btn">
				Evaluate &#xff1e;
			</button>
		</div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import useConfig from '@/composables/useConfig';

// import useTrainer from '@/composables/useTrainer';
import useTrainer from '@/composables/useTrainer';

import { useToast } from "vue-toastification";
import vue3slider from 'vue3-slider';

export default defineComponent({

	components: {
		"vue3-slider": vue3slider,
	},

	setup() {

		const toast = useToast()
		const config = useConfig()

		
		const { trainer, trainer_reset } = useTrainer();

		// trainer.start()

		const train_split_size_percentage = ref(70)
		config.validation.train_split_size = Math.ceil((train_split_size_percentage.value/100) * config.dataset.amount_rows);
		watch(train_split_size_percentage, (val) => {
			config.validation.train_split_size = Math.ceil((val/100) * config.dataset.amount_rows);

		})
		
		return {
			config,
			// trainer: { status: { progress: null, action: "", subaction: "" } },
			trainer,
			trainer_reset,

			trainer_start: () => {
				try {
					trainer.value.start()
				} catch(e) {
					toast.error((e as Error).message);
					// console.error("JHI", e)
				}
			},

			train_split_size_percentage,
/*
			train_split_size_percentage_model: {
				get() { 
					return 40;
					// return train_split_size_percentage.value;
				},
				set(val: string) {
					const portion: number = parseInt(val)
					console.log("set to ", val, "of", config.dataset.amount_rows)

					config.validation.train_split_size = Math.ceil((portion/100) * config.dataset.amount_rows);

					// train_split_size_percentage.value = portion;
				}
			}
*/
		}

	}

});
</script>

<style lang="scss">
.vue3-slider .handle {
    transform: scale(1.20) !important;
}
.vue3-slider .handle.hover {
    transform: scale(1.65) !important;
}
</style>
