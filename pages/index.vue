<script setup lang="ts">
import {useCarsStore} from "~/store/useStore";
const carsStore = useCarsStore();

const loading =ref(true)

onMounted(() => {carsStore.getCars()})
watch(() => carsStore.status, () => {
  if (carsStore.status === 'success') loading.value = false;
})
</script>

<template>
  <main>
    <div class="container py-5">
      <h1 class="text-center mb-5 visually-hidden">Автомобилка</h1>
      <TheLoader v-if="loading"/>
      <CartList v-else :cars="carsStore.cars"/>
    </div>
  </main>
</template>

<style scoped>

</style>