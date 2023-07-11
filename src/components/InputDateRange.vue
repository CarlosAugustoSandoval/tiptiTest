<script setup lang="ts">
import {computed, watch, ref, WritableComputedRef} from "vue";
interface IProps {
  modelValue: string[]
}

const props = withDefaults(defineProps<IProps>(), { modelValue: [] })
const emit = defineEmits<{(event: 'update:modelValue', value:string[]): void}>()
const modelFrom = ref<string>('')
const modelTo = ref<string>('')

const vModel: WritableComputedRef<string[]> = computed({
  get () {
    return props.modelValue
  },
  set (value: string[]) {
    emit('update:modelValue', value)
  }
})

const resetInputs = () => {
  modelFrom.value = ''
  modelTo.value = ''
}

const dataValidate = () => {
  vModel.value = modelFrom.value || modelTo.value ? [modelFrom.value || '', modelTo.value || ''] : []
}
watch(() => vModel.value, (value) => {
  if(!value.length) resetInputs()
}, { immediate: true })

watch(modelFrom, () => {
  dataValidate()
}, { immediate: true })

watch(modelTo, () => {
  dataValidate()
}, { immediate: true })
</script>

<template>
  <div class="inputs-container">
    <div class="input-container input-container-from">
      <label id="input-label-from" for="date-from" class="input-label focus-in">From:</label>
      <input v-model="modelFrom" :max="modelTo || ''" type="date" id="date-from" class="input-field">
    </div>

    <div class="input-container">
      <label id="input-label-to" for="date-to" class="input-label focus-in">To:</label>
      <input v-model="modelTo" :min="modelFrom || ''" type="date" id="date-to" class="input-field">
    </div>
  </div>
</template>

<style scoped lang="scss">
.inputs-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .input-container-from {
    margin-right: 10px;
  }
}
</style>
