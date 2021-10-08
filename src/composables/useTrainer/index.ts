import linear_regression from "@/training_methods/supervised/linear_regression";
import { generate } from "@vue/compiler-core";
import { reactive, toRaw } from "vue";
import { useToast } from "vue-toastification";
import { TrainingMethod, Data, DataType } from "../types";
import useConfig, { UseConfig } from "../useConfig";
import { Feature } from "../useConfig/features";

const toast = useToast()

// export interface Trainer {
// 	method: TrainingMethod;
// 	status: {
// 		progress: number,
// 		running: boolean,
// 		action: string
// 	}
// }
export class Trainer {

	// method: TrainingMethod | null = null;

	// train_size_percentage: number|null = null;

	method: TrainingMethod | null = null;
	status = reactive({
		progress: null,
		running: false,
		action: "Idle",
		sub_action: "Waiting for action"
	})

	config: UseConfig | null = null;

	// constructor() {
	// }

	init() {
		// let cur_config = useConfing
		this.config = toRaw(useConfig());
		// console.log(this.config);
		if (this.config.training_method == null || this.config.features == null || this.config.features.length === 0)
		{
			console.log(this.config)
			throw Error("Some required properties have not been configured")
		}

		// const data: Data = {x: [], y: []};
		
		// const features: Feature[] = this.config.features;

		// dynamically init instance
		const mclass: any = this.config["training_method"];
		this.method = new mclass();

		if (this.method == null)
			return

		this.method.features = this.config.features;

		// getting static fields of instance: https://stackoverflow.com/a/19470894
		console.log("NAME:",this.method, Object.getPrototypeOf(this.method).constructor.title)

	}


	start() {
		this.status.action = "Warming up..."
		this.init()

		if (this.method == null)
		{
			toast.error("Selected method could not be used.")
			return;
		}

		this.status.action = "Loading dataset"

		if (typeof this.config?.dataset === "undefined" || this.config?.dataset == null)
		{
			toast.error("Selected dataset is invalid.")
			return;
		}
		
		this.method.load_dataset(this.config?.dataset)
		
		this.status.action = "Fitting model"
		this.method.base_fit()

		this.status.action = "Model has been fit."

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

	return {
		training_status
	}
}
// */