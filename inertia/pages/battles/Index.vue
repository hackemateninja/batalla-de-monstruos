<template>
  <Layout>
    <Header title="Historial de batallas" url="batallas/crear" button-title="Nueva Batalla" />
    <main class="card-container">
      <CardMiniBattle />
      <CardMiniBattle />
      <CardMiniBattle />
      <CardMiniBattle />
    </main>
  </Layout>
</template>

<script lang="ts" setup>
import CardMiniBattle from '~/components/CardMiniBattle.vue';
import Header from '~/components/Header.vue';
import Layout from '~/Layout.vue';


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
