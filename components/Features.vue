<script setup>
const props = defineProps({
  title: String,
  description: String,
  items: Array
});
</script>

<style scoped>
.section-spacing {
  @apply py-16 px-4;
}
.section-title {
  @apply text-3xl font-bold text-center text-zinc-800 sm:text-4xl;
}
</style>

<template>
  <section class="section-spacing">
    <h2 class="section-title" v-if="title">
      {{ title }}
    </h2>
    <p
      class="max-w-3xl mx-auto mt-4 text-lg text-center text-zinc-600">
      v-if="description"
      {{ description }}
    </p>

    <div class="grid gap-8 mt-10 mb-20 md:grid-cols-2">
      <div
        v-for="item of items"
        :key="item.title"
        class="p-8 border border-zinc-200 shadow-sm rounded-xl bg-white">
        <h3 class="text-2xl font-semibold text-zinc-800" v-if="item.title">
          {{ item.title }}
        </h3>
        <p class="mt-2 leading-relaxed text-zinc-600" v-if="item.description">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>
