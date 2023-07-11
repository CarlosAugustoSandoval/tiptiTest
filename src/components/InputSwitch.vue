<script setup lang="ts">
import {computed} from "vue";

interface IProps {
  modelValue: boolean
  label?: string
}

const props = withDefaults(defineProps<IProps>(), { modelValue: false, label: '' })
const emit = defineEmits<{(event: 'update:modelValue', value:boolean): void}>()

const vModel = computed({
  get () {
    return props.modelValue
  },
  set (value: boolean) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div class="full-container-switch">
    <label class="label-text">{{ props.label }}</label>
    <div class="switch-container">
      <input v-model="vModel" type="checkbox" id="switch" class="switch-input">
      <label for="switch" class="switch-label"></label>
    </div>
  </div>
</template>

<style scoped lang="scss">
.full-container-switch {
  display: flex;
  justify-content: center;
  align-items: center;

  .label-text {
    margin-bottom: 12px;
    margin-right: 6px;
    color: #46606c;
  }
}

.switch-container {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  margin-bottom: 10px;
}

.switch-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  height: 24px;
  background-color: #ccc;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.2s;
  }
}

.switch-input:checked + .switch-label {
  background-color: #2196F3;
}

.switch-input:checked + .switch-label:after {
  transform: translateX(24px);
}
</style>
