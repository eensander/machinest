import { reactive, Ref, toRefs } from "vue"

export interface training_method {
    name: string,
    train: void
}

export interface training_method_category {
    name: string;
    methods: training_method[];
}

interface IUseTrainingMethods {
	method_library: Ref<training_method_category[]>,

}

const state = reactive({
	method_library: [
		{
			name: "supervised",
			methods: [
				// (await import('../learning_methods/supervised/linear_regression')).default,
				// (await import('../learning_methods/supervised/linear_regression')).default,
			]
		},
		{
			name: "unsupervised",
			methods: [
				// require('../learning_methods/supervised/linear_regression')
			]
		},
		{
			name: "deep learning",
			methods: [
				// require('../learning_methods/supervised/linear_regression')
			]
		},
	],
})

export default function useTrainingMethods(): IUseTrainingMethods {
	return toRefs(state)
}