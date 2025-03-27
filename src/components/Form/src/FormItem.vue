<template>
  <div class="row mb-3">
    <div v-if="hasLabel" :class="labelClass">
      <component :is="labelFor ? 'label' : 'div'" class="col-form-label" :for="labelFor">
        {{ currentLabel }}
      </component>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import type { LabelPosition } from '../types.d'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  for: {
    type: String,
    default: '',
  },
})
const hasLabel = computed(() => !!props.label)
const labelFor = computed(() => props.for)
const currentLabel = computed(() => {
  return props.label || ''
})

const labelWidth = inject('labelWidth')
const labelHide = inject('labelHide')
const labelPosition = inject<LabelPosition>('labelPosition')

const labelClass = computed(() => {
  const classes = []
  if (labelHide) {
    classes.push('d-none')
    classes.push(`d-${labelHide}-block`)
  }
  if (typeof labelWidth === 'string') {
    classes.push('col-' + labelWidth)
  }
  if (labelPosition) {
    classes.push('text-' + (labelPosition === 'right' ? 'end' : 'start'))
  }
  return classes
})
</script>
