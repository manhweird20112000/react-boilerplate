import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context }: { context: RouterContext }) => {
    const { isLogged } = context.authentication;
    if (!isLogged()) {
      throw redirect({ to: "/login" });
    }
  },
});
