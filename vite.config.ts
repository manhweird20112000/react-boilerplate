import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import legacy from "@vitejs/plugin-legacy";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "~": resolve(__dirname, "src"),
    },
    dedupe: ["tsx", "ts"],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  server: {
    strictPort: true,
    host: "0.0.0.0",
    port: Number(process.env.VITE_PORT || 8000),
  },
  preview: {
    strictPort: true,
    host: "0.0.0.0",
    port: Number(process.env.VITE_PORT || 8000),
  },
});
