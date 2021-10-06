import linear_regression from "@/training_methods/supervised/linear_regression";
import { generate } from "@vue/compiler-core";
import { reactive } from "vue";
import { TrainingMethod, Data, DataType } from "../types";
import useConfig, { UseConfig } from "../useConfig";
import { Feature } from "../useConfig/features";


export interface Trainer {
	method: TrainingMethod;
	status: {
		running: boolean,
		action: string
	}
}
export class Trainer {

	// method: TrainingMethod | null = null;

	// train_size_percentage: number|null = null;

	status = reactive({
		running: false,
		action: "Idle"
	})

	constructor(config: UseConfig) {
		if (config.training_method == null || config.features == null)
			throw Error("Some required properties have not been configured")

		const data: Data = {x: [], y: []};
		
		const features: Feature[] = config.features;

		const mclass: any = config["training_method"];
		this.method = new mclass();
		
		// getting static fields of instance: https://stackoverflow.com/a/19470894
		console.log("NAME:",this.method, Object.getPrototypeOf(this.method).constructor.title)

		// this.method = method;
	}

	start() {
		if (this.method == null)
			return;

		this.status.action = "Warming up..."

		this.method.base_load()
	}

}

interface training_status {
	linear_progress: boolean,
}

const training_status = reactive({
	linear_progress: false,
})

// /*
export default function useTrainer() {

	// const config = useConfig();

	// const trainer = new Trainer(linear_regression)

	
	// const init_trainer = () => {
	// 	const trainer = reactive(new Trainer(new linear_regression))
	// }

	return {
		training_status
	}
}
// */