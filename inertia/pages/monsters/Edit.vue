<template>
  <Layout>
    <BreadCrumb parent-name="Monstruos" parent-route="/monstruos" :current-name="`Monstruo ${props.monster.name}`" />

    <h1> Hello monsters edit {{ 1 }}</h1>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from '~/Layout.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';


interface Monster {
  id: number
  name: string
  image: string
  life: number
  defense: number
}
const props = defineProps<{ monster: Monster }>()
</script>

<style></style>
