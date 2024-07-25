import { GetProp, Menu, MenuProps } from 'antd'
import {
  CalendarOutlined,
  MailOutlined
} from '@ant-design/icons'
import { useState } from 'react'
import { useAppStore } from '@/store/app.ts'

type MenuItem = GetProp<MenuProps, 'items'>[number];

export function Sidebar (){

  const theme = useAppStore((state) => state.theme)

  const [selectedKeys, setSelectedKeys] = useState<string[]>(['1'])

  const items : MenuItem[] = [
    {
      key: '1',
      icon: <MailOutlined />,
      label: 'Navigation One'
    },
    {
      key: '2',
      icon: <CalendarOutlined />,
      label: 'Navigation Two'
    }
  ]

  return (
    <Menu
      mode={'vertical'}
      className='w-[var(--width-sidebar)] h-screen fixed inset-y-0 left-0'
      items={items}
      selectedKeys={selectedKeys}
      theme={theme}
      onSelect={(val) => setSelectedKeys(val.selectedKeys)}
    />
  )
}
