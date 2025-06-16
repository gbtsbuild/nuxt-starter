<script setup>
import pageData from '@/data/index.json'
const page = ref(pageData)

definePageMeta({
  layout: "default",
});
</script>

<template>
  <Container v-if="page">
    <!-- Hero Section -->
    <Hero
      v-if="page.hero"
      :title="page.hero.title"
      :description="page.hero.description"
      :buttons="page.hero.buttons"
      :brand="page.hero.brand"
    />

    <!-- Brand Section (if using separately) -->
    <Brand
      v-if="page.brand"
      :highlight="page.brand.highlight"
      :tagline="page.brand.tagline"
    />

    <!-- Categories -->
    <Categories
      v-if="page.categories"
      :title="page.categories.title"
      :description="page.categories.description"
      :items="page.categories.items"
    />

    <!-- Features -->
    <Features
      v-if="page.features"
      :title="page.features.title"
      :description="page.features.description"
      :items="page.features.items"
    />

    <!-- Products -->
    <Products
      v-if="page.products"
      :title="page.products.title"
      :description="page.products.description"
      :items="page.products.items"
    />

    <!-- Blog -->
    <Blog
      v-if="page.blog"
      :title="page.blog.title"
      :description="page.blog.description"
      :items="page.blog.items"
    />

    <!-- Call To Action -->
    <Cta
      v-if="page.cta"
      :title="page.cta.title"
      :description="page.cta.description"
      :buttons="page.cta.buttons"
    />

    <!-- Footer -->
    <Footer
      v-if="page.footer"
      :columns="page.footer.columns"
      :bottomLinks="page.footer.bottomLinks"
    />
  </Container>
</template>
