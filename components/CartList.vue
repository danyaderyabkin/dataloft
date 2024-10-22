<script setup lang="ts">
defineProps({
  cars: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    <CartItem v-for="car in cars" :key="car.id" :car="car"/>
  </div>
</template>

<style scoped>

</style>