import { h, ref, toRaw, VNode, compile } from "vue";
import { useToast } from "vue-toastification";
import { ModelTrainer, Data, DataType, ModelResult, DataRow } from "./modelTrainer";
import useConfig, { UseConfig } from "../useConfig";

import katex from 'katex';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const toast = useToast()

function RenderModelResult(result: ModelResult): VNode {
	switch(result.type)
	{
		case "text":
			return h('span', result.data.toString())
		case "code":
			return h('pre', result.data.toString())
		case "chartjs": {
			const chartjs_id = Date.now();
			return h('canvas', { id: `chartjs_canvas_${chartjs_id}`, onVnodeMounted: (e) => { result.object = new Chart(`chartjs_canvas_${chartjs_id}`, result.data); console.log(result.object) } })
		}
		case "katex": {
			const html = katex.renderToString(result.data.toString());
			return h('div', {innerHTML: html} )
		}
		default:
			return h('span', result.data.toString())
	}
}

type TrainerState = "ready" | "running" | "finished" | "failed";

export interface Trainer {
	results: {[cat: string]: {[key: string]: ModelResult}}
}
export class Trainer {

	model_trainer: ModelTrainer | null = null;
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

	config: UseConfig | null = null;

	init(): void {
		
		this.config = toRaw(useConfig());
		
		if (this.config.model_trainer == null || this.config.features == null || this.config.features.length === 0)
		{
			// console.log(this.config)
			throw Error("Some required properties have not been configured")
		}

		// dynamically init instance
		const mclass: any = this.config["model_trainer"];
		this.model_trainer = new mclass(this);

		if (this.model_trainer == null) {
			throw Error("Model trainer could not be initialized.");
		}

		this.model_trainer.features = this.config.features;

		// getting static fields of instance: https://stackoverflow.com/a/19470894
		// console.log("NAME:",this.model_trainer, Object.getPrototypeOf(this.model_trainer).constructor.title)

	}


	start(): void {
		try {
			
			this.status.action = "Warming up..."
			this.init()

			if (this.model_trainer == null)
			{
				toast.error("Selected model trainer could not be used.")
				return;
			}

			this.status.action = "Loading dataset"

			if (typeof this.config?.dataset === "undefined" || this.config?.dataset == null)
			{
				toast.error("Selected dataset is invalid.")
				return;
			}
			
			this.model_trainer.load_dataset(this.config?.dataset)
			
			this.status.action = "Fitting model"
			this.model_trainer.base_fit()

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

	user_predict(data_x: DataRow, result_y: DataRow): Data['y'] {

		const data_y = this.model_trainer!.base_predict([data_x], this.config!.features!.filter(x => x.enabled && x.is_dependant));

		for (const [col_i, val] of Object.entries(data_y[0]))
		{
			result_y[parseInt(col_i)] = val;
		}

		return data_y;
	}

	finished(): void {
		this.status.state = "finished";
		this.results['Model'] = this.model_trainer!.get_results();
		// console.log("RESULTS", this.results['Model'])
	}

}