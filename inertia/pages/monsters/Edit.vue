<template>
  <Layout>
    <BreadCrumb parent-name="Monstruos" parent-route="/monstruos" :current-name="`Monstruo ${monsterState.id}`" />

    <h1> Edit: {{ monsterState.name }}</h1>

    <main class="grid">
      <FormMonster v-model:monster="monsterState" @save="updateMonster" />
      <CardDetailMonster :monster="monster" />
    </main>
  </Layout>
</template>

<script lang="ts" setup>
import { router } from '@inertiajs/vue3';
import { reactive } from 'vue';
import Layout from '~/Layout.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';
import CardDetailMonster from '~/components/CardDetailMonster.vue';
import FormMonster from '~/components/FormMonster.vue';


interface Monster {
  id: number
  name: string
  image: string
  life: number
  attack: number
  defense: number
  speed: number
}
const props = defineProps<{ monster: Monster }>()

const monsterState = reactive<Monster>({ ...props.monster })

function updateMonster() {
  console.log(monsterState)
  router.put(`/monstruos/${monsterState.id}/update`, monsterState, {
    onSuccess: () => {
      router.visit('/monstruos')
    }
  })
}
</script>

<style></style>
