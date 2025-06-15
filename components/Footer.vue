<template>
  <footer class="footer">
    <div class="footer-links">
      <NuxtLink to="/about-us">About Us</NuxtLink>
      <NuxtLink to="/contact-us">Contact Us</NuxtLink>
      <NuxtLink to="/return-policy">Return Policy</NuxtLink>
      <NuxtLink to="/faq">FAQ</NuxtLink>
      <NuxtLink to="/terms">Terms of Service</NuxtLink>
      <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
      <NuxtLink to="/blog-posts">Blog</NuxtLink>
    </div>

    <address>
      Shop 1 Jubilee Market, Ikare Akoko 342211, Ondo State, Nigeria.
      <br />
      Email:
      <a href="mailto:ask@gbtsbuildingmaterials.com">
        ask@gbtsbuildingmaterials.com
      </a>
      <br />
      Phone: <a href="tel:+2347017742003">+2347017742003</a>
    </address>

    <div class="social-media">
      <a
        href="https://facebook.com/profile.php?id=61575683557550"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-facebook-f"></i>
      </a>
      <a
        href="https://x.com/gbtsstores"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-twitter"></i>
      </a>
      <a
        href="https://instagram.com/gbtsstores"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-instagram"></i>
      </a>
      <a
        href="https://pinterest.com/gbtsstores"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-pinterest"></i>
      </a>
      <a
        href="https://wa.me/7017742003"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>

    <p class="copyright">
      © 2025 GBTS Builders Solution Ltd.
    </p>
  </footer>
</template>

<script setup>
// No script needed currently
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 40px 20px;
  background-color: #2c3e50;
  color: #a7ffeb;
  border-radius: 10px;
  margin-top: 60px;
  font-size: 0.95rem;
}

.footer a {
  color: #a7ffeb;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.footer-links {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.social-media {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
  font-size: 1.2rem;
}
</style>
