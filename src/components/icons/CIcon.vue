<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const icons = {
  MdiAccountGroup: defineAsyncComponent(() => import('@/components/icons/MdiAccountGroup.vue')),
  MdiHospitalBuilding: defineAsyncComponent(() => import('@/components/icons/MdiHospitalBuilding.vue')),
  MdiCardAccountMailOutline: defineAsyncComponent(() => import('@/components/icons/MdiCardAccountMailOutline.vue')),
  MdiInformation: defineAsyncComponent(() => import('@/components/icons/MdiInformation.vue')),
  MdiStar: defineAsyncComponent(() => import('@/components/icons/MdiStar.vue')),
  MdiStarOutline: defineAsyncComponent(() => import('@/components/icons/MdiStarOutline.vue')),
  MdiTable: defineAsyncComponent(() => import('@/components/icons/MdiTable.vue')),
  MdiCardBulleted: defineAsyncComponent(() => import('@/components/icons/MdiCardBulleted.vue')),
  MdiCellphoneCheck: defineAsyncComponent(() => import('@/components/icons/MdiCellphoneCheck.vue')),
  MdiWhatsapp: defineAsyncComponent(() => import('@/components/icons/MdiWhatsapp.vue')),
}
interface Props {
  name: string
  color?: string
  size?: string | number
}
const props = withDefaults(defineProps<Props>(), {
  color: '',
  name: '',
  size: 24
})
</script>

<template>
  <component :is="icons[props.name]" class="icon-svg" :style="`width: ${props.size}px; color:${props.color}`"/>
</template>

<style scoped lang="scss">
.icon-svg {
  width: 100%;
  height: auto;
  fill: currentColor;
}
</style>
