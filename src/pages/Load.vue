<template>
  <div>
    <h1>1. Load</h1>

    <p>In this window (...). </p>

    <div>
        <input type="file" @change="file_changed($event)">
        <div>
            <span class="bg-red-400">{{ filename }}</span>
            <span class="bg-red-400">{{ progress }}</span>
        </div>
    </div>

    <div class="flex justify-between mt-8">
        <router-link :to="{ name: 'home' }" class=" bg-blue-600 px-4 py-1 text-white border-b-4 border-blue-400">
            &#xff1c; Home
        </router-link>
        <div class="w-0 h-0 invisible"></div>
        <router-link :to="{ name: 'load' }" class=" bg-blue-600 px-4 py-1 text-white border-b-4 border-blue-400">
            2. Feature Selection &#xff1e;
        </router-link>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Papa from 'papaparse';

export default defineComponent({

	data: () => ({
        filename: null,
        progress: "idle"
	}),

    methods: {
        file_changed(e: Event) {
            const target = <HTMLInputElement>e.target;
            if (target == null || target.files == null) {
                return;
            }

            if (target.files.length !== 1) {
                return; // invalid amount of files (or input removed?)
            }

            console.log(e)
            // this.filename = event.target.files[0].name;
            const file = target.files[0];

            

            Papa.parse(file, {
				error: (err, file) =>
				{
					this.progress = "errored";
					console.log("ERROR:", err, file);
				},
				complete: () =>
				{
                    this.progress = "completed";
				}
            });

            // https://www.papaparse.com/
        }
    },

});
</script>

<style scoped lang="scss">

</style>
