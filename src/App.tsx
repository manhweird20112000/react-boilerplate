import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      return (await fetch("/api/todos/1")).json();
    },
  });

  return (
    <>
      <p>{JSON.stringify(data)}</p>
      <Button type="primary">Connect Wallet</Button>
    </>
  );
}

export default App;
