<template>
  <article class="card">
    <div>
      <img :src="image" :alt="name">
    </div>
    <footer>
      <h5>{{ name }}</h5>
      <div>
        <span><strong>Vida:</strong> {{ life }} pts</span>
        <progress value="50" max="100" />
      </div>
      <div>
        <span><strong>defense:</strong> {{ defense }} pts</span>
        <progress value="70" max="100" />
      </div>
      <Link :href="`monstruos/${id}/editar`">Ver mas...</Link>
    </footer>
  </article>

</template>

<script lang="ts" setup>
import { Link } from '@inertiajs/vue3';

interface Props {
  id: number;
  image: string;
  name: string;
  life: number;
  defense: number;
}

const props = defineProps<Props>()
</script>

<style scoped>
.card {
  max-width: 300px;
  display: block;
  margin-top: 20px;
}

img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}

a {
  display: block;
  text-align: center;
  width: 100%;
}
</style>
