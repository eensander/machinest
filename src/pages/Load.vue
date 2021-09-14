<template>
  <div>
    <h1>1. Load</h1>

    <p>In this window (...). </p>

    <!-- <button @click="$router.push({name: 'load'})">(1) Start loading data</button> -->

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

});
</script>

<style scoped lang="scss">

</style>
