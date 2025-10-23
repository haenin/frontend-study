<script setup>
import { RouterLink } from 'vue-router';

</script>
  import {RouterLink, RouterView} from 'vue-router';
<template>
  <header>
    <h2>basic router</h2>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/pathvariable/1">PathVariable</RouterLink>
      <RouterLink to="/querystring?name=홍길동&age=20">QueryString</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped></style>
