<template>
  <Layout>
    <BreadCrumb parent-name="Monstruos" parent-route="/monstruos" :current-name="`Monstruo ${monsterState.id}`" />


    <div class="grid">
      <h1>Edit: {{ monsterState.name }}</h1>
      <button @click="deleteMonster">Borrar monstruo</button>
    </div>

    <main class="grid">
      <FormMonster v-model:monster="monsterState" :is-disabled="isDisabled" @save="updateMonster"
        @update="enableForm" />
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

const isDisabled = ref(true)


function enableForm() {
  isDisabled.value = false
}


function updateMonster() {
  router.put(`/monstruos/${monsterState.id}/update`, monsterState, {
    onSuccess: () => {
      router.visit('/monstruos')
    }
  })
}


function deleteMonster() {
  router.delete(`/monstruos/${monsterState.id}/destroy`)
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
