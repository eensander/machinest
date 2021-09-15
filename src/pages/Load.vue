<template>
  <div>
    <h1>1. Load</h1>

    <p>In this window (...). </p>

    <div>
        <input type="file" @change="file_changed($event)">
        <div>
            <span class="bg-red-400">{{ filename }}</span>
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
export default defineComponent({

	data: () => ({
        filename: null
	}),

    methods: {
        file_changed(event: any) {
            console.log(event)
            this.filename = event.target.files[0].name;
            const file = event.target.files[0];

            const reader = new FileReader();

            console.log(reader.readAsArrayBuffer(file));

            reader.onload = function(e) {
                var arrayBuffer = reader.result;
                console.log(arrayBuffer)

                if (arrayBuffer != null)
                    console.log(arrayBuffer.slice(0, 10))
            }

            // https://www.papaparse.com/
        }
    },

});
</script>

<style scoped lang="scss">

</style>
