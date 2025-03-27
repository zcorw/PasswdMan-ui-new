<template>
  <form @submit="handleSubmit">
    <slot></slot>
  </form>
</template>

<script lang="ts">
export default {
  name: 'PaForm',
}
</script>
<script setup lang="ts">
import { ref, reactive, provide } from 'vue'
import type { PropType } from 'vue'
import type { LabelPosition, ValidRules } from '../types.d'

const props = defineProps({
  labelWidth: {
    type: [String, Number],
    default: '0',
  },
  labelHide: {
    type: [String, null],
    default: null,
  },
  labelPosition: {
    type: String as PropType<LabelPosition>,
    default: 'right',
  },
  form: {
    type: Object,
    required: true,
    default: () => {},
  },
  rule: {
    type: Object as PropType<ValidRules>,
    default: () => {},
  },
})

provide('labelWidth', props.labelWidth)
provide('labelHide', props.labelHide)
provide('labelPosition', props.labelPosition)

const handleSubmit = (e: Event) => {
  e.preventDefault()
  useValidate(props.form, props.rule)
}
</script>
