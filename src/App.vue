<template>
  <div class="d-flex">
    <Sidebar />
    <div class="flex-grow-1">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
</script>

<style>

.chart-small {
  width: 150px ;
  height: 150px;
}
</style>
