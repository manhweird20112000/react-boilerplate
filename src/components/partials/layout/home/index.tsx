import { Outlet } from '@tanstack/react-router'
import { Suspense, useId } from 'react'
import { Sidebar } from '../sidebar'
import { Navbar } from '../navbar'

export function HomeLayout () {
  const id = useId()

  return (
    <div id={id} className={''}>
      <Sidebar />
      <main className='w-[calc(100%_-_var(--width-sidebar))] ml-auto min-h-screen'>
        <Navbar />
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}
