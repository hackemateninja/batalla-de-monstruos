<template>
  <article>
    <div class="images">
      <img class="image-winner" :src="winner.image" :alt="winner.name">
      <div class="badge">
        <div>VS</div>
      </div>
      <img class="image-losser" :src="losser.image" :alt="losser.name">
    </div>
    <div class="resume">
      <h4>{{ winner.name }} vs {{ losser.name }}</h4>
      <div>
        <p class="pico-background-lime-100">Ganador: <strong>{{ winner.name }}</strong></p>
        <p class="pico-background-red-400">Perdedor: <strong>{{ losser.name }}</strong></p>
      </div>
      <Link :href="`/batallas/${id}`">Ver detalles</Link>
    </div>

  </article>
</template>

<script lang="ts" setup>
import { Link } from '@inertiajs/vue3';

interface Monster {
  name: string,
  image: string
}

interface Props {
  id: number,
  winner: Monster,
  losser: Monster
}

const { id, winner, losser } = defineProps<Props>()
</script>

<style scoped>
article {
  display: flex;
  align-items: center;
  justify-content: space-between;

}

a {
  display: block;
  text-align: end;
}

img {
  width: 250px;
  height: 150px;
  object-fit: cover;
}

.images {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #B2E51A;
}

.image-winner {
  margin-bottom: -35px;
}

.image-losser {
  margin-top: -35px;
  filter: grayscale(1) blur(2px);
}

.badge {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  z-index: 20;
  background: radial-gradient(circle, #000, #B2E51A);
}
</style>
