import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Suspense } from "react";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/blogs" className="[&.active]:font-bold">
          Blogs
        </Link>
        <Link to="/blogs/1" className="[&.active]:font-bold">
          Blogs/sjahdfv
        </Link>
      </div>
      <hr />
      <Suspense>
        <Outlet />
      </Suspense>
      <TanStackRouterDevtools />
    </>
  ),
});
