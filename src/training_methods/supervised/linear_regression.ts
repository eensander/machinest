import { Data, TrainingMethod } from '@/composables/types'
import { Feature, FeatureMeasurability } from '@/composables/useConfig/features'

import regression, { DataPoint } from 'regression';


// train: () => {
// 	console.log("simulating training row", row);
// },

export default class extends TrainingMethod {

	static title = "Linear Regression"
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

		const dp_data = [];

		const skipped = []
		for (const row_i in data.x)
		{
			const x = parseFloat(Object.values(data.x[row_i])[0] as string)
			const y = parseFloat(Object.values(data.y[row_i])[0] as string)

			// should be done at Data Cleaning phase (and not be skipped if NaN)
			if (x == null || isNaN(x) || y == null || isNaN(y))
			{
				skipped.push(row_i);
				continue
			}

			dp_data.push([x, y])
		}

		// console.log("dp data: ", dp_data)

		this.model = regression.linear(dp_data as DataPoint[])

		this.set_result('coefficient', this.model.equation[0]);
		this.set_result('y-intercept', this.model.equation[1]);
		this.set_result('equation', {type: 'katex', data: this.model.string});
		// this.set_result('invalid rows', `${skipped.length} (${skipped.join(", ")})`);

		// display chart
		const min_x = Math.min.apply(null, dp_data.map(i => i[0]))
		const max_x = Math.max.apply(null, dp_data.map(i => i[0]))
		const chart_scatter_data = dp_data.map((i) => { return {x: i[0], y: i[1]} })
		const chart_data = [{x: min_x, y: this.predict([[min_x]])[0][0] }, {x: max_x, y: this.predict([[max_x]])[0][0] }]
		// console.log(chart_data);
		this.set_result('Chart', {type: 'chartjs', data: {
			type: 'line',
			options:{scales:{x: {type:'linear',position: 'bottom'}}},
			data: {
				datasets: [{
					type: 'line',
					label: 'Regression',
					borderColor: 'rgb(53, 151, 151)',
					data: chart_data
				},{
					type: 'scatter',
					label: 'Scatter',
					backgroundColor: 'rgb(116, 163, 251)',
					borderColor: 'rgb(6, 66, 178)',
					data: chart_scatter_data
				}],
			},
		}});
	}

	predict(data_x: Data['x'], features_y: Feature[] = []): Data['y'] {
		
		const data_y: Data['y'] = [];

		for (const row_x of data_x) {
			const row_y_i = data_y.push({}) - 1

			// linear (this) assumes only one X and Y feature
			const index = features_y.length ? features_y[0].index : 0

			data_y[row_y_i][index] = this.model.predict(Object.values(row_x)[0])[1];
		}

		return data_y;
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
}
