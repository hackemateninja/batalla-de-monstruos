<template>
  <Layout>
    <BreadCrumb parent-name="Monstruos" parent-route="/monstruos" :current-name="`Monstruo ${id}`" />

    <h1> Hello monsters edit {{ id }}</h1>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from '~/Layout.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';

const props = defineProps({
  id: Number,
  name: String
})
</script>

<style></style>
