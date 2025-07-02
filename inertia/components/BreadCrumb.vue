<template>
  <nav aria-label="breadcrumb">
    <ul>
      <li>
        <Link :href="parentRoute">{{ parentName }}</Link>
      </li>
      <li>{{ currentName }}</li>
    </ul>
  </nav>

</template>

<script lang="ts" setup>
import { Link } from '@inertiajs/vue3';

interface Props {
  parentRoute: string
  parentName: string
  currentName: string
}

const props = defineProps<Props>()
</script>

<style></style>
