import { Ref, ref } from "vue"
import Papa from "papaparse"

import { useToast } from "vue-toastification";

// import { UseConfig } from './index'

const toast = useToast()

export interface FilesConfig {
	files: {
		dataset: File | null,
		model: File | null,
	}
}

const files: FilesConfig['files'] = {   
	dataset: null,
	model: null,
}

export function parseFile(): void {
	
	// 1. a papa la parse from files.ts (-> create api)? 
	// 2. push returning features onto config
	// 3. profit?

	// config.features
	console.log(files)
	// return

	if (files.dataset === null)
		return

	Papa.parse(files.dataset, {
		error: (err, file) => {
			// this.file_dataset_status = "error event";
			console.log("ERROR:", err, file);
		},
		complete: (results) => {
			// this.file_dataset_status = "complete event";
			console.log("PARSED.", results);
			console.log(results.data[0]);
			// parsed_status.value = JSON.stringify(results)
		}
	});
	

	toast("Failed parsing dataset")

}

export default files