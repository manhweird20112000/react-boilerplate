import { HomeLayout } from "@/components/partials";
import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  beforeLoad: () => {
    console.warn("Add Middleware.");
  },
  component: () => (
    <>
      <HomeLayout />
      <TanStackRouterDevtools />
    </>
  ),
});
