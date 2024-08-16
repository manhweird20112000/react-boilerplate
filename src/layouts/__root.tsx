import { createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { HomeLayout } from '@/components/partials'

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <HomeLayout />
      <TanStackRouterDevtools />
    </>
  )
})
