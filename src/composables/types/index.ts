import {Feature, FeatureMeasurability} from '../useConfig/features'

export type Row = Array<string | number | boolean>

// TODO: move these to trainingMethods config or useTrainingMethods file ? should these two maybe get merged?
/*export interface TrainingMethod {
    name: string,
    fit(data: Row | Row[]): void
    test(data: Row | Row[]): void
    train?(): void
}*/

// https://stackoverflow.com/a/59488269
export interface TrainingMethod {
	score?(predicted: Row[], real: Row[]): void
	test?(data:  Row[]): void
	plot?(): void


	predict(data: Row[]): void

	fit(data: Row[]): void

}
export abstract class TrainingMethod {

	// constructor() {
	// 	if (this.constructor == TrainingMethod) {
	// 		throw new Error("TrainingsMethod is an abstract class and can't be instantiated.")
	// 	}
	// }

    abstract name: string;
    abstract conditions: {
		streamable?: boolean,
		features?: {
			// independant?: { min: number, max: number, type: typeof FeatureMeasurability[] },
			dependant?: { min: number, max: number, type: FeatureMeasurability[] },
		}
	};
	
	// abstract fit(data: Row[]): void
	// abstract predict(data: Row[]): void
	
	// abstract test(data:  Row[]): void
	// abstract score?(predicted: Row[], real: Row[]): void
	// abstract plot(): void

	// abstract train?(): void
	
	base_fit(data: Row[]): void {
		this.fit(data)
	}
	base_predict(data: Row[]): void {
		this.predict(data)
	}
	base_test(data: Row[]): void {
		// this.score(this.predict(data), data)
		// TODO : calculate score or something?
	}

}


export interface TrainingMethodCategory {
    name: string;
    methods: TrainingMethod[];
}