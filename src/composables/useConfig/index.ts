import { Ref, ref } from "vue";

import { TrainingMethod, TrainingMethodCategory } from '../types'
import { ParseConfig } from 'papaparse'

// import { default as useTrainingMethods } from '../useTrainingMethods'


import { default as features, FeaturesConfig } from './features'
import { default as files, FilesConfig } from './files'

const dataset_config = ref({})

const training_method_category = ref(null)
const training_method = ref(null)

const test = ref(null)

export interface UseConfig extends FeaturesConfig, FilesConfig {

	dataset_config: Ref<ParseConfig>

	training_method_category: Ref<TrainingMethodCategory | null>,
	training_method: Ref<TrainingMethod | null>,

	test: Ref<string | null>,
	
}

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