import { createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { RootLayout } from '@/components/partials'

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    return (
      <>
        <RootLayout />
        <TanStackRouterDevtools />
      </>
    )
  }
})
