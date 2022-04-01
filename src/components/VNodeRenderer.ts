// from: https://codesandbox.io/s/1rvmom76m3?file=/src/components/VnodeRenderer.js:0-108

import { defineComponent, h, PropType, VNode } from "vue";

export default defineComponent({
	functional: true,
	props: {
		node: {
			type: Object as PropType<VNode>
		},
	},
	render() {
		return this.node || h('empty');
	},
})