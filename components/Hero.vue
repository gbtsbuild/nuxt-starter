<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
  imageAlt: String,
  buttons: Array,
  brand: Object
});
</script>

<template>
 <div class="mb-6" v-if="brand">
  <h1 class="text-5xl font-extrabold" style="color: #0b1c2c">
    {{ brand.main || title }}
  </h1>
  <p class="text-lg text-gray-700 mt-2">
    {{ brand.tagline || description }}
  </p>
</div>
</template>
