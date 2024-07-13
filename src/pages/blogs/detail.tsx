import { useNavigate, useParams, useSearch } from "@tanstack/react-router";

export function BlogDetailPage() {
  const params = useParams({ from: "/blogs/$blogId" });
  const router = useNavigate();
  const search = useSearch({ strict: false });
  console.log(search);
  console.log(params);
  return <div onClick={() => router({ from: "/" })}>OK</div>;
}
