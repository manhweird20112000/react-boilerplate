import { Outlet } from "@tanstack/react-router";
import { Suspense, useEffect, useId } from "react";

export function HomeLayout() {
  const id = useId();

  return (
    <div id={id}>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </div>
  );
}
