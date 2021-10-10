import { reactive, Ref, ref } from "vue";

import { TrainingMethod, TrainingMethodCategory } from '../types'
// import { ParseConfig } from 'papaparse'

// import { default as useTrainingMethods } from '../useTrainingMethods'


import { default as features, FeaturesConfig } from './features'
import { default as dataset, DatasetConfig } from './dataset'
import { default as model, ModelConfig } from './model'

// const dataset_config = {}

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

	validation: {
		train_split_size: number | null,
		randomize: boolean
	},

	test: string | null,
	
}

const config: UseConfig = reactive({
	
	dataset: dataset(),
	model,

	// dataset_config,

	training_method_category,
	training_method,

	validation: {
		train_split_size: null,
		randomize: true
	},

	features,
	
	test,
})

export function reset_config(config: UseConfig, options: any = {}): void {

	// console.log("CLEARING? ", config, options, dataset())

	if (options.dataset ?? true)
		config.dataset = dataset();
	if (options.model ?? true)
		config.model = model;
	
	config.training_method_category = training_method_category;
	config.training_method = training_method;
	config.validation = {
		train_split_size: null,
		randomize: true
	},
	config.features = features;
	config.test = test;
}

export default function useConfig(): UseConfig {
	return config
}