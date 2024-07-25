import { createLazyFileRoute } from "@tanstack/react-router";
import React from "react";

const HomePage = React.lazy(() => import("@/pages/home"));

export const Route = createLazyFileRoute("/_authenticated/")({
  component: HomePage,
});
