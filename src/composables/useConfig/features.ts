import { Ref, ref } from "vue"
// import { Feature } from "../types"
import { UseConfig } from './index'

export enum FeatureMeasurability {
	// https://miro.medium.com/max/1400/1*kySPZcf83qLOuaqB1vJxlg.jpeg
	// https://i.stack.imgur.com/D08t9.jpg
	// https://cdn.scribbr.com/wp-content/uploads/2020/08/levels-of-measurement-1.png

	// numerical	(qualitative)

	CONTINUOUS = "Continuous",		// infinite options			(some EXACT 'age', 'height', 'blood pressure')
	DISCRETE = "Discrete",		    // whole numerical value	('no. of children', 'shoe size', 'age' in years)

	// categorical	(quantitative)

	ORDINAL = "Ordinal",		    // ordered/hierarchal data	('pain  severeness', 'mood')
	NOMINAL = "Nominal",		    // no hierarchy				('eye color', 'dog breed', 'blood type')
}

export interface Feature {
    name: string,
    datatype?: string,
    measurability: FeatureMeasurability,
    is_dependant: boolean,
}

export type FeaturesConfig = { features: Ref<Feature[] | null> }

// const features = ref(null)
// demo for : https://www.kaggle.com/uciml/indian-liver-patient-records
const features: FeaturesConfig["features"] = ref([
	{
		name: "Age",
		// datatype: "CAte",
		is_dependant: true,
		measurability: FeatureMeasurability.DISCRETE
	},
	{
		name: "Gender",
		is_dependant: false,
		measurability: FeatureMeasurability.NOMINAL
	},
	{
		name: "Total_Protiens",
		is_dependant: false,
		measurability: FeatureMeasurability.CONTINUOUS
	},
	{
		name: "Alkaline_Phosphotase",
		is_dependant: false,
		measurability: FeatureMeasurability.CONTINUOUS
	}
])

export function refreshFeatures(config: UseConfig): void {
	
	// 1. a papa la parse from files.ts (-> create api)? 
	// 2. push returning features onto config
	// 3. profit?

	// config.features
	console.log(features, config)
}

export default features