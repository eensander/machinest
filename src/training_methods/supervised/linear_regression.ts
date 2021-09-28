import { Row, TrainingMethod } from '@/composables/types'
import { FeatureMeasurability } from '@/composables/useConfig/features'

import regression from 'regression';

export default class extends TrainingMethod {

	name = "(Multiple) Linear Regression"
	enabled = true

	conditions = {
		streamable: false,
		features: {
			independant: {
				// min: 1,
				// max: 1,
				type: [FeatureMeasurability.Ordinal, FeatureMeasurability.Nominal]
			},
			dependant: {
				min: 1,
				max: Infinity,
				type: [FeatureMeasurability.Discrete, FeatureMeasurability.Continuous]
			}
		}
	}

	model: any = null;

	fit(data: Row[]) {
		const data_ = [[].concat(...data.x), [].concat(...data.y)];
		this.model = regression.polynomial(data_)
	}

	// train: () => {
	// 	console.log("simulating training row", row);
	// },

	predict(data: Row[]) {
		// return row_y;
	}

	plot() {
		console.log('bruh')
	}

}
