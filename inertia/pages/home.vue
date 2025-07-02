<template>
  <Layout>

    <section class="hero">
      <div class="hook">
        <h1>💀<mark>Batalla de monstruos</mark> 🧛 <br>Full stack con adonis y vue</h1>
        <p>App minimalista para crear monstruos y batallas entre ellos con un par de clicks, si alguna ves tuviste
          curiosidad de quien ganaba? aca esta la respuesta</p>
        <p>Elije tus monstruos favoritos y ponlos a pelear!</p>
        <div class="action">
          <Link role="button" href=" /monstruos">Ver mostruos</Link>
          <Link role="button" class="contrast" data-discover="true" href="/batallas">ver batallas</Link>
        </div>
      </div>

    </section>
  </Layout>
</template>


<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import Layout from '~/Layout.vue';
</script>

<style scoped>
.hero {
  text-align: center;
  min-height: 50vh;
  margin-top: calc(100vh * 0.25);
  margin-bottom: 0;
}

mark {
  font-size: 72px;
  background: -webkit-linear-gradient(#eee, #B2E51A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  line-height: 2em;
  max-width: 60%;
  margin: 0 auto 20px;
}

.action {
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;
}


[role="button"] {
  width: 250px;
  margin: 0 10px;
}
</style>
