<script setup lang="ts">
import { routeDetails, routes } from './routes';


const routeConfig = routes.map(route => {
  return {
    ...route,
    ...routeDetails[route.name as keyof typeof routeDetails],
  };
});

</script>

<template>
  <ul class="menu">
    <li class="menu-item" v-for="(route) in routeConfig" :key="route.name">
      <RouterLink :to="route.path">{{ route.title || route.name }}</RouterLink>
    </li>
  </ul>
  <div class="contanier">
    <RouterView />
  </div>
</template>

<style scoped>
.menu {
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
  display: flex;
  gap: 16px;
}

.menu-item {
  margin: 0;
}

.contanier {
  padding: 16px;
  border-radius: 4px;
}
</style>
