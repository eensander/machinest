import {TrainingMethod} from '@/composables/types'

export default <TrainingMethod> {

	name: "(Multiple) Linear Regression",

	train: (row: Array<string | number>): void => {
		console.log("simulating training row", row);
	}

}
