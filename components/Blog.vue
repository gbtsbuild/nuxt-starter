<template>
  <section class="section-spacing">
    <h2 class="section-title">From Our Blog</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white shadow p-6 rounded-xl">
        <h3 class="text-xl font-semibold mb-2">Top 5 Roofing Materials in 2025</h3>
        <p class="text-zinc-600 mb-4">
          Explore the most durable and cost-effective options for your next building project.
        </p>
        <NuxtLink to="/blog-posts" class="text-emerald-600 font-semibold hover:underline">
          Read More
        </NuxtLink>
      </div>
      <div class="bg-white shadow p-6 rounded-xl">
        <h3 class="text-xl font-semibold mb-2">Why Smart Locks Are Changing Home Security</h3>
        <p class="text-zinc-600 mb-4">
          Learn how keyless entry systems can secure your property and simplify access.
        </p>
        <NuxtLink to="/blog-posts" class="text-emerald-600 font-semibold hover:underline">
          Read More
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
