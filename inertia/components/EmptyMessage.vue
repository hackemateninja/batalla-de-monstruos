<template>
  <div>
    <h2 class="empty-title">☠️ {{ message }} ☠️</h2>
  </div>

</template>

<script lang="ts" setup>

interface Props {
  message: string
}

const { message } = defineProps<Props>()
</script>

<style scoped>
.empty-title {
  text-align: center;
  margin-top: 250px;
  color: var(--pico-color-slate-300);
}
</style>
