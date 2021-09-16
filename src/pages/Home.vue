<template>
  <div>
    <h1>Home</h1>

    <p>Welcome to <span class="underline">MACHINEST</span>. Our goal is to enable everone to train Machine Learning models in their browser. </p>

    <!-- <button @click="$router.push({name: 'load'})">(1) Start loading data</button> -->
<!--
    <div class="flex flex-row-reverse mt-8">
        <router-link :to="{ name: 'load' }" class="bg-blue-600 px-4 py-1 text-white border-b-4 border-blue-400">Start loading data &gt;</router-link>
    </div> -->

    <div class="flex justify-between mt-8">
        <div class="w-0 h-0 invisible"></div>
        <button @click="$router.push({ name: 'load' });" class="router-btn">
            1. Load &gt;
        </button>
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
