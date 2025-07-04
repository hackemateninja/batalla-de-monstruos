<template>
  <article class="grid" :class="activeColor" v-if="monster !== undefined">
    <div>
      <h6>{{ monster.name }}</h6>
      <img :src="monster.image" :alt="monster.name" />
    </div>
    <div class="stats" v-if="monster">
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
    </div>
  </article>
  <article :class="activeColor">
    <strong>Aun no seleccionas nada</strong>
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
  monster?: Monster
  activeColor?: string
}

const { monster } = defineProps<Props>()

</script>

<style scoped>
img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;
}

.stats {
  margin-top: 20px;
}

.article {
  width: 400px;
}
</style>
