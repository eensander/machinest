import {Feature, FeatureMeasurability} from '../useConfig/features'

// export type Row = Array<string | number | boolean>
// export type Data<TX extends any, TY extends any> = { x: any[][], y: any[][] }
export type DataType = string | number | boolean;
export type Data = { x: DataType[][] | DataType[], y: DataType[][] | DataType[] }

// TODO: move these to trainingMethods config or useTrainingMethods file ? should these two maybe get merged?
/*export interface TrainingMethod {
    name: string,
    fit(data: Row | Row[]): void
    test(data: Row | Row[]): void
    train?(): void
}*/

// https://stackoverflow.com/a/59488269
// export interface TrainingMethodConstructor {
// 	new(): any;
// }
export interface TrainingMethod<Tx extends DataType = number, Ty extends DataType = number> {

	new(): any;

	testing: string;

	data: Data,
	features: Feature[];

	// abstract title: string,
	conditions: {
		streamable: boolean | null,
		features: {
			independant: { amount: number, measure: FeatureMeasurability[] | null },
			dependant: { amount: number, measure: FeatureMeasurability[] | null },
		}
	}

	score?(predicted_y: Data, real_y: Data): void
	test?(data:  Data): void
	plot?(): void

	predict(data: Data): void

	fit(data: Data): void

}

export abstract class TrainingMethod {

	static title: string;
	
    conditions: TrainingMethod["conditions"] = {
		streamable: null,
		features: {
			dependant: { amount: 1, measure: null }, // amount can be any number of Infinity.
			independant: { amount: 1, measure: null },
		}
	};

	/**
	 * Data may for each dimension (X, Y) contain an array of an array ([][]) of any DataType
	 * when that dimension contains more than one feature, or only and array ([]) of any 
	 * DataType. For example when using multiple independant variables to predict one dependant
	 * variable, the structure would need to become: 
	 * 		([], [][]) like ([1,2,3], [[10,15,20], [80,75,70]])
	 * @param data 
	 */
	correct_data(data: Data): Data {
		// TODO: https://stackoverflow.com/a/52400286 || https://www.typescriptlang.org/docs/handbook/advanced-types.html
		if (this.conditions.features.dependant.amount > 1 && this.datatype_is_2d(data.x) )
			data.x = [].concat(...data.x as []); 
		if (this.conditions.features.dependant.amount > 1 && this.datatype_is_2d(data.x) )
			data.x = [].concat(...data.x as []); // I guess?
		
		return {x: data.x, y: data.y}
	}
	
	datatype_is_2d(datatype: DataType[] | DataType[][]): datatype is DataType[]  {
		// return true
		return typeof (datatype as DataType[]) === "object"
	}
	
	base_load(): void {

		// this.data = this.correct_data(data)
		// this.data = data

		this.fit(this.data)
	}

	base_predict(data: Data): void {
		this.predict(data)
	}

	base_test(data: Data): void {
		this.predict(data);
		// this.score(this.predict(data), data)
		// TODO : calculate score or something?
	}

}


export interface TrainingMethodCategory {
    name: string;
    methods: TrainingMethod[];
}