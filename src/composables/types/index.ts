export interface Row extends Array<string | number> {}

export interface TrainingMethod {
    name: string,
    train(row: Row): void
}

export interface TrainingMethodCategory {
    name: string;
    methods: TrainingMethod[];
}

export interface FeatureDataType {

}

export interface Feature {
    name: string,
    datatype: FeatureDataType,
    is_dependant: boolean,
}