<template>
  <article>
    <form @submit="onSubmit">
      <label>
        Nombre
        <input v-model="props.monster.name" name="name" required placeholder="Nombre del monstruo" />
      </label>

      <label>
        Vida: <strong>{{ props.monster.life }}pts</strong>
        <input type="range" v-model.number="props.monster.life" min="0" max="100" />
      </label>

      <label>
        Ataque: <strong>{{ props.monster.attack }}pts</strong>
        <input type="range" v-model.number="props.monster.attack" min="0" max="100" />
      </label>

      <label>
        Defensa: <strong>{{ props.monster.defense }}pts</strong>
        <input type="range" v-model.number="props.monster.defense" min="0" max="100" />
      </label>

      <label>
        Velocidad: <strong>{{ props.monster.speed }}pts</strong>
        <input type="range" v-model.number="props.monster.speed" min="0" max="100" />
      </label>

      <label>
        Imagen
        <input v-model="props.monster.image" type="url" required placeholder="Link de la imagen" />
      </label>

      <input type="submit" value="Guardar" />
    </form>
  </article>
</template>

<script lang="ts" setup>

const props = defineProps<{
  monster: {
    name: string
    image: string
    life: number
    attack: number
    defense: number
    speed: number
  }
}>()

const emit = defineEmits(['save'])

function onSubmit(e: Event) {
  e.preventDefault()
  emit('save')
}
</script>

<style></style>
