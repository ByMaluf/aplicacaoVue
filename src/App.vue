<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="containerGeral">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/movies">Filmes</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
header {
  padding: 1rem;
  background-color: #2c3e50;
}

.containerGeral {
  background-color: #ecf0f1;
}

nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

nav a {
  color: #ecf0f1;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

main {
  padding: 2rem;
}
</style>
