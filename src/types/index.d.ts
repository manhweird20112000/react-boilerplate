import type { Rule } from 'rc-field-form/lib/interface'

declare global {
  interface RouterContext {
    authentication: AuthContext;
  }
  interface IAuth {
    name: string;
  }

  type FormRules<T> = Partial<Record<keyof T, Rule[]>>
}
export {}
