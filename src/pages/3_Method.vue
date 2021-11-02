<template>
  <div class="flex flex-col">
    <h1>3. Method</h1>

    <p class="text-sm">Please select the which model trainer you would like to use.</p>
	
    <hr class="my-4" />

	<span class="text-xl mb-3 font-light text-gray-600 text-left">Model trainer categories</span>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
            v-for="trainer_category in model_trainers"
            :key="trainer_category"
            class="method-category-block"
            :class="{'selected': config.model_trainer_category?.name == trainer_category.name }"
            @click="config.model_trainer_category = trainer_category; config.model_trainer = null;"
		>
            <span class="self-center">{{ trainer_category.name }}</span>
        </div>
    </div>

    <hr class="my-4" />

	<span v-if="config.model_trainer_category != null" class="text-xl mb-3 font-light text-gray-600 text-left">Model trainers</span>
    <span class="text-center text-gray-600 font-light" v-if="config.model_trainer_category != null && config.model_trainer_category.trainers.length == 0">
		This category contains no model trainers
	</span>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4" v-if="config.model_trainer_category != null && config.model_trainer_category.trainers.length > 0">
		<div
			v-for="trainer in config.model_trainer_category.trainers"
			:key="trainer"
			class="method-block"
			:class="{'selected': config.model_trainer?.title == trainer.title }"
			@click="config.model_trainer = trainer"
		>
			<span class="self-center">{{ trainer.title }}</span>
		</div>
    </div>

    <div class="flex justify-between my-8">
        <button @click="$router.push({ name: 'features' });" class="router-btn">
            &#xff1c; 2. Feature Configuration
        </button>
        <div class="w-0 h-0 invisible"></div>
        <button @click="$router.push({ name: 'clean' });" :disabled="config.model_trainer == null" class="router-btn">
            4. Clean Data &#xff1e;
        </button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

import model_trainers from "@/model_trainers";

import useConfig from '@/composables/useConfig'
const config = useConfig()

export default defineComponent({

	setup() {

		const page_next_disabled = computed( () => config.dataset.file == null && config.model.file == null )
		
		return {
			
			config,
			model_trainers,

			page_next_disabled,

		}

	},

});
</script>

<style scoped lang="scss">

.method-category-block {
    @apply p-4 select-none bg-gray-100 border border-gray-300 h-16 flex justify-center text-center cursor-pointer text-gray-800;

    &.selected {
        @apply bg-blue-100 border-blue-400 text-gray-900;
    }
}

.method-block {
    @apply p-4 select-none bg-gray-100 border border-gray-300 h-16 flex justify-center text-center cursor-pointer text-gray-800;

    &.selected {
        @apply bg-blue-100 border-blue-400 text-gray-900;
    }
}

</style>
