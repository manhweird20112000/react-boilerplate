import { HomeLayout } from "@/components/partials";
import { createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <HomeLayout />
      <TanStackRouterDevtools />
    </>
  ),
});
