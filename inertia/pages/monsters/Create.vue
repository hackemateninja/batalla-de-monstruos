<template>
  <Layout>
    <BreadCrumb parent-name="Monstruos" parent-route="/monstruos" current-name="Crear monstruo" />

    <h1>Una nueva terrorifica creacion</h1>

    <main class="grid">
      <FormMonster v-model:monster="monster" @save="saveMonster" />
      <CardDetailMonster :monster="monster" />
    </main>
  </Layout>
</template>

<script lang="ts" setup>
import { router } from '@inertiajs/vue3';
import { ref } from 'vue';
import Layout from '~/Layout.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';
import CardDetailMonster from '~/components/CardDetailMonster.vue';
import FormMonster from '~/components/FormMonster.vue';

const monster = ref({
  name: '',
  image: '',
  life: 50,
  attack: 50,
  defense: 50,
  speed: 50
})

function saveMonster() {
  router.post('/monstruos/store', monster.value, {
    onSuccess: () => {
      router.visit('/monstruos')
    }
  })
}

</script>

<style scoped></style>
