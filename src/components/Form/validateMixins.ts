import { provide, inject } from 'vue'
import type { ValidRules, Rule } from './types.d'

export function useValidate(rules: ValidRules, form: Record<string, unknown>) {
  const formItemEvents: Record<string, (message: string) => void> = {}

  provide('setValidate', (key: string, event: (message: string) => void) => {
    formItemEvents[key] = event
  })
  provide('removeValidate', (key: string) => {
    delete formItemEvents[key]
  })
  async function validate(rules: Rule[], value: unknown, key: string) {
    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i]
      if ('required' in rule) {
        if (value === undefined || value === null) {
          throw new Error(rule.message)
        }
        if (typeof value === 'string' && value === '') {
          throw new Error(rule.message)
        }
        if (Array.isArray(value) && value.length === 0) {
          throw new Error(rule.message)
        }
      }
      if ('pattern' in rule) {
        if (typeof value !== 'string') {
          throw new Error(key + ' must be string')
        }
        if (!rule.pattern.test(value)) {
          throw new Error(rule.message)
        }
      }
      if ('validator' in rule) {
        const result = rule.validator(value)
        if (typeof result === 'boolean' && !result) {
          throw new Error(rule.message)
        }
        if (result instanceof Promise) {
          await result
        }
      }
    }
  }
  provide('validate', (key: string) => {
    if (!rules[key]) {
      return
    }
  })

  return formItemEvents
}
