<template>
  <Layout>
    <Header title="Monstruos disponibles" url="monstruos/crear" button-title="Agregar Monstruo" />
    <main class="card-container">
      <CardMiniMonster v-for="monster in props.monsters" :key="monster.id" :id="monster.id" :name="monster.name"
        :image="monster.image" :life="monster.life" :defense="monster.defense" />
    </main>
  </Layout>
</template>

<script lang="ts" setup>
import CardMiniMonster from '~/components/CardMiniMonster.vue';
import Header from '~/components/Header.vue';
import Layout from '~/Layout.vue';

import { onMounted } from 'vue';


onMounted(() => {
  console.log(props.monsters)
})



interface Monster {
  id: number
  name: string
  image: string
  life: number
  defense: number
}

const props = defineProps<{ monsters: Monster[] }>()



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
