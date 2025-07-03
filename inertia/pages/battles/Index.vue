<template>
  <Layout>
    <Header title="Historial de batallas" url="batallas/crear" button-title="Nueva Batalla" />
    <main class="card-container">
      <CardMiniBattle v-for="battle in battles" :key="battle.id" :id="battle.id" :winner="battle.winner"
        :losser="battle.losser" />
    </main>
  </Layout>
</template>

<script lang="ts" setup>
import CardMiniBattle from '~/components/CardMiniBattle.vue';
import Header from '~/components/Header.vue';
import Layout from '~/Layout.vue';

const battles = [
  {
    id: '1',
    winner: { name: 'Drácula', image: 'https://voyagecomics.com/wp-content/uploads/2023/10/dracula.jpg' },
    losser: { name: 'Frankenstein', image: 'https://www.elcato.org/sites/default/files/styles/story_default-2x/public/images/stories/frankenstein_1931_still.jpg?itok=fWbtE5eG&timestamp=1564416763' },
  },
  {
    id: '2',
    winner: { name: 'Chucky', image: 'https://imageservice.disco.peacocktv.com/uuid/f2c74a87-d049-3e74-b01b-8e09660cc838/LAND_16_9?language=eng&territory=US&proposition=NBCUOTT&version=9998c616-cce1-36a3-9710-8ecbca7b96ac' },
    losser: { name: 'La Momia', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZIaubJRn9IqPsMVOqmnxlx3Oy9dEdfPm3g&s' },
  },
]


</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-top: 50px;
  margin: 0, auto;
}
</style>
