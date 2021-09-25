import { Ref, ref } from "vue"
// import { Feature } from "../types"
import { UseConfig } from './index'

// enum using ts union from : https://stackoverflow.com/a/60041791
export const FeatureMeasurability = {
	// https://miro.medium.com/max/1400/1*kySPZcf83qLOuaqB1vJxlg.jpeg
	// https://i.stack.imgur.com/D08t9.jpg
	// https://cdn.scribbr.com/wp-content/uploads/2020/08/levels-of-measurement-1.png

	// numerical	(qualitative)

	Continuous: "CONTINUOUS",		// infinite options			(some EXACT 'age', 'height', 'blood pressure')
	Discrete: "DISCRETE",		    // whole numerical value	('no. of children', 'shoe size', 'age' in years)

	// categorical	(quantitative)

	Ordinal: "ORDINAL",		    // ordered/hierarchal data	('pain  severeness', 'mood')
	Nominal: "NOMINAL",		    // no hierarchy				('eye color', 'dog breed', 'blood type')
} as const
// export FeatureMeasurability
type FeatureMeasurability = typeof FeatureMeasurability[keyof typeof FeatureMeasurability];


export interface Feature {
    name: string,
    datatype?: string,
    measurability: FeatureMeasurability,
    is_dependant: boolean,
}

export type FeaturesConfig = { features: Feature[] | null }

// const features = ref(null)
// demo for : https://www.kaggle.com/uciml/indian-liver-patient-records
const features: FeaturesConfig["features"] = [
	{
		name: "Age",
		// datatype: "CAte",
		is_dependant: true,
		measurability: FeatureMeasurability.Discrete
	},
	{
		name: "Gender",
		is_dependant: false,
		measurability: FeatureMeasurability.Nominal
	},
	{
		name: "Total_Protiens",
		is_dependant: false,
		measurability: FeatureMeasurability.Continuous
	},
	{
		name: "Alkaline_Phosphotase",
		is_dependant: false,
		measurability: FeatureMeasurability.Continuous
	}
]

export function refreshFeatures(config: UseConfig): void {
	
	// 1. a papa la parse from files.ts (-> create api)? 
	// 2. push returning features onto config
	// 3. profit?

	// config.features
	console.log(features, config)
}

export default features