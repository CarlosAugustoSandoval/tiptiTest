<script setup lang="ts">
import ToggleDark from '@/components/ToggleDark.vue'
import MdiMenu from "@/components/icons/MdiMenu.vue";
import { GeneralStore } from "@/stores/generalStore";
import AuthIndicator from "@/modules/auth/components/AuthIndicator.vue";

const generalStore = GeneralStore()
const toggleMenu = () => generalStore.setOpenDrawer(!generalStore.openDrawer)

</script>

<template>
  <header class="app-bar">
    <div class="menu">
      <button class="round-button" color="primary" @click="toggleMenu()">
        <MdiMenu />
      </button>
      <div class="name">
        <div class="avatar" style="width: 80px">
          <img src="@/assets/logo.png" />
        </div>
      </div>
    </div>
    <div class="actions">
      <ToggleDark style="margin-right: 12px"/>
      <AuthIndicator />
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as vars;
.app-bar {
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: space-between;
  background-color: map-get(vars.$colors, 'primary');
  padding: 16px;
  z-index: 1;
  top:0;

  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .name {
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin-left: 8px;
  }

  .actions {
    display: flex;
    align-items: center;
  }
}
</style>
