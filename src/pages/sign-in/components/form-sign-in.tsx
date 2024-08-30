import { Button, Form } from 'antd'
import { useMemo } from 'react'
import { useTranslate } from '@/hooks/use-translate.ts'
import { TextField } from '@/components/common'
import { useNavigate } from '@tanstack/react-router'
import { useAuth } from '@/hooks/use-auth'


export function FormSignIn (){

  const [form] = Form.useForm()
  const { translate } = useTranslate()
  const { signIn } = useAuth()
  const router = useNavigate({ from: '/login' })

  const rules : FormRules<ISignInDTO> = useMemo(() => {
    return {
      email: [
        {
          required: true,
          message: translate('common.required_if', { _field_: translate('sign-in.email') })
        },
        {
          type: 'email',
          message: translate('common.email')
        }
      ],
      password: [
        {
          required: true,
          message: translate('common.required_if', { _field_: translate('sign-in.password') })
        }
      ]

    }
  }, [])

  const onFinish = async () => {
    signIn()
    await router({ to: '/' })
  }

  return (
    <Form
      form={form}
      autoComplete={'off'}
      initialValues={{ email: '', password: '' }}
      validateTrigger={'onBlur'}
      onFinishFailed={() => console.log('finish failed')}
      onFinish={onFinish}

    >
      <TextField
        label={translate('sign-in.email')}
        name={'email'}
        rules={rules.email}
        form={form}
      />

      <TextField
        label={translate('sign-in.password')}
        name={'password'}
        rules={rules.password}
        form={form}
        inputProps={{
          placeholder: '+6 characters',
          type: 'password'
        }}
      />
      <Button type={'primary'} size={'large'} className={'w-full mt-3'} htmlType={'submit'}>Sign in</Button>
    </Form>
  )
}
