import { FormSignIn } from './components/form-sign-in.tsx'
import { Typography } from 'antd'

export default function SignInPage (){
  return (
    <div className={'w-full h-full flex items-stretch md:p-0 p-4'}>
      <figure className={'w-2/5 md:block hidden'}>
        <img className={'w-full h-full object-cover object-center'} src={'https://images.unsplash.com/photo-1593994602837-530142086918?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt={''} />
      </figure>
      <div className={'flex items-center justify-center md:w-3/5 w-full'}>
        <div className={'md:w-[420px] w-full'}>
          <Typography.Title level={3}>Sign in to your account</Typography.Title>
          <div className={'mb-5'}>
            <Typography.Text type='secondary'>Don’t have an account?</Typography.Text>
            <Typography.Link className={'ml-1'}>
              Get started
            </Typography.Link>
          </div>
          <FormSignIn/>
        </div>
      </div>
    </div>
  )
}
