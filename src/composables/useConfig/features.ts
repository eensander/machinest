import { Ref, ref } from "vue"
// import { Feature } from "../types"
import useConfig from './index'

// enum using ts union from : https://stackoverflow.com/a/60041791
export const FeatureMeasurability = {
	// GOOD GUIDE: https://towardsdatascience.com/7-data-types-a-better-way-to-think-about-data-types-for-machine-learning-939fae99a689
	// https://miro.medium.com/max/1400/1*kySPZcf83qLOuaqB1vJxlg.jpeg
	// https://i.stack.imgur.com/D08t9.jpg
	// https://cdn.scribbr.com/wp-content/uploads/2020/08/levels-of-measurement-1.png

	// numerical	(qualitative)

	Continuous: "CONTINUOUS",		// infinite options			(some EXACT 'age', 'height', 'blood pressure')
	Discrete: "DISCRETE",		    // whole numerical value	('no. of children', 'shoe size', 'age' in years)

	// categorical	(quantitative)		( no mathematical meaning )

	Ordinal: "ORDINAL",		    // ordered/hierarchal data	('pain  severeness', 'mood')
	Nominal: "NOMINAL",		    // no hierarchy				('eye color', 'dog breed', 'blood type')
} as const
// export FeatureMeasurability
export type FeatureMeasurability = typeof FeatureMeasurability[keyof typeof FeatureMeasurability];

export interface Feature {
	name: string,
	index: number,
    datatype?: string,
    measurability: FeatureMeasurability,
    is_dependant: boolean,
}

export type FeaturesConfig = Feature[] | null

// const features = ref(null)
// demo for : https://www.kaggle.com/uciml/indian-liver-patient-records
const features: FeaturesConfig = [
	{
		name: "Age",
		index: 0,
		// datatype: "CAte",
		is_dependant: true,
		measurability: FeatureMeasurability.Discrete
	},
	{
		name: "Gender",
		index: 3,
		is_dependant: false,
		measurability: FeatureMeasurability.Nominal
	},
	{
		name: "Total_Protiens",
		index: 4,
		is_dependant: false,
		measurability: FeatureMeasurability.Continuous
	},
	{
		name: "Alkaline_Phosphotase",
		index: 7,
		is_dependant: false,
		measurability: FeatureMeasurability.Continuous
	}
]

export function initFeatures(features: string[]): void {
	
	const config = useConfig();

	// 1. a papa la parse from files.ts (-> create api)? 
	// 2. push returning features onto config
	// 3. profit?

	// config.features
	// console.log(features, config)

	// features = 
}

export default features