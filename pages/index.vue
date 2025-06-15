<script setup>
import pageData from '@/data/index.json'
const page = ref(pageData)

definePageMeta({
  layout: "default",
});
</script>

<template>
  <Container>
    <Hero
      :title="page.hero.title"
      :description="page.hero.description"
      :image="page.hero.image"
      :imageAlt="page.hero.imageAlt"
      :buttons="page.hero.buttons"
    />

    <Brand
      :highlight="page.brand.highlight"
      :tagline="page.brand.tagline"
    />

    <Categories
      :title="page.categories.title"
      :description="page.categories.description"
      :items="page.categories.items"
    />

    <Features
      :title="page.features.title"
      :description="page.features.description"
      :items="page.features.items"
    />

    <Products
      :title="page.products.title"
      :description="page.products.description"
      :items="page.products.items"
    />

    <Blog
      :title="page.blog.title"
      :description="page.blog.description"
      :items="page.blog.items"
    />

    <Cta
      :title="page.cta.title"
      :description="page.cta.description"
      :buttons="page.cta.buttons"
    />

    <Footer
      :columns="page.footer.columns"
      :bottomLinks="page.footer.bottomLinks"
    />
  </Container>
</template>
