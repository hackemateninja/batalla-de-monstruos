<template>
  <Layout>
    <BreadCrumb parent-name="Batallas" parent-route="/batallas" :current-name="`Batalla ${id}`" />

    <h1>Dracula vs Frankenstein</h1>


    <article>
      <div class="grid">
        <img src="https://voyagecomics.com/wp-content/uploads/2023/10/dracula.jpg" alt="dracula">
        <img class="img-losser"
          src="https://www.elcato.org/sites/default/files/styles/story_default-2x/public/images/stories/frankenstein_1931_still.jpg?itok=fWbtE5eG&timestamp=1564416763"
          alt="frankenstein">
      </div>

      <table class="striped">
        <thead class="pico-background-lime-100">
          <tr>
            <th scope="col">Turno</th>
            <th scope="col">Atacante</th>
            <th scope="col">Defensor</th>
            <th scope="col">Daño</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="turn in turns" :key="turn.id">
            <th scope="row">{{ turn.id }}</th>
            <td>{{ turn.attacker }}</td>
            <td>{{ turn.defender }}</td>
            <td>{{ turn.damage }}</td>
          </tr>

        </tbody>

        <tfoot>
          <tr>
            <th scope="row" class="pico-background-lime-100">Ganador:</th>
            <td class="pico-background-lime-100">Dracula</td>
            <td class="pico-background-red-400">Perdedor:</td>
            <td class="pico-background-red-400">Frankenstein</td>
          </tr>
        </tfoot>

      </table>

      <div class="grid">
        <button>Eliminar batalla</button>
      </div>
    </article>
  </Layout>
</template>

<script lang="ts" setup>
import BreadCrumb from '~/components/BreadCrumb.vue';
import Layout from '~/Layout.vue';

const turns = [
  { id: '1', attacker: 'Drácula', defender: 'Frankenstein', damage: 12 },
  { id: '2', attacker: 'Frankenstein', defender: 'Drácula', damage: 18 },
  { id: '3', attacker: 'Drácula', defender: 'Frankenstein', damage: 22 },
  { id: '4', attacker: 'Frankenstein', defender: 'Drácula', damage: 14 },
  { id: '5', attacker: 'Drácula', defender: 'Frankenstein', damage: 30 },
  { id: '6', attacker: 'Frankenstein', defender: 'Drácula', damage: 10 },
  { id: '7', attacker: 'Drácula', defender: 'Frankenstein', damage: 25 },
  { id: '8', attacker: 'Frankenstein', defender: 'Drácula', damage: 9 },
  { id: '9', attacker: 'Drácula', defender: 'Frankenstein', damage: 35 },
  { id: '10', attacker: 'Frankenstein', defender: 'Drácula', damage: 0 },
]


const props = defineProps({
  id: Number
})

</script>

<style scoped>
h1 {
  text-align: center;
}

img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  margin-bottom: 40px;
}

.img-losser {
  filter: grayscale(1) blur(3px);
}

button {
  margin-top: 50px;
  background-color: var(--pico-color-red-450);
  border-color: var(--pico-color-red-450);
}


button:hover {
  background-color: var(--pico-color-red-350);
  border-color: var(--pico-color-red-350);
}
</style>
