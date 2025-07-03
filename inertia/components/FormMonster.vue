<template>
  <article>
    <form v-if="monster" @submit.prevent="emit('save')" @change="isDisabled = false">
      <label>
        Nombre
        <input v-model="monster.name" name="name" placeholder="Nombre del monstruo" aria-describedby="invalid-helper" />
        <small v-if="monster.errors.name" id="invalid-helper" class="pico-color-red-450">
          {{ monster.errors.name }}
        </small>
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
        <input v-model="monster.image" type="url" placeholder="Link de la imagen" />
        <small v-if="monster.errors.image" id="invalid-helper" class="pico-color-red-450">
          {{ monster.errors.name }}
        </small>
      </label>

      <input type="submit" value="Guardar" :disabled="isDisabled" />
    </form>
  </article>
</template>

<script setup lang="ts">
import type { InertiaForm } from '@inertiajs/vue3';
import { defineModel, ref } from 'vue';


type Monster = {
  name: string
  image: string
  life: number
  attack: number
  defense: number
  speed: number
}

interface Props {
  isForEdit?: boolean
}

const { isForEdit } = defineProps<Props>()

const monster = defineModel<InertiaForm<Monster>>('monster')



const isDisabled = ref(isForEdit ?? false)


const emit = defineEmits(['save'])
</script>
