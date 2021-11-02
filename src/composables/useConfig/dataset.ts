
import { useToast } from "vue-toastification";

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

export default dataset