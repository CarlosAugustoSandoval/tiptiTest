<script setup lang="ts">
import {computed} from 'vue';
import { RouterLink } from 'vue-router';
import { GeneralStore } from "@/stores/generalStore";
import ItemDrawer from "@/components/layout/ItemDrawer.vue";

const generalStore = GeneralStore()
const isSidebarOpen = computed(() => generalStore.openDrawer)


</script>

<template>
  <div class="wrapper">
    <aside :vue:is-open="isSidebarOpen">
      <ul>
        <ItemDrawer :show-text="isSidebarOpen" />
      </ul>
      <div id="content-logout"></div>
    </aside>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as vars;

$sidebar-width: 4rem;

aside {
  color: map-get(vars.$colors, 'primary');
  background: map-get(vars.$colors, 'dark');
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-block: 1rem;
  transition: all 300ms;
  width: $sidebar-width;

  #content-logout{
    margin-top: 20px;
  }
}

aside[vue\:is-open=true] {
  width: 3 * $sidebar-width;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-block-end: 1rem;
  padding: 0;
}
</style>
