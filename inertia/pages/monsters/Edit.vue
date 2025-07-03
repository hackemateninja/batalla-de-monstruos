<template>
  <Layout>
    <BreadCrumb parent-name="Monstruos" parent-route="/monstruos" :current-name="`Monstruo ${monster.id}`" />


    <div class="grid">
      <h1>Edit: {{ monster.name }}</h1>
      <button @click="deleteMonster">Borrar monstruo</button>
    </div>

    <main class="grid">
      <FormMonster v-model:monster="monsterForm" :is-for-edit="true" @save="updateMonster" />
      <CardDetailMonster :monster="monsterForm" />
    </main>


  </Layout>
</template>

<script lang="ts" setup>
import { router, useForm } from '@inertiajs/vue3'

import Layout from '~/Layout.vue'
import BreadCrumb from '~/components/BreadCrumb.vue'
import CardDetailMonster from '~/components/CardDetailMonster.vue'
import FormMonster from '~/components/FormMonster.vue'

interface Monster {
  id: number
  name: string
  image: string
  life: number
  attack: number
  defense: number
  speed: number
}

interface Props { monster: Monster }

const { monster } = defineProps<Props>()

const monsterForm = useForm({ ...monster })


function updateMonster() {
  monsterForm.put(`/monstruos/${monster.id}/update`)
}


function deleteMonster() {
  router.delete(`/monstruos/${monster.id}/destroy`)
}
</script>

<style scoped>
button {
  background-color: var(--pico-color-red-450);
  border-color: var(--pico-color-red-450);
}


button:hover {
  background-color: var(--pico-color-red-350);
  border-color: var(--pico-color-red-350);
}

main {
  margin-top: 40px;
}
</style>
