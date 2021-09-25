import { reactive, Ref, ref } from "vue";

import { TrainingMethod, TrainingMethodCategory } from '../types'
import { ParseConfig } from 'papaparse'

// import { default as useTrainingMethods } from '../useTrainingMethods'


import { default as features, FeaturesConfig } from './features'
import { default as files, FilesConfig } from './files'

const dataset_config = {}

const training_method_category = null
const training_method = null

const test = null

export interface UseConfig extends FeaturesConfig, FilesConfig {

	dataset_config: ParseConfig

	training_method_category: TrainingMethodCategory | null,
	training_method: TrainingMethod | null,

	test: string | null,
	
}

const config: UseConfig = reactive({
	files,

	dataset_config,

	training_method_category,
	training_method,

	features,
	
	test,
})

export default function useConfig(): UseConfig {
	return config
}