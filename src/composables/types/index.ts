export interface Row extends Array<string | number> {}

// TODO: move these to trainingMethods config or useTrainingMethods file ? should these two maybe get merged?
export interface TrainingMethod {
    name: string,
    train(row: Row): void
}

export interface TrainingMethodCategory {
    name: string;
    methods: TrainingMethod[];
}