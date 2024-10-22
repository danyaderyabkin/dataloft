<script setup lang="ts">
defineProps({
  car: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <img :src="car.image" class="card-img-top" :alt="`${car.brand_name} ${car.model_name}`" loading="lazy">
      <div class="card-body">
        <h5 class="card-title"> {{car.name}}</h5>
        <p class="card-text">Объем двигателя: {{car.engine}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>