import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({
    context,
    location,
  }: {
    context: RouterContext;
    location: { pathname: string };
  }) => {
    const { isLogged } = context.authentication;
    if (!isLogged()) {
      if (location.pathname !== "login") {
        throw redirect({ to: "/login" });
      }
    } else {
      if (location.pathname === "/login") {
        throw redirect({ to: "/" });
      }
    }
  },
});
