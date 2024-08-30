import { Avatar, Divider, Dropdown, MenuProps } from 'antd'
import { useAuth } from '@/hooks/use-auth'
import { useNavigate } from '@tanstack/react-router'

export function Navbar (){

  const { signOut } = useAuth()
  const router = useNavigate({ from: '/' })

  const items: MenuProps['items'] = [
    {
      label: 'Logout',
      key: 'logout'
    }
  ]

  const handleDropDown = async (val: any) => {
    if(val.key === 'logout'){
      signOut()
      await router({ to : '/login' })
    }
  }

  return (
    <>
      <div className='h-16 flex items-center justify-end px-4'>
        <Dropdown className={'cursor-pointer'} menu={{ items, onClick: handleDropDown }}>
          <Avatar size={36} />
        </Dropdown>
      </div>
      <Divider className='m-0' />
    </>
  )
}
