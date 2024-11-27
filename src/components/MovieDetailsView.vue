<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import sociedadeDoAnelImage from '@/assets/sociedadeDoAnel.jpg';
import asDuasTorres from '@/assets/asDuasTorres.webp';
import retornoDoRei from '@/assets/oRetornoDoRei.webp';

const route = useRoute();
const movies = [
  {
    id: 1,
    title: "A Sociedade do Anel",
    description: "A jornada começa com Frodo e a Sociedade em direção a Mordor.",
    image: sociedadeDoAnelImage,
  },
  {
    id: 2,
    title: "As Duas Torres",
    description: "A Sociedade se divide e enfrenta batalhas épicas.",
    image: asDuasTorres

  },
  {
    id: 3,
    title: "O Retorno do Rei",
    description: "A batalha final pela Terra-Média enquanto Frodo se aproxima do Monte da Perdição.",
    image: retornoDoRei
  },
];

const movie = computed(() =>
  movies.find((m) => m.id === parseInt(route.params.id))
);
</script>

<template>
  <div class="filme" v-if="movie">
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.description }}</p>
    <img :src="movie.image" alt="A Sociedade do Anel">
    <RouterLink to="/movies">Voltar para Filmes</RouterLink>
  </div>
  <div v-else>
    <p>Filme não encontrado.</p>
    <RouterLink class="voltar" to="/movies">Voltar para Filmes</RouterLink>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  color: #2c3e50;
}

.filme {
  display: grid;
  justify-items: center;
}

p {
  font-size: 1.2rem;
  margin: 1rem 0;
  color: #1e1e1e;
}

img {
  max-width: 100%;
  width: 300px;
  display: block;
}
</style>
