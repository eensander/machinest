import linear_regression from "@/training_methods/supervised/linear_regression";
import { generate } from "@vue/compiler-core";
import { h, reactive, ref, toRaw, VNode } from "vue";
import { useToast } from "vue-toastification";
import { TrainingMethod, Data, DataType, ModelResult } from "../types";
import useConfig, { UseConfig } from "../useConfig";
import { Feature } from "../useConfig/features";

const toast = useToast()

function RenderModelResult(result: ModelResult): VNode {
	switch(result.type)
	{
		case "text":
			return h('span', result.data.toString())
			break;
		case "code":
			return h('pre', result.data.toString())
			break;
		case "katex":
			return h('span', result.data.toString())
			break;
		default:
			return h('span', result.data.toString())
			break;
	}
}

type TrainerState = "ready" | "running" | "finished" | "failed";

export interface Trainer {
	results: {[cat: string]: {[key: string]: ModelResult}}
}
export class Trainer {

	method: TrainingMethod | null = null;
	status = {
		progress: null as number | null,
		state: "ready" as TrainerState,
		action: "Idle",
		sub_action: "Waiting for action"
	};

	results: {[cat: string]: {[key: string]: ModelResult}} = {}

	getResultsRendered() {
		const new_results: {[cat: string]: {[key: string]: VNode}} = {}

		for (const cat in this.results) {
			new_results[cat] = {}
			for (const key in this.results[cat]) {
				new_results[cat][key] = RenderModelResult(this.results[cat][key])
			}
		}
		
		return new_results;
	}

/*
	set_result(category: string, key: string, value: ModelResult): void {
		if (category !in this.results)
			this.results[category] = {};
		
		this.results[category][key] = value
	}
*/

	config: UseConfig | null = null;

	init() {
		
		this.config = toRaw(useConfig());
		
		if (this.config.training_method == null || this.config.features == null || this.config.features.length === 0)
		{
			// console.log(this.config)
			throw Error("Some required properties have not been configured")
		}

		// dynamically init instance
		const mclass: any = this.config["training_method"];
		this.method = new mclass(this);

		if (this.method == null) {
			throw Error("Model trainer could not be initialized.");
		}

		this.method.features = this.config.features;

		// getting static fields of instance: https://stackoverflow.com/a/19470894
		console.log("NAME:",this.method, Object.getPrototypeOf(this.method).constructor.title)

	}


	start() {
		try {
			
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
			this.status.progress = 100;
			// this.status.running = false;

			// evaluate model

			this.finished()

		} catch (Error) {
			// this.running = false;
			this.status.state = "failed"
			this.status.action = "Training failed"
			this.status.sub_action = ""

			throw Error;
		}
	}

	finished() {
		this.status.state = "finished";
		this.results['Model'] = this.method!.get_results();
		console.log("RESULTS", this.results['Model'])
	}

}

const trainer = ref(new Trainer());


export default function useTrainer() {

	const trainer_reset = () => {
		trainer.value = new Trainer();
	}

	return {
		trainer,
		trainer_reset,
	}
}