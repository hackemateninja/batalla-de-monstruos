<template>
  <Layout>
    <BreadCrumb parent-name="Batallas" parent-route="/batallas" current-name="Batalla" />

    <h1> Hello battles edit {{ id }}</h1>
  </Layout>
</template>

<script lang="ts" setup>
import BreadCrumb from '~/components/BreadCrumb.vue';
import Layout from '~/Layout.vue';

const props = defineProps({
  id: Number
})

</script>

<style></style>
