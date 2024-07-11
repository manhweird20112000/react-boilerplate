import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/scss/index.scss";
import { ConfigProvider } from "antd";
import { theme } from "@/infra/config/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </ConfigProvider>
);
