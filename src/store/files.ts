import { Ref, reactive, toRefs } from "vue";
// import { ref, Ref} from "vue";

interface IuseFiles {
	dataset: Ref<File | null>,
	model: Ref<File | null>,
	test: Ref<string | null>,

}

/*
export default function useFiles(): IuseFiles {
	
	const dataset = ref<string | null>(null);
	const model = ref<string | null>(null);

	const test = ref(null);

	return { dataset, model, test }

}
*/

export default function useFiles(): IuseFiles {

	const state = reactive({
		dataset: null,
		model:   null,
		test:    null,
	})

	// return { ...toRefs(state) }
	return toRefs(state)

}