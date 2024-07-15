import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "@/infra/generated/route.gen";
import { useAuth } from "./hooks/use-auth";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: { authentication: undefined! },
});

export function App() {
  const authentication = useAuth();
  return <RouterProvider router={router} context={{ authentication }} />;
}
