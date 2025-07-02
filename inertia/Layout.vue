<template>
  <div class="container">
    <nav>
      <ul>
        <li><strong>Batalla de Monstruos</strong></li>
      </ul>
      <ul>
        <li>
          <Link href="/" class="contrast">Inicio</Link>
        </li>
        <li>
          <Link href="/monstruos" class="contrast">Monstruos</Link>
        </li>
        <li>
          <Link href="/batallas" class="contrast">Batallas</Link>
        </li>
      </ul>
    </nav>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { Link } from '@inertiajs/vue3';
</script>

<style></style>
