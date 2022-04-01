import { reactive } from "vue";

import { ModelTrainer, ModelTrainerCategory } from '../useTrainer/modelTrainer'

import useTrainer from '../useTrainer';

import { default as features, FeaturesConfig } from './features'
import { default as dataset, DatasetConfig } from './dataset'
import { default as model, ModelConfig } from './model'

// const dataset_config = {}

const model_trainer_category = null
const model_trainer = null

const test = null

export interface UseConfig {

	features: FeaturesConfig,
	dataset: DatasetConfig,
	model: ModelConfig,

	// dataset_config: ParseConfig

	model_trainer_category: ModelTrainerCategory | null,
	model_trainer: ModelTrainer | null,

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

	model_trainer_category,
	model_trainer,

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
	
	config.model_trainer_category = model_trainer_category;
	config.model_trainer = model_trainer;
	config.validation = {
		train_split_size: null,
		randomize: true
	},
	config.features = features;
	config.test = test;

	const {trainer_reset} = useTrainer()
	trainer_reset()
}

export default function useConfig(): UseConfig {
	return config
}