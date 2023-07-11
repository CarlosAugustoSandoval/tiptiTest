<script setup lang="ts">
import {computed, onMounted, ref} from "vue";

interface IProps {
  modelValue: string
  label?: string
  type?: string
}

const props = withDefaults(defineProps<IProps>(), { modelValue: '', label: '', type: 'text' })
const emit = defineEmits<{(event: 'update:modelValue', value:string): void}>()

const model = computed({
  get () {
    return props.modelValue
  },
  set (value: string) {
    emit('update:modelValue', value)
  }
})

const labelElement = ref<Element>()
const focus = () => {
  labelElement.value.classList.add('focus-in')
}

const blur = () => {
  if(!model.value) labelElement.value.classList.remove('focus-in')
}

onMounted(() => {
  labelElement.value = document.getElementById(`input-label-${props.label}`)
})
</script>

<template>
  <div class="input-container">
    <label :id="`input-label-${props.label}`" :for="`input-text-${props.label}`" class="input-label">{{ props.label }}:</label>
    <input v-model="model" :type="props.type" :id="`input-text-${props.label}`" class="input-field" @focus="focus()" @blur="blur()">
  </div>
</template>
