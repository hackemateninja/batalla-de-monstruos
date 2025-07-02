<template>
  <article>
    <div class="images">
      <img class="image-winner"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZIaubJRn9IqPsMVOqmnxlx3Oy9dEdfPm3g&s" alt="name">
      <div class="badge">
        <div>VS</div>
      </div>
      <img class="image-losser" src="https://voyagecomics.com/wp-content/uploads/2023/10/dracula.jpg" alt="name">
    </div>
    <div class="resume">
      <h4>Hombre lobo vs Dracula</h4>
      <div>
        <p class="pico-background-jade-350">Ganador: <strong>Hombre lobo</strong></p>
        <p class="pico-background-red-350">Perdedor: <strong>Dracula</strong></p>
      </div>
      <Link href="">Ver detalles</Link>
    </div>

  </article>
</template>

<script lang="ts" setup>
import { Link } from '@inertiajs/vue3';


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
  filter: grayscale(1);
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
