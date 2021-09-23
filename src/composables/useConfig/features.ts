import { Ref, ref } from "vue"
import { Feature } from "../types"
import { UseConfig } from './index'

export type FeaturesConfig = { features: Ref<Feature[] | null> }

const features = ref(null)

export function refreshFeatures(config: UseConfig): void {
	
	// 1. a papa la parse from files.ts (-> create api)? 
	// 2. push returning features onto config
	// 3. profit?

	// config.features
	console.log(features)
}

export default features