// import { reactive, ref, Ref, toRefs } from "vue"

import { TrainingMethod, TrainingMethodCategory } from './types'

interface UseTrainingMethods {
	library: TrainingMethodCategory[],
}

// WIP:
type labels = { name: string, bgcolor: string }[]

export const getMethodLabels = (method: TrainingMethod) => {
	let labels: labels = [];

	if (method.conditions.streamable) {
		labels.push({
			name: 'Streamable',
			bgcolor: 'grey'
		})
	}
}

/*)
const state = reactive({
	library: [
		{
			name: "supervised",
			methods:  [
				// (await import('../learning_methods/supervised/linear_regression')).default,
				// (await import('../learning_methods/supervised/linear_regression')).default,
			]
		},
		{
			name: "unsupervised",
			methods: [
				// require('../learning_methods/supervised/linear_regression')
			]
		},
		{
			name: "deep learning",
			methods: [
				// require('../learning_methods/supervised/linear_regression')
			]
		},
	],
})
*/

import training_methods from "@/training_methods";

// export default function useTrainingMethods(): UseTrainingMethods {
// 	// return toRefs(state)
// 	return {
// 		library: training_methods
// 	}	
// }