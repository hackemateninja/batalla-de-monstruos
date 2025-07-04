<template>
  <Layout>
    <BreadCrumb parent-name="Batallas" parent-route="/batallas" current-name="Crear batalla" />
    <h1>Elije tus personajes para tu siguiente batalla</h1>
    <p>(Haz click en el personaje para elegir)</p>

    <EmptyMessage message="Tienen que haber al menos dos monstruos" v-if="monsters.length <= 2" />

    <div class="grid" v-else>
      <CardDetailMonsterFight :active-color="selectedCard" :monster="monstersSelected[0]" />
      <div class="match">
        <h2>vs</h2>
        <button :disabled="monstersSelected.length < 2">Crear batalla</button>
        <button v-if="monstersSelected.length == 2" class="secondary">Borrar seleccion</button>
      </div>
      <CardDetailMonsterFight :active-color="selectedCard" :monster="monstersSelected[1]" />
    </div>
    <div class="monsters-container">
      <img class="img-mini" :class="selectedCard" :src="monster.image" :alt="monster.name" v-for="monster in monsters"
        :key="monster.id">
    </div>
  </Layout>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue';
import BreadCrumb from '~/components/BreadCrumb.vue';
import CardDetailMonsterFight from '~/components/CardDetailMonsterFight.vue';
import EmptyMessage from '~/components/EmptyMessage.vue';
import Layout from '~/Layout.vue';

interface Monster {
  id: number
  name: string
  image: string
  life: number
  attack: number,
  speed: number,
  defense: number
}

interface Props {
  monsters: Monster[]
}


const { monsters } = defineProps<Props>()

const monstersSelected = reactive<Monster[]>([])

const selectedCard = computed(() => {
  if (monstersSelected.length <= 1) {
    return 'select-first'
  }

  if (monsters.length > 1) {
    return 'select-second'
  }
})



function calculateDamage(attack: number, defense: number) {
  return attack > defense ? attack - defense : 1
}

function simulateBattle(mon1: Monster, mon2: Monster) {
  const m1 = { ...mon1 }
  const m2 = { ...mon2 }
  const turns = []

  let attacker = m1
  let defender = m2

  if (m2.speed > m1.speed || (m2.speed === m1.speed && m2.attack > m1.attack)) {
    attacker = m2
    defender = m1
  }

  while (m1.life > 0 && m2.life > 0) {
    const damage = calculateDamage(attacker.attack, defender.defense)
    defender.life -= damage
    turns.push({ attacker: attacker.name, defender: defender.name, damage })

    if (defender.life <= 0) break

      ;[attacker, defender] = [defender, attacker]
  }

  return {
    monster1: mon1,
    monster2: mon2,
    winner: attacker,
    loser: defender,
    turns
  }
}


</script>

<style scoped>
.monsters-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
}

.img-mini {
  width: 150px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 30px;
}

.grid {
  align-items: center;
}

.match {
  text-align: center;
  width: 200px;
  margin: 0 auto;
}

h2 {
  font-size: 100px;
}

button {
  margin-bottom: 10px;
}

.select-first {
  border-bottom: 5px solid var(--pico-color-yellow-100);
}

.select-second {
  border-bottom: 5px solid var(--pico-color-pumpkin-100);
}
</style>
