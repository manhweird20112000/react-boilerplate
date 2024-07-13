import { BlogsPage } from "@/pages";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/blogs/")({
  component: BlogsPage,
});
