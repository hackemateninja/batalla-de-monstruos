<template>
  <Layout>
    <Header title="Monstruos disponibles" url="monstruos/crear" button-title="Agregar Monstruo" />

    <EmptyMessage message="Aun no hay monstruos" v-if="monsters.length <= 0" />

    <main v-else class="card-container">
      <CardMiniMonster v-for="monster in monsters" :key="monster.id" :id="monster.id" :name="monster.name"
        :image="monster.image" :life="monster.life" :defense="monster.defense" />

    </main>


  </Layout>
</template>

<script lang="ts" setup>
import CardMiniMonster from '~/components/CardMiniMonster.vue';
import EmptyMessage from '~/components/EmptyMessage.vue';
import Header from '~/components/Header.vue';
import Layout from '~/Layout.vue';


interface Monster {
  id: number
  name: string
  image: string
  life: number
  defense: number
}

interface Props {
  monsters: Monster[]
}



const { monsters } = defineProps<Props>()


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
