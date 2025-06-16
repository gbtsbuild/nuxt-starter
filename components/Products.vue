<template>
  <section class="section">
    <h2 class="section-title" v-if="title">
      {{ title }}
    </h2>
    <p class="section-description" v-if="description">
      {{ description }}
    </p>

    <div class="cards-grid">
      <div
        v-for="item in items"
        :key="item.title"
        class="card"
      >
        <h3 class="card-title" v-if="item.title">
          {{ item.title }}
        </h3>
        <p class="card-description" v-if="item.description">
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
.section {
  padding: 1rem;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.section-description {
  max-width: 700px;
  margin: 0 auto 2rem;
  text-align: center;
  font-size: 1.1rem;
  color: #555;
}

.cards-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  margin-bottom: 3rem;
}

@media (min-width: 640px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.card-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #222;
}

.card-description {
  color: #555;
  font-size: 1rem;
}
</style>
