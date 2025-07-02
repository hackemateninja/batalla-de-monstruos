<template>
  <Layout>
    <h1> Hello battles edit {{ id }}</h1>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from '~/Layout.vue';

const props = defineProps({
  id: Number
})

</script>

<style></style>
