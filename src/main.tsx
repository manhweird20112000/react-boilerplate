import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/scss/index.scss";
import { ConfigProvider } from "antd";
import { theme } from "@/infra/config/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider theme={theme}>
    <App />
  </ConfigProvider>
);
