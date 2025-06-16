<script setup>
const props = defineProps({
  title: String,
  description: String,
  items: Array
});
</script>

<style scoped>
.section-spacing {
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.section-title {
  font-size: 1.875rem;      /* text-3xl */
  line-height: 2.25rem;     /* text-3xl */
  font-weight: 700;         /* font-bold */
  text-align: center;       /* text-center */
  color: #27272a;           /* text-zinc-800 */
  margin-bottom: 2.5rem;    /* mb-10 */
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
