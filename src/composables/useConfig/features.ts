import { ref } from "vue"
import { UseConfig } from './index'

const features = ref(null)

export function refreshFeatures(config: UseConfig): void {
	
	// 1. a papa la parse from files.ts (-> create api)? 
	// 2. push returning features onto config
	// 3. profit?

	config.features
}

export default features