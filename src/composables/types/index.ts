export interface Row extends Array<string | number> {}

export interface TrainingMethod {
    name: string,
    train(row: Row): void
}

export interface TrainingMethodCategory {
    name: string;
    methods: TrainingMethod[];
}


export enum FeatureDataType {
	// numerical // https://miro.medium.com/max/1400/1*kySPZcf83qLOuaqB1vJxlg.jpeg
	CONTINUOUS, 
	DISCRETE,
	// categorical
	ORDINAL,
	NOMINAL,
}

export interface Feature {
    name: string,
    datatype: String,
    is_dependant: boolean,
}