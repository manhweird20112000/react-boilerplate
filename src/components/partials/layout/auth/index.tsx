import { Suspense, useId } from 'react'
import { Outlet } from '@tanstack/react-router'

export function AuthLayout () {
  const id = useId()
  return <div id={id} className={'w-screen h-screen overflow-hidden'}>
    <Suspense>
      <Outlet />
    </Suspense>
  </div>
}
