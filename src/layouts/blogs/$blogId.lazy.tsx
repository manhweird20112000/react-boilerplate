import { BlogDetailPage } from "@/pages";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/blogs/$blogId")({
  component: BlogDetailPage,
});
