import linear_regression from "@/training_methods/supervised/linear_regression";
import { TrainingMethod } from "../types";
import useConfig from "../useConfig";



class Trainer {

	constructor(method: TrainingMethod) {

	}

}

export default function useTrainer() {

	const config = useConfig();

	// const trainer = new Trainer(linear_regression)

	return {
		// trainer
	}
}