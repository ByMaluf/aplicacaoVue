<template>
  <div>
    <h1>Filmes da Trilogia</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <RouterLink :to="`/movies/${movie.id}`">{{ movie.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const movies = [
  { id: 1, title: "A Sociedade do Anel" },
  { id: 2, title: "As Duas Torres" },
  { id: 3, title: "O Retorno do Rei" },
];
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
}

a {
  color: #3498db;
  text-decoration: none;
}

h1 {
  color: #1e1e1e;
}

a:hover {
  text-decoration: underline;
}
</style>
