import { IFieldProps } from './index.props.ts'
import { Form, Input } from 'antd'

export function TextField ({ form, inputProps,onChangeText,onFocus,...rest }: IFieldProps) {

  const clearValidate = () => {
    if(rest.name && form){
      form.setFields([
        {
          name: rest.name,
          value: form.getFieldValue(rest.name),
          errors: []
        }
      ])
    }
    if(onFocus){
      onFocus()
    }
  }

  const onChange = (event: any) => {
    if(onChangeText){
      onChangeText(event.target.value)
    }
  }

  return (
    <Form.Item
      colon={false}
      labelAlign={'left'}
      labelCol={{ span: 24 }}
      className={'form--field'}
      required={false}
      {...rest}
    >
      {
        inputProps?.type === 'password'
        ? <Input.Password size={'large'} {...inputProps} onFocus={clearValidate} onChange={onChange} />
        : <Input size={'large'} {...inputProps} onFocus={clearValidate} onChange={onChange} />
      }

    </Form.Item>
  )
}
