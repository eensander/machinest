import { Data, TrainingMethod } from '@/composables/types'
import { FeatureMeasurability } from '@/composables/useConfig/features'

import regression, { DataPoint } from 'regression';


	// train: () => {
	// 	console.log("simulating training row", row);
	// },
export default class extends TrainingMethod {

	static title = "(Multiple) Linear Regression"
	static enabled = true

	static conditions = {
		streamable: false,
		features: {
			// x 
			dependant: {
				amount: Infinity,
				measure: [FeatureMeasurability.Discrete, FeatureMeasurability.Continuous]
			},
			// y
			independant: {
				amount: 1,
				measure: [FeatureMeasurability.Ordinal, FeatureMeasurability.Nominal]
			}
		}
	}

	model: any = null;

	fit(data: Data) {

		console.log("LINRG: Fit called", data)

		const dp_data = [];

		for (const row_i in data.x)
		{
			const x = parseFloat(data.x[row_i][0] as string)
			const y = parseFloat(data.y[row_i][0] as string)

			// move to more generic place
			if (x == null || isNaN(x) || y == null || isNaN(y))
				continue

			dp_data.push([x, y])
		}

		console.log("dp data: ", dp_data)

		this.model = regression.linear(dp_data as DataPoint[])
		this.set_result('coefficient', this.model.equation[0]);
		this.set_result('y-intercept', this.model.equation[1]);
		this.set_result('equation', {type: 'katex', data: this.model.string});

		console.log("model: ", this.model)

	}

	evaluate(data: Data) {
		for (const row_i in data.x)
		{
			const x = parseFloat(data.x[row_i][0] as string)
			const y = parseFloat(data.y[row_i][0] as string)

			// move to more generic place
			if (x == null || isNaN(x) || y == null || isNaN(y))
				continue

			// dp_data.push([x, y])
		}
	}

	predict(data: Data) {
		// return row_y;
	}

	plot() {
		// console.log('bruh')
	}

}
