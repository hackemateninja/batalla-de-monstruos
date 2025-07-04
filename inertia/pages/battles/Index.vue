<template>
  <Layout>
    <Header title="Historial de batallas" url="batallas/crear" button-title="Nueva Batalla" />


    <EmptyMessage message="Aun no hay batallas" v-if="battles.length <= 0" />


    <main v-else class="card-container">
      <CardMiniBattle v-for="battle in battles" :key="battle.id" :id="battle.id" :winner="battle.winner"
        :losser="battle.losser" />
    </main>
  </Layout>
</template>

<script lang="ts" setup>
import CardMiniBattle from '~/components/CardMiniBattle.vue';
import EmptyMessage from '~/components/EmptyMessage.vue';
import Header from '~/components/Header.vue';
import Layout from '~/Layout.vue';

interface Monster {
  name: string
  image: string
}

interface Battle {
  id: number
  winner: Monster
  losser: Monster

}

interface Props {
  battles: Battle[]
}

const { battles } = defineProps<Props>()

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
