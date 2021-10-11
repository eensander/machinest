import { Data, TrainingMethod } from '@/composables/types'
import { Feature, FeatureMeasurability } from '@/composables/useConfig/features'

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
			const x = parseFloat(Object.values(data.x[row_i])[0] as string)
			const y = parseFloat(Object.values(data.y[row_i])[0] as string)

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

	predict(data_x: Data['x'], features_y: Feature[]): Data['y'] {
		
		const data_y: Data['y'] = [];
		
		for (const row_x of data_x) {
			const row_y_i = data_y.push({}) - 1
			
			/*
			for (const [col_x_i, col_x] of Object.entries(row_x)) {
				const val_y = this.model.predict(col_x);
				// data_y.at(-1)![](val_y);
			}
			*/

			// linear (this) assumes only one X and Y feature
			data_y[row_y_i][features_y[0].index] = this.model.predict(Object.values(row_x)[0])[1];
		}

		return data_y;
	}

	plot() {
		// console.log('bruh')
	}

}
