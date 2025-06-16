<script setup>
const categories = [
  { name: "Roofings", link: "/roofings", image: "/images/roofings.jpg" },
  { name: "Hand Tools", link: "/hand-tools", image: "/images/hand-tools.jpg" },
  { name: "Locks & Knobs", link: "/locks-knobs", image: "/images/locks-knobs.jpg" },
  { name: "Security Cameras", link: "/security-cameras", image: "/images/security-cameras.jpg" },
  { name: "Appliances", link: "/appliances", image: "/images/appliances.jpg" }
];
</script>

<template>
  <section class="section-spacing">
    <h2 class="section-title">Shop by Category</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="(item, index) in categories"
        :key="index"
        class="rounded-xl overflow-hidden shadow group relative"
      >
        <NuxtImg :src="item.image" :alt="item.name" class="w-full h-64 object-cover" />
        <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h3 class="text-white text-2xl font-bold">{{ item.name }}</h3>
        </div>
        <NuxtLink :to="item.link">
          <button class="absolute bottom-4 right-4 bg-white text-emerald-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-emerald-600 hover:text-white transition">
            Explore
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

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
