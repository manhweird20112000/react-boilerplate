import { Avatar, Divider, Dropdown, MenuProps } from 'antd'

export function Navbar (){

  const items: MenuProps['items'] = [

    {
      label: 'Logout',
      key: 'logout'
    }
  ]

  return (
    <>
      <div className='h-16 flex items-center justify-end px-4'>
        <Dropdown className={'cursor-pointer'} menu={{ items, onClick: (val) => console.log(val) }}>
          <Avatar size={36} />
        </Dropdown>
      </div>
      <Divider className='m-0' />
    </>
  )
}
