import { useNavigate, useParams, useSearch } from "@tanstack/react-router";

export default function BlogDetailPage() {
  const params = useParams({ from: "/_authenticated/blogs/$blogId" });
  const router = useNavigate();
  const search = useSearch({ strict: false });
  console.log(search);
  console.log(params);
  return <div onClick={() => router({ from: "/" })}>OK</div>;
}
