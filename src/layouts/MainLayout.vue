<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppBar from "@/components/layout/AppBar.vue";
import MainDrawer from "@/components/layout/MainDrawer.vue";
import FooterApp from "@/components/layout/FooterApp.vue";
</script>

<template>
  <div class="layout">
    <AppBar />
    <main class="content">
      <MainDrawer />
      <div class="main-content">
        <router-view />
      </div>
    </main>
    <FooterApp />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
  display: flex;
}

.main-content {
  flex-grow: 1;
  padding: 16px;
}
</style>
