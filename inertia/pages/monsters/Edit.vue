<template>
  <Layout>
    <BreadCrumb parent-name="Monstruos" parent-route="/monstruos" :current-name="`Monstruo ${monsterState.id}`" />

    <h1> Edit: {{ monsterState.name }}</h1>

    <main class="grid">
      <FormMonster :monster="monster" @save="updateMonster" />
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

const monsterState = ref({
  id: props.monster.id,
  name: props.monster.name,
  image: props.monster.image,
  life: props.monster.life,
  attack: props.monster.attack,
  defense: props.monster.defense,
  speed: props.monster.speed
})

function updateMonster() {
  router.put(`/monstruos/${props.monster.id}/update`, monsterState.value, {
    onSuccess: () => {
      router.visit('/monstruos')
    }
  })
}
</script>

<style></style>
