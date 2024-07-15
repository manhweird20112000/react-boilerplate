import { BlogDetailPage } from "@/pages";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authenticated/blogs/$blogId")({
  component: BlogDetailPage,
});
