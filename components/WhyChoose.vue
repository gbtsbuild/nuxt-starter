<template>
  <section class="section-spacing">
    <h2 class="section-title">Why Choose GBTS?</h2>
    <div class="feature-grid">
      <div class="feature-item">
        <i class="fas fa-truck"></i>
        <h3>Fast Delivery</h3>
        <p>Nationwide delivery of all materials at unbeatable speed.</p>
      </div>
      <div class="feature-item">
        <i class="fas fa-check-circle"></i>
        <h3>Quality Assurance</h3>
        <p>We sell genuine and durable building products.</p>
      </div>
      <div class="feature-item">
        <i class="fas fa-headset"></i>
        <h3>24/7 Support</h3>
        <p>Our experts are always ready to help with your inquiries.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-spacing {
  @apply py-4 px-4;
}

.section-title {
  @apply text-3xl font-bold text-center text-zinc-800 mb-10;
}

.feature-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-8 text-center;
}

.feature-item i {
  @apply text-4xl text-emerald-500 mb-4;
}

.feature-item h3 {
  @apply text-xl font-semibold mb-2;
}

.feature-item p {
  @apply text-zinc-600;
}
</style>
