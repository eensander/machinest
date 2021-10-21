import { ref } from "vue";
import { Trainer } from "./trainer";

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