import { FormItemProps } from 'antd/es/form/FormItem'
import type { FormInstance } from 'antd/es/form/hooks/useForm'
import type { InputProps } from 'antd/es/input'

export type IFieldProps =
  Omit<FormItemProps, 'labelAlign' | 'required' | 'colon' | 'labelCol'>
  & {
  form?: FormInstance,
  inputProps?: InputProps
  onChangeText?(val: string): void
  onFocus?(): void
}
