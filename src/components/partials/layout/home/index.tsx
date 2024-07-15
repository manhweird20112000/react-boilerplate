import { Link, Outlet } from "@tanstack/react-router";
import { Suspense, useId } from "react";

export function HomeLayout() {
  const id = useId();

  return (
    <div id={id}>
      <Link to="/blogs">Blogs</Link>
      <Link to="/blogs/$blogId" params={{ blogId: "123" }}>
        Post 123
      </Link>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </div>
  );
}
