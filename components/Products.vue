<template>
  <section class="section-spacing">
    <h2 class="section-title" v-if="title">
      {{ title }}
    </h2>
    <p class="max-w-3xl mx-auto mt-4 text-lg text-center text-zinc-600" v-if="description">
      {{ description }}
    </p>

    <div class="grid gap-6 mt-10 mb-20 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="item in items"
        :key="item.title"
        class="rounded-xl overflow-hidden border border-zinc-200 shadow-sm bg-white p-6 hover:shadow-md transition-shadow duration-300"
      >
        <h3 class="text-xl font-semibold text-zinc-800 mb-2" v-if="item.title">
          {{ item.title }}
        </h3>
        <p class="text-zinc-600" v-if="item.description">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  items: Array
});
</script>

<style scoped>
.section-spacing {
  @apply py-4 px-4;
}
.section-title {
  @apply text-3xl font-bold text-center text-zinc-800 sm:text-4xl;
}
</style>
