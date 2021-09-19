import { Ref, reactive, toRefs } from "vue";

interface IUseFiles {
	dataset: Ref<File | null>,
	model: Ref<File | null>,
	test: Ref<string | null>,
}

const state = reactive({
	dataset: null,
	model:   null,
	test:    null,
})

export default function useFiles(): IUseFiles {
	return toRefs(state)
}