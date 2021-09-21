import { Ref, ref } from "vue";

import { TrainingMethod, TrainingMethodCategory } from '../types'
import { ParseConfig } from 'papaparse'

// import { default as useTrainingMethods } from '../useTrainingMethods'

interface UseConfig {
	files: {
		dataset: Ref<File | null>,
		model: Ref<File | null>,
	},

	dataset_config: Ref<ParseConfig>

	training_method_category: Ref<TrainingMethodCategory | null>,
	training_method: Ref<TrainingMethod | null>,
	
	features: Ref<null>,

	test: Ref<string | null>,
}
/*
const state = reactive({
	files: {
		dataset: null,
		model:   null,
	},

	training_method: null,

	features: null,
	
	test:    null,
})
*/

const files = {
	dataset: ref(null),
	model: ref(null),
}

const dataset_config = ref({})

const training_method_category = ref(null)
const training_method = ref(null)

const features = ref(null)

const test = ref(null)

export default function useConfig(): UseConfig {
	// return toRefs(state)
	return {
		files,

		dataset_config,
	
		training_method_category,
		training_method,
	
		features,
		
		test,
	}
}