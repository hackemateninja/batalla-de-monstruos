<template>
  <Layout>
    <BreadCrumb parent-name="Monstruos" parent-route="/monstruos" :current-name="`Monstruo ${monsterState.id}`" />

    <h1>Edit: {{ monsterState.name }}</h1>

    <main class="grid">
      <FormMonster v-model:monster="monsterState" :is-disabled="isDisable" @save="updateMonster" @update="enableForm" />
      <CardDetailMonster :monster="monsterState" />
    </main>
  </Layout>
</template>

<script lang="ts" setup>
import { router } from '@inertiajs/vue3'
import { reactive, ref } from 'vue'

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

const props = defineProps<{ monster: Monster }>()

const monsterState = reactive<Monster>({ ...props.monster })

const isDisable = ref(true)


function enableForm() {
  isDisable.value = false
}


function updateMonster() {
  router.put(`/monstruos/${monsterState.id}/update`, monsterState, {
    onSuccess: () => {
      router.visit('/monstruos')
    }
  })
}
</script>
