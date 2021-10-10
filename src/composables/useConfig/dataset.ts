import { Ref, ref } from "vue"
import Papa from "papaparse"

import { useToast } from "vue-toastification";

// import { UseConfig } from './index'

const toast = useToast()

export interface DatasetConfig {
	file: File | null,

	read_as_stream: boolean, // when true, file will be read as stream using Papaparse

	data_parsed_raw: string[][],
	amount_rows: number,
	data_first_rows: string[][], // first few rows for identification purposes. needed when read_as_stream is false and thus data_parsed_raw is empty.
	
	context: {
		first_row_is_header: boolean,
		// delimiter: string
	}


	// parse_progress: , // ?
	// parsed: ,          // ?



	// parsed: 
}

function dataset(): DatasetConfig {
	return {
		file: null,
		read_as_stream: false,

		amount_rows: 0,
		data_parsed_raw: [],
		data_first_rows: [],
		
		context: {
			first_row_is_header: true,
			// delimiter: ','
		},

	}
}

/*
export function parse_dataset(): void {
	
	// 1. a papa la parse from files.ts (-> create api)? 
	// 2. push returning features onto config
	// 3. profit?

	// config.features
	// console.log(dataset.file)
	// return

	if (dataset.file === null)
		return

	Papa.parse(dataset.file, {
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
*/


export default dataset