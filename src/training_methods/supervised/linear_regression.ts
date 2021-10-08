import { Data, TrainingMethod } from '@/composables/types'
import { FeatureMeasurability } from '@/composables/useConfig/features'

import regression, { DataPoint } from 'regression';

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

		// convert data to requested format // the hacky way:

		const dp_data = [];

		for (const row_i in data.x)
		{
			dp_data.push([
				parseInt(data.x[row_i][0] as string),
				parseInt(data.y[row_i][0] as string)
			])
		}

		console.log("dp data: ", dp_data)


		// const y: number[] = [].concat(...data.y as []);

		// if (data.x == null || data.x.length == 0 || data.x[0].length == 0)
		// 	return;

		// const data_f: [number[], number[]] = [[].concat(...data.x as []), [].concat(...data.y as [])];

		// this.model = regression.polynomial(data_f as DataPoint[])
		this.model = regression.linear(dp_data as DataPoint[])

		console.log("model: ", this.model)

	}

	// train: () => {
	// 	console.log("simulating training row", row);
	// },

	predict(data: Data) {
		// return row_y;
	}

	plot() {
		console.log('bruh')
	}

}
