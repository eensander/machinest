import { reactive, Ref, ref } from "vue";

import { TrainingMethod, TrainingMethodCategory } from '../types'
// import { ParseConfig } from 'papaparse'

// import { default as useTrainingMethods } from '../useTrainingMethods'


import { default as features, FeaturesConfig } from './features'
import { default as dataset, DatasetConfig } from './dataset'
import { default as model, ModelConfig } from './model'

const dataset_config = {}

const training_method_category = null
const training_method = null

const test = null

export interface UseConfig {

	features: FeaturesConfig,
	dataset: DatasetConfig,
	model: ModelConfig,

	// dataset_config: ParseConfig

	training_method_category: TrainingMethodCategory | null,
	training_method: TrainingMethod | null,

	test: string | null,
	
}

// interface tmp { 

// 	dataset_config: ParseConfig

// 	training_method_category: TrainingMethodCategory | null,
// 	training_method: TrainingMethod | null,

// 	test: string | null,
	
// }
// type UseConfig = FeaturesConfig & DatasetConfig & ModelConfig & tmp;

const config: UseConfig = reactive({
	
	dataset,
	model,

	// dataset_config,

	training_method_category,
	training_method,

	features,
	
	test,
})

export default function useConfig(): UseConfig {
	return config
}