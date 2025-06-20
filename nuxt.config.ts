// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  experimental: { appManifest: false },

  modules: ["nuxt-icon", "@nuxt/image"],

  compatibilityDate: "2024-12-18",
});

