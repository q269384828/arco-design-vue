<script setup lang="ts">
import { useRoute } from 'vue-router';
import { routeDetails, routes } from './routes';


const routeConfig = routes.map(route => {
  return {
    ...route,
    ...routeDetails[route.name as keyof typeof routeDetails],
  };
});

const currentRoute = useRoute()

</script>

<template>
  <div class="page-header">
    <ul class="menu">
      <li class="menu-item" :class="{
        selected: currentRoute.name === route.name
      }" v-for="(route) in routeConfig" :key="route.name">
        <RouterLink :to="route.path">{{ route.title || route.name }}</RouterLink>
      </li>
    </ul>

  </div>
  <div class="contanier">
    <RouterView />
  </div>
</template>

<style scoped>
.page-header {
  padding: 16px;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 24px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
  display: flex;
  gap: 24px;
  align-items: center;
}

.menu-item {
  margin: 0;
  font-size: 16px;
  transition: color 0.3s ease, transform 0.2s ease;

  a {
    text-decoration: none;
    color: #333;
  }

  &:hover a {
    color: #007bff;
    transform: scale(1.1);
  }

  &.selected a {
    font-weight: bold;
    color: #0056b3;
    border-bottom: 2px solid #0056b3;
  }
}

.contanier {
  padding: 16px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}
</style>
