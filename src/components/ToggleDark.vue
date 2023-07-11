<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import MdiBalanceSunny from "@/components/icons/MdiBalanceSunny.vue";
import MdiWeatherNight from "@/components/icons/MdiWeatherNight.vue";

const isDark = useDark({
  selector: 'body',
  attribute: 'theme',
  valueDark: 'custom-dark',
  valueLight: 'custom-light',
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <button class="round-button" color="primary" @click="toggleDark()">
    <MdiBalanceSunny v-if="isDark" />
    <MdiWeatherNight v-else />
  </button>
</template>
