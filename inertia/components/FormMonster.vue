<template>
  <article>
    <form v-if="monster" @submit.prevent="emit('save')" @change="emit('update')">
      <label>
        Nombre
        <input v-model="monster.name" name="name" required placeholder="Nombre del monstruo" />
      </label>

      <label>
        Vida: <strong>{{ monster.life }} pts</strong>
        <input type="range" v-model.number="monster.life" min="0" max="100" />
      </label>

      <label>
        Ataque: <strong>{{ monster.attack }} pts</strong>
        <input type="range" v-model.number="monster.attack" min="0" max="100" />
      </label>

      <label>
        Defensa: <strong>{{ monster.defense }} pts</strong>
        <input type="range" v-model.number="monster.defense" min="0" max="100" />
      </label>

      <label>
        Velocidad: <strong>{{ monster.speed }} pts</strong>
        <input type="range" v-model.number="monster.speed" min="0" max="100" />
      </label>

      <label>
        Imagen
        <input v-model="monster.image" type="url" required placeholder="Link de la imagen" />
      </label>

      <input type="submit" value="Guardar" :disabled="isDisabled" />
    </form>
  </article>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';


interface Monster {
  name: string
  image: string
  life: number
  attack: number
  defense: number
  speed: number
}


const monster = defineModel<Monster>('monster')

interface Props {
  isDisabled?: boolean
}

const props = defineProps<Props>()


const emit = defineEmits(['save', 'update'])
</script>
