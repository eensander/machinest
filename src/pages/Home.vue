<template>
  <div>
    <h1 class="text-red-500">HOME</h1>

    <button @click="$router.push({name: 'load'})">(1) Start loading data</button>
    <router-link :to="{ name: 'load' }">(2) Start loading data</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({

});
</script>

<style scoped lang="scss">

</style>
