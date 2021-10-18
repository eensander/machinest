<template>
  <div class="flex flex-col">
    <h1>3. Training Method</h1>

    <p class="text-sm">Please select the which training method you would like to use.</p>
	
    <hr class="my-4" />

	<span class="text-xl mb-3 font-light text-gray-600 text-left">Training Categories</span>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
            v-for="method_category in training_methods"
            :key="method_category"
            class="method-category-block"
            :class="{'selected': config.training_method_category?.name == method_category.name }"
            @click="config.training_method_category = method_category; config.training_method = null;"
		>
            <span class="self-center">{{ method_category.name }}</span>
        </div>
    </div>

    <hr class="my-4" />

	<span v-if="config.training_method_category != null" class="text-xl mb-3 font-light text-gray-600 text-left">Methods</span>
    <span class="text-center text-gray-600 font-light" v-if="config.training_method_category != null && config.training_method_category.methods.length == 0">
		This category contains no training methods
	</span>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4" v-if="config.training_method_category != null && config.training_method_category.methods.length > 0">
		<div
			v-for="method in config.training_method_category.methods"
			:key="method"
			class="method-block"
			:class="{'selected': config.training_method?.title == method.title }"
			@click="config.training_method = method"
		>
			<span class="self-center">{{ method.title }}</span>
		</div>
    </div>

    <div class="flex justify-between my-8">
        <button @click="$router.push({ name: 'features' });" class="router-btn">
            &#xff1c; 2. Feature Configuration
        </button>
        <div class="w-0 h-0 invisible"></div>
        <button @click="$router.push({ name: 'clean' });" :disabled="config.training_method == null" class="router-btn">
            4. Clean Data &#xff1e;
        </button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

import training_methods from "@/training_methods";
// import { TrainingMethodCategory, TrainingMethod } from '@/composables/types'

import useConfig from '@/composables/useConfig'
const config = useConfig()

// import { TrainingMethodCategory } from '@/composables/types';

export default defineComponent({

	setup() {

		const page_next_disabled = computed( () => config.dataset.file == null && config.model.file == null )
		
		return {
			
			config,
			training_methods,

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
