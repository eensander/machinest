import Papa from 'papaparse';
import { UseConfig } from '../useConfig';
import { Feature, FeatureMeasurability } from '../useConfig/features'
import { Trainer } from './trainer';

export type DataType = string | number | boolean;
export type DataRow = {[index: number]: DataType};
export type Data = { x: DataRow[], y: DataRow[] }

export interface ModelTrainerCategory {
    name: string;
    trainers: ModelTrainer[];
}

export type ModelResult = {
	type: "text" | "code" | "katex" | "chartjs",
	object?: any, // for optionally storing object like chartjs
	data: any,
}

// https://stackoverflow.com/a/59488269
// export interface TrainingMethodConstructor {
// 	new(): any;
// }
// TODO: move these to trainingMethods config or useTrainingMethods file ? should these two maybe get merged?
export interface ModelTrainer {

	new(): any;

	data: Data, // needed?
	dataset: UseConfig["dataset"],

	features: Feature[];
	
	conditions: {
		streamable: boolean | null,
		features: {
			independant: { amount: number, measure: FeatureMeasurability[] | null }, // x
			dependant: { amount: number, measure: FeatureMeasurability[] | null }, // y
		}
	}

	// score?(predicted_y: Data, real_y: Data): void
	// test?(data:  Data): void

	predict(data_x: Data['x'], features_y: Feature[]): Data['y']

	fit(data: Data): void
	fit_inc?(data: Data): void

	evaluate(data: Data): void

}

export abstract class ModelTrainer {

	static title: string;
	
    conditions: ModelTrainer["conditions"] = {
		streamable: false, // defaults to false
		features: {
			dependant: { amount: 1, measure: null }, // amount can be any number of Infinity.
			independant: { amount: 1, measure: null },
		}
	};

	trainer: Trainer;

	results: {[key: string]: ModelResult} = {}

	get_results() {
		return this.results;
	}

	set_result(key: string, value: ModelResult | string | number): void {
		if (typeof value == "string") {
			value = {type: 'text', data: value}
		} else if (typeof value == "number") {
			value = {type: 'code', data: value}
		}

		this.results[key] = value
	}

	constructor(trainer: Trainer) {
		this.trainer = trainer;
	}


	load_dataset(dataset: UseConfig["dataset"])	{
		this.dataset = dataset;
	}

	/**
	 * Data may for each dimension (X, Y) contain an array of an array ([][]) of any DataType
	 * when that dimension contains more than one feature, or only and array ([]) of any 
	 * DataType. For example when using multiple independant variables to predict one dependant
	 * variable, the structure would need to become: 
	 * 		([], [][]) like ([1,2,3], [[10,15,20], [80,75,70]])
	 * @param data 
	 */
	/*
	correct_data(data: Data): Data {
		// TODO: https://stackoverflow.com/a/52400286 || https://www.typescriptlang.org/docs/handbook/advanced-types.html
		if (this.conditions.features.dependant.amount > 1 && this.datatype_is_2d(data.x) )
			data.x = [].concat(...data.x as []); 
		if (this.conditions.features.independant.amount > 1 && this.datatype_is_2d(data.y) )
			data.y = [].concat(...data.y as []); // I guess?
		
		return {x: data.x, y: data.y}
	}
	*/

	/*
	datatype_is_2d(datatype: DataType[] | DataType[][]): datatype is DataType[]  {
		// return true
		return typeof (datatype as DataType[]) === "object"
	}
	*/

	// move later ?
	dataset_to_data(raw_data: string[][], features: Feature[]): Data {
		const data: Data = {x: [], y: []};
		
		let skip_first = this.dataset.context?.first_row_is_header ?? false;
		for (const raw_row of raw_data)
		{
			if (skip_first)
			{
				skip_first = false;
				continue;
			}
			
			const cur_x: DataRow = {}
			const cur_y: DataRow = {}

			for (const feature of features.filter(x => x.enabled) )
			{
				const feature_val = raw_row[feature.index];
				if (feature.is_dependant)	// Y
					cur_y[feature.index] = feature_val
				else						// X
					cur_x[feature.index] = feature_val
			}
			
			data.x.push(cur_x);
			data.y.push(cur_y);
		}

		if (data.x.length != data.y.length)
		{
			throw Error("Feature length mismatch")
		}

		return data;
	}
	
	base_fit(): void {

		// TODO:
		// 1. Fail if dataset is unset
		// 2. If read_as_stream, do following for each, else do once:
		// 3. Correct data 
		//		-> call this.correct_data. only correct dimensionality, concrete correction is done in class
		// 4. this.fit with corrected data, or this.fit_inc if read_as_stream

		if (this.features === null)
			return;

		if (this.dataset.read_as_stream)
		{
/*			if (this.dataset.file === null)
				return;

			// if (typeof this.fit_inc === "undefined")
			// if (isUndefined(this.fit_inc))
			// 	return;
			
			Papa.parse(this.dataset.file, {step: (row) => {
				this.fit_inc(row);
			}})
*/
		}
		else if (this.dataset.data_parsed_raw?.length > 0)
		{
			const data = this.dataset_to_data(this.dataset.data_parsed_raw, this.features)
			// console.log("DATASET TO DATA: ", data)
			this.fit(data)
		}

	}

	base_predict(data_x: Data['x'], features_y: Feature[]): Data['y'] {
		return this.predict(data_x, features_y)
	}

	/*
	base_test(data: Data): void {
		this.predict(data.x);
		// this.score(this.predict(data), data)
		// TODO : calculate score or something?
	}
	*/
}

export abstract class SupervisedModelTrainer extends ModelTrainer {}
export abstract class UnsupervisedModelTrainer extends ModelTrainer {}
export abstract class ReinforcementModelTrainer extends ModelTrainer {}
