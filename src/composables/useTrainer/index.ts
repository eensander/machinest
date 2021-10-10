import linear_regression from "@/training_methods/supervised/linear_regression";
import { generate } from "@vue/compiler-core";
import { h, reactive, ref, toRaw } from "vue";
import { useToast } from "vue-toastification";
import { TrainingMethod, Data, DataType } from "../types";
import useConfig, { UseConfig } from "../useConfig";
import { Feature } from "../useConfig/features";

const toast = useToast()

type TrainerResultValue = {
	type: "string" | "chartjs",
	data: any
}

function TrainerResultRenderer(result: TrainerResultValue) {
	switch(result.type)
	{
		case "string":
			return h('span', result.data)
			break;
	}
}

type TrainerState = "waiting" | "running" | "finished";

class Trainer {

	method: TrainingMethod | null = null;
	status = reactive({
		progress: null as number | null,
		state: "waiting" as TrainerState,
		action: "Idle",
		sub_action: "Waiting for action"
	});

	results: {[cat: string]: {[key: string]: TrainerResultValue}} = reactive({
		'cat': {'key': {type: 'string', data: 'hey'}},
		'cat2': {'k2': {type: 'string', data: 'hey'}}
	})

	setResult(category: string, key: string, value: TrainerResultValue): void {
		if (category !in this.results)
			this.results[category] = {};
		
		this.results[category][key] = value
	}

	config: UseConfig | null = null;

	init() {
		
		this.config = toRaw(useConfig());
		
		if (this.config.training_method == null || this.config.features == null || this.config.features.length === 0)
		{
			console.log(this.config)
			throw Error("Some required properties have not been configured")
		}

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
		this.status.progress = 100;
		// this.status.running = false;

		this.status.state = "finished";

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