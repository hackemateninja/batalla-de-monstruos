<template>
  <div class="header">
    <h1>{{ title }}</h1>

    <Link :href="url" role="button">
    {{ buttonTitle }}
    </Link>
  </div>
</template>

<script lang="ts" setup>
import { Link } from '@inertiajs/vue3';

interface Props {
  title: string;
  url: string;
  buttonTitle: string;
}

const { title, url, buttonTitle } = defineProps<Props>();
</script>

<style scoped>
.header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}

a {
  width: 250px;
}
</style>
