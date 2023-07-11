<script setup lang="ts">
import {RouterLink} from "vue-router";
import ItemsDrawer from "@/data/ItemsDrawer";
import {computed, onMounted, ref} from "vue";
import { AuthStore } from "@/modules/auth/store";
import itemsDrawer from "@/data/ItemsDrawer";
export interface IItemDrawerProps {
  showText: boolean
}

const teleport = ref(false)
const props = withDefaults(defineProps<IItemDrawerProps>(), {
  showText: true
})

const authStore = AuthStore()
const intemsMenu = computed(() => {
  return authStore.user ? ItemsDrawer : itemsDrawer.filter((item) => item.name !== 'Users')
})

onMounted(() => {
  teleport.value = true
})
</script>

<template>
  <li v-for="(item, itemIndex) in intemsMenu" :key="`ItemDrawer${itemIndex}`" class="li-item-drawer">
    <router-link :to="{ name: item.routeName }">
      <CIcon :name="item.icon" />
      <Transition name="fade">
        <span v-show="props.showText">{{ item.name }}</span>
      </Transition>
    </router-link>
  </li>

  <template v-if="teleport">
    <teleport to=".footer-menu">
      <router-link
          v-for="(item, itemIndex) in ItemsDrawer.filter(x => ['Home', 'About', 'Contact'].find(z => z === x.name))"
          :key="`ItemDrawerButton${itemIndex}`"
          class="link-button" color="success"
          style="margin-left: 12px"
          :to="{ name: item.routeName }"
      >
        {{ item.name }}
      </router-link>
    </teleport>
  </template>
</template>

<style scoped lang="scss">
@use '@/assets/variables' as vars;
li {
  min-width: fit-content;
  cursor: pointer;
  padding-inline-start: 1rem;
  list-style: none;

  &:hover {
    color: map-get(vars.$colors, 'secondary');
    background-color: lighten($color: map-get(vars.$colors, 'dark'), $amount: 5);
  }

  & a {
    display: flex;
    align-items: center;
    column-gap: 0.75rem;
    position: relative;
    padding-block: 0.5rem;
    background-color: transparent;
  }

  a.router-link-exact-active::after {
    content: '';
    position: absolute;
    right: 0;
    width: 0.25rem;
    height: 100%;
    background-color: map-get(vars.$colors, 'secondary');
  }
}
</style>
