<template>
  <article>
    <h3>{{ monster.name }}</h3>
    <img :src="monster.image" v-if="monster.image.length > 0" :alt="monster.name" />
    <img
      src="https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small_2x/no-image-available-icon-vector.jpg"
      v-else alt="no image">
    <div>
      <span><strong>Vida:</strong> {{ monster.life }} pts</span>
      <progress :value="monster.life" max="100" />
    </div>
    <div>
      <span><strong>Ataque:</strong> {{ monster.attack }} pts</span>
      <progress :value="monster.attack" max="100" />
    </div>
    <div>
      <span><strong>Defensa:</strong> {{ monster.defense }} pts</span>
      <progress :value="monster.defense" max="100" />
    </div>
    <div>
      <span><strong>Velocidad:</strong> {{ monster.speed }} pts</span>
      <progress :value="monster.speed" max="100" />
    </div>
  </article>
</template>


<script lang="ts" setup>

interface Monster {
  name: string
  image: string
  life: number
  attack: number
  defense: number
  speed: number
}

interface Props {
  monster: Monster
}

const { monster } = defineProps<Props>()

</script>

<style scoped>
img {
  height: 375px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;
}
</style>
