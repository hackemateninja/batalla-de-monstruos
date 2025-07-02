<template>
  <Layout>
    <Header title="Monstruos disponibles" url="monstruos/crear" button-title="Agregar Monstruo" />
    <main class="card-container">
      <CardMiniMonster v-for="monster in monsters" :key="monster.id" :id="monster.id" :name="monster.name"
        :image="monster.image" :life="monster.life" :defense="monster.defense" />
    </main>
  </Layout>
</template>

<script lang="ts" setup>
import CardMiniMonster from '~/components/CardMiniMonster.vue';
import Header from '~/components/Header.vue';
import Layout from '~/Layout.vue';

import { ref } from 'vue';


const monsters = ref([
  {
    id: 1,
    image: 'https://voyagecomics.com/wp-content/uploads/2023/10/dracula.jpg',
    name: 'Drácula',
    life: 90,
    defense: 70,
  },
  {
    id: 2,
    image: 'https://www.elcato.org/sites/default/files/styles/story_default-2x/public/images/stories/frankenstein_1931_still.jpg?itok=fWbtE5eG&timestamp=1564416763',
    name: 'Frankenstein',
    life: 100,
    defense: 60,
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZIaubJRn9IqPsMVOqmnxlx3Oy9dEdfPm3g&s',
    name: 'Hombre Lobo',
    life: 80,
    defense: 50,
  },
  {
    id: 4,
    image: 'https://i0.wp.com/www.tomosygrapas.com/wp-content/uploads/2024/12/Mummy-Banner.jpg?resize=747%2C421&ssl=1',
    name: 'La Momia',
    life: 85,
    defense: 65,
  },
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPMi7OCm7iJ_cmkbtGvxciUnWb5OnazdfJ4A&s',
    name: 'Criatura del Lago',
    life: 75,
    defense: 55,
  },
  {
    id: 6,
    image: 'https://imageservice.disco.peacocktv.com/uuid/f2c74a87-d049-3e74-b01b-8e09660cc838/LAND_16_9?language=eng&territory=US&proposition=NBCUOTT&version=9998c616-cce1-36a3-9710-8ecbca7b96ac',
    name: 'Chucky',
    life: 60,
    defense: 40,
  },
  {
    id: 7,
    image: 'https://m.media-amazon.com/images/S/pv-target-images/e28a0250e8ed49c92c7fa1f6b05f4882c63916522cb2897a251ac147002e0597.png',
    name: 'Jason Voorhees',
    life: 95,
    defense: 80,
  },
])




</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-top: 50px;
  margin: 0, auto;
}
</style>
