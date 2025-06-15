<script setup>
const props = defineProps({
  title: String,
  description: String,
  buttons: Array
});
</script>
<template>
  <section class="text-center py-4 px-4 bg-white">
    <div>
      <h1 class="text-5xl font-extrabold" style="color: #6e8efb">GBTS</h1>
      <p class="mt-2 text-lg text-gray-800">Your One-Stop-Shop For Building Materials</p>
    </div>
    <p class="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
      From roofing sheets to appliances and security solutions, GBTS Builders Solution Ltd connects you to top-grade materials for your construction projects.
    </p>
    <div class="mt-8">
      <NuxtLink
        to="/products"
        class="inline-block px-3 py-3 bg-[#6e8efb] text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Shop Now
      </NuxtLink>
    </div>
  </section>
</template>
