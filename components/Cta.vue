<script setup>
const props = defineProps({
  title: String,
  description: String,
  buttons: Array
});
</script>

<template>
  <section class="cta-section">
    <div class="cta-content">
      <h2 class="cta-title">{{ title }}</h2>
      <p class="cta-description">{{ description }}</p>
      <div class="cta-buttons">
        <NuxtLink
          v-for="(button, index) in buttons"
          :key="index"
          :to="button.url"
          class="cta-button"
        >
          {{ button.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  background-color: #f9fafb;
  padding: 2.5rem 1.25rem;
  text-align: center;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  color: #0b1c2c;
  margin-bottom: 1rem;
}

.cta-description {
  max-width: 600px;
  margin: 0 auto 2rem;
  font-size: 1.125rem;
  color: #4b5563;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.cta-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #6e8efb;
  color: white;
  text-decoration: none;
  font-weight: 600;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #4e6fd1;
}
</style>
