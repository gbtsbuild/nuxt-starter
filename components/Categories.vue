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
  <section class="category-section">
    <h2 class="section-title">Shop by Category</h2>
    <div class="category-grid">
      <div v-for="(item, index) in categories" :key="index" class="category-card">
        <img :src="item.image" :alt="item.name" class="category-image" />
        <div class="overlay">
          <h3 class="category-name">{{ item.name }}</h3>
          <NuxtLink :to="item.link">
            <button class="explore-button">Explore</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.category-section {
  padding: 1rem;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  color: #27272a;
  margin-bottom: 2.5rem;
}

.category-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.category-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.category-image {
  width: 100%;
  height: 16rem;
  object-fit: cover;
  display: block;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.category-name {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.explore-button {
  background-color: #ffffff;
  color: #059669; /* emerald-600 */
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.explore-button:hover {
  background-color: #059669;
  color: #ffffff;
}
</style>
