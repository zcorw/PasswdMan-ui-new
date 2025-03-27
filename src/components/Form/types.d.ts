export enum LabelPosition {
  left = 'left',
  right = 'right',
}

export type RequiredRule = {
  required: boolean
  message: string
}
export type PatternRule = {
  pattern: RegExp
  message: string
}
export type ValidRule = {
  validator: (value: unknown) => boolean | Promise<boolean>
  message: string
}
export type Rule = RequiredRule | PatternRule | ValidRule
export type ValidRules = Record<string, Rule[]>
